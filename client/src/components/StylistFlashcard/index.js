import React,{ useState } from 'react'


export default function StylistFlashcard({stylistflashcard}) {
    const[flip, setFlip]=useState(false)
    return (
        <div 
    className={`stylistcard ${flip ? 'flip' :''}`}
        onClick={()=> setFlip(!flip)}
        >
    <div className ="front"style ={{
            //    backgroundColor: "white",
               height: 400,
               padding: 0,
               width: 200,
               color: "silver",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
           }}>
        <h3>{stylistflashcard.stylist}</h3>
        <img
          className="location-front-image justify-content-center"
          src={stylistflashcard.image}
          width="150"
          height="150"
          alt="Stylist"
        />
        <p>{stylistflashcard.ratings}</p>
           </div>
           <div className="back" style ={{
               backgroundColor: "white",
               height: 400,
               padding: 0,
               width: 200,
               color: "silver",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
           }}>
            <h3>{stylistflashcard.education}</h3>
             <h4> {stylistflashcard.speciality}</h4>
            <p>{stylistflashcard.description}</p> 
           </div>
        </div>
    )
}
