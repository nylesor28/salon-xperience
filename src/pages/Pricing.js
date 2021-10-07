import react from "react";
import FlashcardList from "../components/FlaschcardList.js";
import Flashcard from "../components/Flashcard";
import React, { useState, useEffect } from 'react';
import "../App.css";
import axios from "axios";

// import { Carousel } from "react-bootstrap";
// import Hero from "../components/Hero/index.js";
// import BootstrapCarouselComponent from '../components/Carousel/index.js';


function Pricing(props) {
    const[flashcards, setFlashcards]=useState(Flashcards)
  return (
      <div className="container">
      <FlashcardList flashcards={flashcards} />
      </div>
 
  );
}
const Flashcards=[{
    id: 0,
    service:"Custom Color",
    description: "Single Process",
    price:"$65",
},
{
    id: 2,
    service:"Blow Dry & Styling",
    description:"Updo",
    Price: "$65 plus"
},
{
    id: 3,
    service:"Blow Dry & Styling",
    description: "Formal Blow Dry",
    price: "$60 plus",
},
{
    id: 4,
    service:"Blow Dry & Styling",
    description: "Casual Blow Dry",
    price:"$30 plus",
}
]
export default Pricing;