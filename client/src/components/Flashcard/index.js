import React,{ useState } from 'react'


export default function Flashcard({flashcard}) {
    const[flip, setFlip]=useState(false)
    return (
        <div 
    className={`card ${flip ? 'flip' :''}`}
        onClick={()=> setFlip(!flip)}
        >
    <div className ="front"style ={{
            //    backgroundColor: "white",
               height: 200,
               padding: 0,
               width: 200,
               color: "silver",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
           }}>
        {flashcard.service}
        
           </div>
           <div className="back" style ={{
               backgroundColor: "white",
               height: 200,
               padding: 0,
               width: 200,
               color: "silver",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
           }}>
              {flashcard.description}
            <div className="flashcard-price">{flashcard.price}</div> 
           </div>
        </div>
    )
}
