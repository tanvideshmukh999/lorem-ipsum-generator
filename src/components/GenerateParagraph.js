import React from "react";
import { useState } from "react";

const GenerateParagraph=({generatenewpara}) =>{
    const[pnumber,setpnumber]=useState(0);
    const addPara=()=>{
        generatenewpara(pnumber)
    }

    const handlepnumber=(e)=>{
        setpnumber(e.target.value)
    }

    return (
        <div>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className='generatepara'>
        <span>Paragraph: </span>
        <input type="number" value={pnumber} onChange={handlepnumber}/> 
        <button onClick={addPara}>GENERATE</button>
        </div>
       
        </div>
    )
}
export default GenerateParagraph