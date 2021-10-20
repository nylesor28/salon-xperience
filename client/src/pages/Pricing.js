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
    price:"$65",
},
{
    id: 3,
    service:"Blow Dry & Styling",
    description: "Formal Blow Dry",
    price: "$60",
},
{
    id: 4,
    service:"Blow Dry & Styling",
    description: "Casual Blow Dry",
    price:"$50",
},
{
    id: 5,
    service:"Hydrating Treatment",
    description: "Hair & Scalp Treatment",
    price:"$20",
},
{
    id: 6,
    service:"Protein Treatment",
    description: "Hair & Scalp Treatment",
    price:"$20",
},
{
    id: 7,
    service:"Scalp Treatment",
    description: "Hair & Scalp Treatment",
    price:"$30",
},
{
    id: 8,
    service:"Strengthening Treatment",
    description: "Hair & Scalp Treatment",
    price:"$35",
},
{
    id: 9,
    service:"Brazilian Blowout",
    description: "Smoothing Treatments",
    price:"$235",
},
{
    id: 10,
    service:"Relaxers",
    description: "Keratin Treatment",
    price:"$250",
},
{
    id: 11,
    service:"Perm",
    description: "Keratin Treatment",
    price:"$250",
},
{
    id: 12,
    service:"Gents Haircuts",
    description: "Hair & Scalp Treatment",
    price:"$35",
},
{
    id: 13,
    service:"Ladies Haircuts",
    description: "Hair & Scalp Treatment",
    price:"$45",
},
{
    id: 15,
    service:"Youth Haircuts",
    description: "Hair & Scalp Treatment",
    price:"$25",
},
{
    id: 16,
    service:"Gents Full Service Haircuts",
    description: "The Gentlemen will receive a wash and steam",
    price:"$40",
},
{
    id: 17,
    service:"Gents Color Treatment",
    description: "Enhance the natural color of your hair or add some flair",
    price:"$50",
},
{
    id: 18,
    service:"The ulitmate identity",
    description: "The gentlemen will receive a hair cut, dye, and beard treatment",
    price:"$65",
},
{
    id: 19,
    service:"Box Braids",
    description: "Single Braids",
    price:"$180",
},
{
    id: 20,
    service:"Crochet Braids",
    description: "Protective Styling",
    price:"$120",
},
{
    id: 21,
    service:"Hair Enhancement",
    description: "Extensions",
    price:"$275",
},
{
    id: 20,
    service:"Hydrating Treatment",
    description: "Hair & Scalp Treatment",
    price:"$20 plus",
},
{
    id: 20,
    service:"Hydrating Treatment",
    description: "Hair & Scalp Treatment",
    price:"$20 plus",
},
{
    id: 20,
    service:"Hydrating Treatment",
    description: "Hair & Scalp Treatment",
    price:"$20 plus",
},
{
    id: 20,
    service:"Hydrating Treatment",
    description: "Hair & Scalp Treatment",
    price:"$20 plus",
}
]
export default Pricing;