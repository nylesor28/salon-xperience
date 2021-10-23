import react from "react";
import Content from "../components/Content";
import Jumbotron from "../components/Jumbotron";
import Styler from "../components/Styler";
import Carousel from "../components/Carousel";

function Home(props) {
  return (
    <div>
      <Content>
        <Carousel />
        <Styler />
      </Content>
    </div>
  );
}
export default Home;
