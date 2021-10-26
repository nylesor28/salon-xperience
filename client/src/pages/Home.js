import react from "react";
import Content from "../components/Content";
// import Styler from "../components/Styler";
// import Carousel from "../components/Carousel";
// import ServiceList from "../components/ServiceList";
import HomeForm from "../components/ListGroup";
import PolicyForm from "../components/ListGroupPolicies";


function Home(props) {
  return (
      <div>
         <Content>
             <p className="subtext"
              style={{
                display: "flex",
                // color: "silver",
                justifyContent: "center",
                alignItems: "center",
                fontSize:'36px',
                marginLeft:'-175px',
                marginRight:'-175px',
                // fontWeight:'bold',
              }}>
Salon Xperience was established in 2021 with a mission to provide exceptional service via an inspired team, cutting-edge techniques, and an indulging experience to each every one of our guests. Our goal is to have you looking fantastic and feeling incredible inside and out after your visit with us.
            </p>
            </Content>
           <HomeForm />
           <PolicyForm/>
          {/* <Carousel/> */}
        {/* <Styler/> */}
          {/* <ClientForm /> */}
  </div>
  );
}
export default Home;
