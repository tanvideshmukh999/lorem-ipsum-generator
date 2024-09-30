import React from 'react'

const CreateParagraph=({paragraph}) =>{
    return (
        <div className='para'>
        <p>{paragraph}</p>{
            console.log(paragraph)
        }
        </div>
    )
}

export default CreateParagraph