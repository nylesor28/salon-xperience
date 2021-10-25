import react from "react";
import Content from "../components/Content/index.js";
import ClientForm from '../components/ClientForm/index.js';
import Slot from "../components/BookingSlot/index.js";



function Home(props) {
  return (
      <div>
         <Content>
             <p>
Salon Xperience was established in 2021 with a mission to provide exceptional service via an inspired team, cutting-edge techniques, and an indulging experience to each every one of our guests. Our goal is to have you looking fantastic and feeling incredible inside and out after your visit with us.
            </p> 
        </Content>
          is working
          <ClientForm />
</div>
  );
}
export default Home;