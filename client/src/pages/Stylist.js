import react from "react";
import StylistFlashcardList from "../components/StylistFlashcardList";
import React, { useState, useEffect } from 'react';
import "../App.css";
import img1 from "../assets/stylist/Roz.jpg";
import img2 from "../assets/stylist/Akeem.jpg";
import img3 from "../assets/stylist/Emilia.jpg";
import img4 from "../assets/stylist/Eva.jpg";
import img5 from "../assets/stylist/Jurnee.jpg";
import img6 from "../assets/stylist/maya.jpg";
import BootstrapCarouselComponent from '../components/Carousel/index.js';
import axios from "axios";


function Stylist(props) {
    const[stylistflashcards, setStylistFlashcards]=useState(StylistFlashcards)
  return (
    <>
     <div className="row">
            <div className="col-sm-6">
              <h1 className="justify-content-center py-5">STYLIST GALLERY</h1>
            </div>
          </div>
      <div className="stylist-container">
      <BootstrapCarouselComponent></BootstrapCarouselComponent>
      
      <StylistFlashcardList stylistflashcards={stylistflashcards} />
      </div>
      </>
 
  );
}
const StylistFlashcards=[{
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

export default Stylist;