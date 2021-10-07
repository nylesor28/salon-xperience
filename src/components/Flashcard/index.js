import React,{ useState } from 'react'


export default function Flashcard({flashcard}) {
    const[flip, setFlip]=useState(false)
    return (
        <div 
    className={`card ${flip ? 'flip' :''}`}
        onClick={()=> setFlip(!flip)}
        >
    <div className ="front">
        {flashcard.service}
        
           </div>
           <div className="back">
              {flashcard.description}
            <div className="flashcard-price">{flashcard.price}</div> 
           </div>
        </div>
    )
}
