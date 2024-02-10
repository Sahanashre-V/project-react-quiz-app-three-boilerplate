import { Component } from "react";
import "../Home.css";
import {Link} from "react-router-dom";

class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1 className="quizapp">Quiz App</h1>
                <Link to="/Main">
                <button className="play">Play</button>
                </Link>
                
                </div>
        )
    }
}

export default Home