import {React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setTextState } from "../redux/Reducers/textStateSlice";
import "../styles/test.css";

//This is a component that renders the Text.
const Textarea=({textState})=>{
    return (
        <div className="textMainDiv">
            {
                textState.map((i)=>{
                    return (<span key={i.id}><span className={i.class+" "+i.cursorClass}>{i.word}</span><span> </span></span>)
                })
            }
        </div>
    )
}

//This is the component the renders the input field and handles the States.
const Typearea=({startTime, endTime, correct, setCorrect, incorrect, setIncorrect,inputWord, setInputWord, navigate, textState, setTextState, textarray, typedWord, setTypedWord, currentWord, setCurrentWord, wordCount, setWordCount})=>{
    
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
                setCorrect(correct+1);
            }
            else{
                changeCssClass(wordCount,"red");
                setIncorrect(incorrect+1);
            }
            
            setInputWord("");
        }
        else if(value.includes(" ") && wordCount==textarray.length){
            endTime=new Date();
            navigate("/result",{state:{startTime: startTime,correct: correct, incorrect: incorrect, endTime: endTime}});

        }
    }

    return(
        <div className="typeMainDiv">
            <input className="typeInput" id="typearea" placeholder={currentWord} autoFocus value={inputWord} onChange={spaceToSubmit}></input>
        </div>
    )
}

//This is the main function of the page
const Test=()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const textState = location.state.textState;
    const textarray = location.state.textarray;
    const [startTime,setStartTime] = useState("");
    useEffect(()=>{
        setStartTime(new Date());
    },[])
    let endTime = location.state.endTime;

    //The state with all the words from the text and its CSSclasses in and array.
    const [inputWord, setInputWord] = useState(""); //The word being typed in the input
    const [typedWord,setTypedWord] = useState(""); //The word submitted/entered after typing
    const [wordCount, setWordCount] = useState(0); //index of the current word
    const [currentWord,setCurrentWord] = useState(textarray[wordCount]); //The current word which is to be typed
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    
    return(
        <div className="testParentDiv">
            <div className="testMainDiv">
                <Textarea textState={textState}></Textarea>
                <Typearea startTime={startTime} correct={correct} setCorrect={setCorrect} incorrect={incorrect} setIncorrect={setIncorrect} endTime={endTime} inputWord={inputWord} setInputWord={setInputWord} textState={textState} setTextState={setTextState} navigate={navigate} textarray={textarray} typedWord={typedWord} setTypedWord={setTypedWord} currentWord={currentWord} setCurrentWord={setCurrentWord} wordCount={wordCount} setWordCount={setWordCount}></Typearea>
            </div>
            
        </div>
    )
}
export default Test;