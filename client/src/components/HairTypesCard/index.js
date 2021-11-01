import React from "react";
import HairTypes from "../HairTypes";

export default function HairTypesCard() {
    return (
        <div className="Hair-Types">
          {
            HairTypes.map((hairTypes)=> {
              return <div className="hairTypes" key={hairTypes.id}>
                <div className="hairTypes-content">
                  <img src={hairTypes.image} alt=""/>
                  <h1>{hairTypes.title}</h1>
                  <a href="github.com" className="blog-link">
                  </a>
                  <div className="hairTypesdescription-con">
                    <p>{hairTypes.description}</p>
                    <p>{hairTypes.price}</p>
                    </div>
              </div>
    </div>
            })
          }
          
        </div>
      );
    };
    // export default HairTypesCard;