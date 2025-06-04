import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/result.css";

const Result=()=>{
    const location = useLocation();
    const startTime = location.state.startTime;
    let endTime = location.state.endTime;
    
    const correct = location.state.correct;
    const incorrect = location.state.incorrect;

    let startsec = new Date(startTime).getTime();
    let endsec = new Date(endTime).getTime();

    let milisec = Math.abs(endsec-startsec);
    let totalsec = (milisec/1000).toFixed(0);
    console.log(totalsec, totalsec);
    let totalmin = (totalsec/60).toFixed(2);

    let time = "";
    if(totalsec>59){
        let minutes = parseInt(Math.floor((totalsec/60)).toFixed(0));
        if(minutes<10){
            minutes="0"+minutes;
        }
        let seconds = totalsec - minutes*60;
        if(seconds<10){
            seconds="0"+seconds;
        }
        time = `${minutes}:${seconds}`;
    }
    else{
        let minutes = 0+""+0;
        let seconds = totalsec;
        if(seconds<10){
            seconds="0"+seconds;
        }
        time = `${minutes}:${seconds}`;
    }

    console.log("Time: ",time);
    console.log("correct: ",correct,);
    console.log("incorrect: ",incorrect);
    
    let allTypedEntry = correct+incorrect;
    const wpm = Math.abs((allTypedEntry)/totalmin).toFixed(0);
    console.log("WPM: ",wpm);

    let accuracy = ((correct/allTypedEntry)*100).toFixed(0)+"%";
    console.log("Accuracy: ",accuracy);


    return(
        <div className="resultMainDiv">
            <div className="mainStatsDiv">
                <div className="innerStatsDiv">
                    <label>WPM</label><span>{wpm}</span>
                </div>
                <div className="innerStatsDiv">
                    <label>Accuracy</label><span>{accuracy}</span>
                </div>
                <div className="innerStatsDiv">
                    <label>Time</label><span>{time}</span>
                </div>
            </div>
            <Link to={"/"}><button>Done</button></Link>
        </div>
    )
}

export default Result;