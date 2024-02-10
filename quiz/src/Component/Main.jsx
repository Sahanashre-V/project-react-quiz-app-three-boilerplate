import React, { useState } from "react";
import Data from "./QuizQuestion.json";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function Main(){
  const [index, setIndex] = useState(0);
  const [data,setData] = useState({
    attempted: 0,
    correct : 0,
    wrong: 0,
    score:0
  })
  const Navigate = useNavigate()

  const previous = () => {
    if (index === 0) {
      setIndex(Data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index === Data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const quit = () => {
    alert("Are you sure you want to quit?");
    setIndex(index + 1);
  };

  const handleChange = (event) => {
    const qnIndex = index;
    const choosedOption = event.target.innerHTML;
    const qnCrtAns = Data[qnIndex].answer;

    if (choosedOption === qnCrtAns) {
      alert("Correct Answer");
      setData({...data,correct:data.correct+1,attempted:data.attempted+1,score:data.score+1})
    } 
    
    else {
      alert("Wrong Answer");
      setData({...data,wrong:data.wrong+1,attempted:data.attempted+1,score:data.score-1})
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="qn">Question</h1>
        <p>
          {index + 1} of 15
        </p>
        <p className="qn">{Data[index].question}</p>
        <div className="options">
          <div className="option">
            <p onClick={(e) => handleChange(e)}>{Data[index].optionA}</p>
          </div>
          <div className="option">
            <p onClick={(e) => handleChange(e)}>{Data[index].optionB}</p>
          </div>
          <div className="option">
            <p onClick={(e) => handleChange(e)}>{Data[index].optionC}</p>
          </div>
          <div className="option">
            <p onClick={(e) => handleChange(e)}>{Data[index].optionD}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="previous" onClick={previous}>
            Previous
          </button>
          <button className="next" onClick={next}>
            Next
          </button>
          <button className="quit" onClick={quit}>
            Quit
          </button>
        
            <button className="finish" onClick={()=> {Navigate("/Result",{state : data})}}>Finish</button>

        </div>
      </div>
    </div>
  );
};

export default Main;
