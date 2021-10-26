import react from "react";
// import Carousel from "../components/HairTypesCard";
// import img1 from "../assets/hairtypes/1S.jpg";
// import img2 from "../assets/hairtypes/2a.jpg";
// import img3 from "../assets/hairtypes/2b.jpg";
// import img4 from "../assets/hairtypes/2c.jpg";
// import img5 from "../assets/hairtypes/3b.jpg";
// import img6 from "../assets/hairtypes/3c.jpg";
// import img7 from "../assets/hairtypes/4a.jpg";
// import img8 from "../assets/hairtypes/4b.jpg";
// import img9 from "../assets/hairtypes/4bf.jpg";
// import img10 from "../assets/hairtypes/4c.jpg";
import React, { useState, useEffect } from 'react';
import Carousel from "../components/HairTypesCard";

function Services(props) {
  // const[hairtypescards, setHairTypesCards]=useState(HairTypesCards)
  return (
    <div>
      <Carousel />
    </div>
    // <>
    // <div className="row">
    //        <div className="col-sm-6">
    //          <h1 className="justify-content-center py-5">HAIR TEXTURE TYPES</h1>
    //        </div>
    //      </div>
    //  <div className="hairtypes-container">
    //  <HairTypesCardList hairtypescards={hairtypescards} />
    //  </div>
    //  </>
  );
}
// const HairTypesCards=[{
//   id: 0,
//   title:"1-Straight",
//   image: img1,
// },
// {
//   id: 1,
//   title:"2a-thin wavy",
//   image: img2,
// },
// {
//   id: 2,
//   title:"2b-medium wavy",
//   image: img3,
// },
// {
//   id: 3,
//   title:"2c-thick wavy",
//   image: img4,
// },
// {
//   id: 4,
//   title:"3b-medium curls",
//   image: img5,
// },
// {
//   id: 5,
//   title:"3c-tight curls",
//   image: img6,
// },
// {
//   id: 6,
//   title:"4a-soft",
//   image: img7,
// },
// {
//   id: 7,
//   title:"4b-wiry",
//   image: img8,
// },
// {
//   id: 8,
//   title:"4b-wiry",
//   image: img9,
// },
// {
//   id: 9,
//   title:"4c- extremely wiry",
//   image: img10,
// }

// {
//   id: 10,
//   title:"Roz",
//   image: img5,
// },
// ];
// };
export default Services;