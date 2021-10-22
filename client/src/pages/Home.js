import react from "react";
import Content from "../components/Content";
import Jumbotron from "../components/Jumbotron";
import Styler from "../components/Styler";

function Home(props) {
  return (
    <div>
      <Content>
        <Jumbotron />
        <Styler />
      </Content>
    </div>
  );
}
export default Home;
