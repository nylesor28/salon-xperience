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



function Stylist(props) {
    const[stylistflashcards, setStylistFlashcards]=useState(StylistFlashcards)
  return (
    <>
     <div className="row">
            <div className="flex justify-center">
              <h1 className="justify-content-center p-2 mt-4 rounded-lg border-2 animate-bounce text-white bg-pink-500 tileheading">STYLIST GALLERY</h1>
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
    speciality: "Speciality: Natural Hair",
    education:"Education: Empire Beauty School",
    image: img1,
    description: "BIO:I’m Roz, and I’ve been a Colorist at Salon Xperience for the past five years and has over 10 years of color and stylist experience. The wildest color I’ve ever dyed her hair was lime green and it was my favorite!",
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
  speciality: "Speciality: Custom Color, Formal Styling, and hair types",
  education:"Education: Empire Beauty School",
  image: img3,
  description: "BIO: Emilia has been a Colorist at Salon Xperience for the past eight years and has ten years of color and styling experience. She joined the Salon team in our mentorship program upon obtaining her license. After two years of working under our Master Colorist, Emilia has matured into full Colorist and now specializes in unique highlighting techniques, such as balayage and “baby highlights.”",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 3,
  stylist:"Eva",
  speciality: "Speciality: Design, Color, and Natural Hair",
  education:"Education: Empire Beauty School",
  image: img4,
  description: "BIO: Eva is a barber who has worked at Salon Xperience for the past five years. She specializes in straight razor shaves for those who like a more traditional shave. Eva creates a relaxed environment for her clients and looks forward to making you look and feel your best.",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 4,
  stylist:"Jurnee",
  speciality: "Speciality: custom color and natural Hair",
  education:"Education: Paul Mitchell School",
  image: img5,
  description: "BIO: Jurnee has been a Master Colorist at Salon for the past five years and has over 15 years of color and styling experience. Jurnee is trained and certified in multiple color systems and enjoys using her knowledge to create exactly what her clients are envisioning when they sit down in her chair.",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
},
{
  id: 5,
  stylist:"Maya",
  speciality: "Speciality: natural Hair",
  education:"Education: Paul Mitchell School",
  image: img6,
  description: "BIO: Maya has been a Colorist at Salon Xperience for the past eight years and has ten years of color and styling experience. She joined the Salon Xperience team in our mentorship program upon obtaining her license. After two years of working under Jurnee our Master Colorist, Maya became a full Colorist and now specializes in unique highlighting techniques, such as balayage and “baby highlights.”",
  ratings:"Ratings:⭐⭐⭐⭐⭐"
}
]

export default Stylist;