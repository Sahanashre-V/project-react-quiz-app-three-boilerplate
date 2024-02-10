import React from "react";
import Home from "./Component/Home";
import Main from "./Component/Main";
import Result from "./Component/Result";
// import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router-dom";

function App(){
  return(
    <div>
      {/* <Home/> */}
      {/* <Main/> */}
      {/* <Result/> */}
  
      <Routes>
      
<Route  path="/Main" element={<Main/>}/>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/Result" element={<Result/>}/>

      </Routes>


    </div>
  )
}

export default App