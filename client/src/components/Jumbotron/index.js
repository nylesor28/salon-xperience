import React from "react";
import jomboimg from "../../assets/images/jomboimg2.jpg"

function Jumbotron() {
  return (
    <>
      <div className="" >
          <div className="mt-2 flex h-4/12 justify-center">
              <img className="w-7/12 h-4/12 border-2 rounded-lg" src={jomboimg} alt="Jombotron Picture"/>
          </div>
      </div>
      
    </>
  );
}

export default Jumbotron;