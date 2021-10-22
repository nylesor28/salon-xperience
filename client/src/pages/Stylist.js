import react from "react";
// import { Carousel } from "react-bootstrap";
// import BootstrapCarouselComponent from '../components/Carousel/index.js';
import Styler from "../components/Styler"
import Carousel from "../components/Carousel"


function Stylist(props) {
  return (
      <div>
        <Carousel/>
         <Styler/>
 {/* <BootstrapCarouselComponent></BootstrapCarouselComponent>  */}
</div>
  );
}
export default Stylist;