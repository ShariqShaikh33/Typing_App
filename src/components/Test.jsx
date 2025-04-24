import React, { useState } from "react";
import { Link } from "react-router-dom";




const Textarea=({text})=>{

    return (
        <div>
            <span></span>
            <span>{text}</span>
        </div>
    )
}

const Typearea=({typingWord, setTypingWord, textarray, typedWord, setTypedWord, toBeTyped, setToBeTyped, wordCount, setWordCount})=>{
    const spaceToSubmit=(event)=>{
        let value = event.target.value;
        setTypingWord(value);
        if(value.includes(" ")){
            console.log(value);
            setTypedWord(value);
            
            
            setWordCount(wordCount+1);
            setToBeTyped(textarray[wordCount+1]);
            console.log(toBeTyped);
            if(value.trim()==toBeTyped){
                console.log("Correct");
            }
            else{
                console.log("Incorrect");
            }
            setTypingWord("");
        }
    }

    return(
        <div>
            <input id="typearea" placeholder="Type here" value={typingWord} onChange={spaceToSubmit}></input>
        </div>
    )
}

const Test=()=>{
    let text = "Racism was not a problem on the Discworld, because—what with trolls and dwarfs and so on—speciesism was more interesting. Black and white lived in perfect harmony and ganged up on green."
    let textarray = text.split(" ");
    
    const [wordCount, setWordCount] = useState(0);
    const [typingWord, setTypingWord] = useState("");
    const [typedWord,setTypedWord] = useState("");
    const [toBeTyped,setToBeTyped] = useState(textarray[wordCount]);


    return(
        <>
            <Textarea text={text}></Textarea>
            <div>{toBeTyped}</div>
            <Typearea typingWord={typingWord} setTypingWord={setTypingWord} textarray={textarray} typedWord={typedWord} setTypedWord={setTypedWord} toBeTyped={toBeTyped} setToBeTyped={setToBeTyped} wordCount={wordCount} setWordCount={setWordCount}></Typearea>

            <div>{typedWord} {wordCount}</div>
            <Link to={"/result"}><button>Done</button></Link>
        </>
    )
}

export default Test;