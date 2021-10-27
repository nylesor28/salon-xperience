import StylistFlashcardList from "../components/StylistFlashcardList";
import React, { useState, useEffect } from 'react';
import "../App.css";
import ServiceCardList from "../components/ServiceCardList";



function Services(props) {
  const[stylistflashcards, setStylistFlashcards]=useState(StylistFlashcards)
  return (
      <div>
    <StylistFlashcardList stylistflashcards={stylistflashcards} />

</div>
  );
}

const ServiceCards=[{
  id: 0,
  stylist:"Roz",
  speciality: "natural Hair",
  education:"Paul Mitchell",
  image: img1,
  description: "long term"
},
{
id: 1,
stylist:"Akem",
speciality: "natural Hair",
education:"Paul Mitchell",
image: img2,
description: "long term"
},
{
id: 2,
stylist:"Emilia",
speciality: "natural Hair",
education:"Paul Mitchell",
image: img3,
description: "long term"
},
{
id: 3,
stylist:"Eva",
speciality: "natural Hair",
education:"Paul Mitchell",
image: img4,
description: "long term"
},
{
id: 4,
stylist:"Jurnee",
speciality: "natural Hair",
education:"Paul Mitchell",
image: img5,
description: "long term"
},
{
id: 5,
stylist:"Maya",
speciality: "natural Hair",
education:"Paul Mitchell",
image: img6,
description: "long term"
}
]
export default Services;