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
    education:"Empire Beauty School",
    image: img1,
    description: "long term",
    ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 1,
  stylist:"Akem",
  speciality: "Speciality: natural Hair",
  education:"Education: Paul Mitchell School",
  image: img2,
  description: "BIO: Akeem has been a barber for six years. Originally born and raised in Lancaster, I moved to Boston in 2010 looking for a new adventure. Working at Barbershop has been my favorite adventure so far – I love building strong connections with my clients and helping them express their personalities through their appearance!",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 2,
  stylist:"Emilia",
  speciality: "natural Hair",
  education:"Empire Beauty School",
  image: img3,
  description: "long term",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 3,
  stylist:"Eva",
  speciality: "natural Hair",
  education:"Empire Beauty School",
  image: img4,
  description: "long term",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 4,
  stylist:"Jurnee",
  speciality: "natural Hair",
  education:"Paul Mitchell School",
  image: img5,
  description: "long term",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 5,
  stylist:"Maya",
  speciality: "natural Hair",
  education:"Paul Mitchell School",
  image: img6,
  description: "long term",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
}
]

export default Stylist;