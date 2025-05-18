import React,{useEffect, useState} from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//This is a timer component
const Timer=({min,sec})=>{
    return (
        <>
            <span>{min}</span><span>:</span><span>{sec}</span>
        </>
    )
}


//This is a component that renders the Text.
const Textarea=({textState})=>{
    return (
        <div>
            {
                textState.map((i)=>{
                    return (<span key={i.id}><span className={i.class+" "+i.cursorClass}>{i.word}</span><span> </span></span>)
                })
            }
        </div>
    )
}

//This is the component the renders the input field and handles the States.
const Typearea=({inputWord, setInputWord, navigate, textState, setTextState, textarray, typedWord, setTypedWord, currentWord, setCurrentWord, wordCount, setWordCount})=>{
    
    //This is a function that changes the CSS class of word at the [wordCount]th index.
    function changeCssClass(wordCount,CSSclass){
        setTextState(
            textState.map((i)=>{
                //Finds the word at the [wordCount]th index and applies the cssClass from the argument given
                if(i.id==wordCount){
                    i.class= CSSclass;
                    i.cursorClass = "off";
                    return i;
                }
                //Finds the next word and updates its CSS class inorder to highlight it
                if(i.id==wordCount+1){
                    i.cursorClass="on";
                    return i;
                }
                
                else{
                    return i;
                }
            })
        )
    }
    
    //The Function that submits the value typed in the input whenever " " is pressed
    //This function also handles most of the States
    const spaceToSubmit=(event)=>{
        let value = event.target.value;
        setInputWord(value);
        if(value.includes(" ") && wordCount<textarray.length){
            setTypedWord(value);
            setWordCount(wordCount+1);
            setCurrentWord(textarray[wordCount+1]);
            
            if(value.trim()==currentWord){
                changeCssClass(wordCount,"green");
            }
            else{
                changeCssClass(wordCount,"red");
            }
            
            setInputWord("");
        }
        else if(value.includes(" ") && wordCount==textarray.length){
            navigate('/result');
        }
    }

    return(
        <div>
            <input id="typearea" placeholder={currentWord} autoFocus value={inputWord} onChange={spaceToSubmit}></input>
        </div>
    )
}


//This is the main function of the page
const Timertest=()=>{
    const navigate = useNavigate();
    let text = "Racism was not a problem on the Discworld, because—what with trolls and dwarfs and so on—speciesism was more interesting. Black and white lived in perfect harmony and ganged up on green."
    let textarray = text.split(" ");
    let textObjArray = textarray.map((t,index)=>{
        if(index==0){
            return {id: index,word: t, class: "none", cursorClass: "on"};
        }
        return {id: index,word: t, class: "none",cursorClass:"off"};
    })
    const [textState,setTextState] = useState(textObjArray);//The state with all the words from the text and its CSSclasses in and array.
    const [inputWord, setInputWord] = useState(""); //The word being typed in the input
    const [typedWord,setTypedWord] = useState(""); //The word submitted/entered after typing
    const [wordCount, setWordCount] = useState(0); //index of the current word
    const [currentWord,setCurrentWord] = useState(textarray[wordCount]); //The current word which is to be typed
    const [time, setTime] = useState({min: 1, sec: 10});

    // useEffect(()=>{
    //     setInterval(()=>timerFunction(time),1000);
    // },[time]);
    
    function timerFunction(){
        console.log(time);  
        if((time.sec)>=0){
            let newtime = {...time};
            newtime.sec -= 1;
            setTime(newtime);
        }
        else if((time.sec)<0){
            let newtime = {...time};
            newtime.sec = 59;
            setTime(newtime);
        }
    };

    
    return(
        <>
            <Timer min={time.min} sec={time.sec}></Timer>
            <Textarea textState={textState}></Textarea>
            <Typearea inputWord={inputWord} setInputWord={setInputWord} textState={textState} setTextState={setTextState} navigate={navigate} textarray={textarray} typedWord={typedWord} setTypedWord={setTypedWord} currentWord={currentWord} setCurrentWord={setCurrentWord} wordCount={wordCount} setWordCount={setWordCount}></Typearea>
            <Link to={"/result"}><button>Done</button></Link>
        </>
    )
}
export default Timertest;