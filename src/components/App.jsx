import { Link, useNavigate } from 'react-router-dom'
import '../styles/App.css'
import { useSelector,useDispatch } from 'react-redux'
import { setTextState } from '../redux/Reducers/textStateSlice'
import { useState } from 'react'

function App() {
    const navigate = useNavigate();

    let text = "Age cannot wither her, nor custom stale Her infinite variety.";
    let textarray = text.split(" ");
    let textObjArray = textarray.map((t,index)=>{
        if(index==0){
            return {id: index,word: t, class: "none", cursorClass: "on"};
        }
        return {id: index,word: t, class: "none",cursorClass:"off"};
    })
    const [startTime,setStartTime] = useState();
    const [textState,setTextState] = useState(textObjArray);
    const [endTime, setEndTime] = useState();
    console.log(textState);

    const startTest=()=>{
        navigate("/test", {state:{textarray: textarray, textState: textState, startTime: startTime, endTime: endTime}})
    }
    return (
        <>
            <header></header>
            <main>
                <button className='Button' onClick={startTest}>Start Test</button>
                <Link to={"/timer-test"}><button className='Button' >Start Timer Test</button></Link>
            </main>
            <footer></footer>   
        </>
    )
}

export default App
