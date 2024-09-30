import logo from './logo.svg';
import './App.css';
import GenerateParagraph from './components/GenerateParagraph';
import { useState, useEffect } from 'react';
import ParaContainer from './components/ParagraphContainer';

function App() {

  const [count,setcount]=useState(0);

  const generatenewpara=(number)=>{
    if(number>20){
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
    }else{
      setcount(number)
    }
    console.log(number);
  }

  return (
   <div className="App">
    <GenerateParagraph generatenewpara={generatenewpara}/>
    <ParaContainer count={count}/>


   </div>
  );
}

export default App;
