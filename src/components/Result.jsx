import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Result=()=>{
    const location = useLocation();
    const startTime = location.state.startTime;
    console.log(startTime);
    let endTime = location.state.endTime;
    
    //endTime = new Date();
    console.log(endTime);
    const correct = location.state.correct;
    const incorrect = location.state.incorrect;

    let startsec = new Date(startTime).getTime();
    let endsec = new Date(endTime).getTime();

    let mins = Math.abs(endsec-startsec);
    let totalsec = (mins/1000).toFixed(0);
    let totalmin = (totalsec/60).toFixed(2);


    console.log(totalsec)
    console.log(totalmin);
    console.log("correct: ",correct,);
    console.log("incorrect: ",incorrect);
    let allTypedEntry = correct+incorrect;
    console.log(allTypedEntry);

    const wpm = Math.abs((allTypedEntry)/totalmin);
    console.log(wpm);

    let accuracy = (correct/allTypedEntry)*100+"%";
    console.log(accuracy);


    return(
        <>
            <div>Result: </div>
            <Link to={"/"}><button>Done</button></Link>
        </>
    )
}

export default Result;