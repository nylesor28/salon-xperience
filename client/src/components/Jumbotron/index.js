import React from "react";
import jomboimg from "../../assets/images/jomboimg.jpg"

function Jumbotron() {
  return (
    <>
      <div className="border mt-2">
          <div>
              <img src={jomboimg} alt="Jombotron Picture"/>
          </div>
      </div>
      
    </>
  );
}

export default Jumbotron;