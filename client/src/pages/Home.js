import react from "react";
import Content from "../components/Content";
import Styler from "../components/Styler";
import Carousel from "../components/Carousel";
// import ServiceList from "../components/ServiceList";


function Home(props) {
  return (
    <div>
      <Content>
        <Carousel/>
        <Styler/>
      </Content>
    </div>
  );
}
export default Home;
