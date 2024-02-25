import React from "react";
import HeroImage from "../assets/Hero_img.jpg"
const Home = () => {

  // const customStyle ={
  //    '@media (min-width: 1000px)': {
  //     height: "70vh"
  //   }
  // }
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={HeroImage}
            alt="Card"
            height={500}
            // style={customStyle}
            
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-medium">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
