// import React from "react";
// // import Image from 'react-bootstrap/Image';
// // import Container from 'react-bootstrap/Container';
// // import Row from 'react-bootstrap/Row';
// // import Col from 'react-bootstrap/Col'
// // import HairTypesCardList from "../HairTypesCardList";
// import Straight from "./../../assets/hairtypes/Straight.jpg";
// import ThinWavy from "./../../assets/hairtypes/ThinWavy.jpg";
// import MediumWavy from "./../../assets/hairtypes/MediumWavy.jpg";
// import ThickWavy from "./../../assets/hairtypes/ThickWavy.jpg";
// import mediumCurls from "./../../assets/hairtypes/mediumCurls.jpg";
// import TightCurls from "./../../assets/hairtypes/TightCurls.jpg";
// import SoftWiry from "./../../assets/hairtypes/SoftWiry.jpg";
// import Wiry from "./../../assets/hairtypes/Wiry.jpg";
// import WiryF from "./../../assets/hairtypes/WiryF.jpg";
// import extremelywiry from "./../../assets/hairtypes/extremelywiry.jpg";
// import Card from '../Card';

// class Carousel extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
// Items:[{
//     id: 0,
//     title:"1S",
//     imgSrc: Straight,
//     selected: false
//   },
//   {
//     id: 1,
//     title:"2a-thin wavy",
//     image: ThinWavy,
//   },
//   {
//     id: 2,
//     title:"2b-medium wavy",
//     image: MediumWavy,
//   },
//   {
//     id: 3,
//     title:"2c-thick wavy",
//     image: ThickWavy,
//   },
//   {
//     id: 4,
//     title:"3b-medium curls",
//     image: mediumCurls,
//   },
//   {
//     id: 5,
//     title:"3c-tight curls",
//     image: TightCurls,
//   },
//   {
//     id: 6,
//     title:"4a-soft",
//     image: SoftWiry,
//   },
//   {
//     id: 7,
//     title:"4b-wiry",
//     image: Wiry,
//   },
//   {
//     id: 8,
//     title:"4b-wiry",
//     image: WiryF,
//   },
//   {
//     id: 9,
//     title:"4c-extremely wiry",
//     image: extremelywiry,
//   },
// ]
//         }
//     }
//     handleCardClick= (id, card)=>{
//         let items =[...this.state.items];

//         items[id].selected = items[id].selected ? false :true;

//         items.forEach(item =>{
//             if(item.id !== id){
//                 item.selected = false;
//             }
//         });
//         this.setState({
//             items
//         });
//     }
//     makeItems=(items) =>{
//         return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
//     }


//     render() {
//         return
//      <p> works</p>   
//     };
// }

// export default Carousel;