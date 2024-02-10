import React from "react";
import "../Result.css";
import { Link, useLocation } from "react-router-dom";

function Result(){
    let location = useLocation()
    let valuefromProps = location.state

    return (
        <div>
            <p className="result">Result</p>
            <div className="main">
                <p className="practice">You need more practice!</p>
                <h1 className="blue">Your score is {valuefromProps.score}</h1>
                <div className="flex">
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className="flex">
                    <p>Number of attempted questions</p>
                    <p>{valuefromProps.attempted}</p>
                </div>
                <div className="flex">
                    <p>Number of correct answers</p>
                    <p>{valuefromProps.correct}</p>
                </div>
                <div className="flex">
                    <p>Number of wrong answers</p>
                    <p>{valuefromProps.wrong}</p>
                </div>
            </div>

            <div className="resultbutton">
                <Link to="/Main">
                    <button className="playagain">Play Again</button>
                </Link>
                <Link to="/">
                    <button className="backhome">Back to home</button>
                </Link>
            </div>
        </div>
    );
}

export default Result;
