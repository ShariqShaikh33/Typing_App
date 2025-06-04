import { Link, useNavigate } from 'react-router-dom'
import '../styles/App.css'
import { useSelector,useDispatch } from 'react-redux'
import { setTextState } from '../redux/Reducers/textStateSlice'
import { useState, useEffect } from 'react'

function App() {
    const navigate = useNavigate();

    async function fetchData(url){
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    const [text,setText] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    
    useEffect(()=>{
        let max = 12;
        let min = 1;
        let randomid = (Math.random()*(max-min)+min).toFixed(0);
        fetchData(`https://typing-app-1.onrender.com/api/id/${randomid}`)
        .then((e)=>{
                let result= e[0].text;
                setText(result);
        });
    },[])
    console.log(text);

    const startTest=()=>{
        let textarray = text?.split(" ");
            let textObjArray = textarray.map((t,index)=>{
                if(index==0){
                    return {id: index,word: t, class: "none", cursorClass: "on"};
                }
                return {id: index,word: t, class: "none",cursorClass:"off"};
            })
        setTextState(textObjArray);
        navigate("/test", {state:{textarray: textarray, textState: textObjArray, startTime: "", endTime: ""}})
    }
    return (
        <div className='appParentDiv'>
            <header></header>
            <main>
                <button className='Button' onClick={startTest}>Start Test</button>
            </main>
            <footer></footer>   
        </div>
    )
}

export default App
