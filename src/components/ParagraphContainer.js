import React from "react";
import data from './data.json'
import CreateParagraph from "./CreateParagraph";

const ParaContainer=({count})=>{
    return (
        <div className="paraContainer">
            {
                 data.map((para,index)=>{
                    console.log(index,count)

                    if(index < parseInt(count)){
                        console.log(para)
                        return <CreateParagraph key={para.id} paragraph={para.text}/>
                    }
            }
                 )
    }

        </div>
    )
}
export default ParaContainer
