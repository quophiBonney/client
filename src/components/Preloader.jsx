import React from "react";
import preloaderGif from "../assets/images/circle-gif.gif";
const Preloader = () => {
  return (
    <div className="container-fluid preloader-container">
      <div className="row preloader">
        <div className="col-12">
          <img
            src={preloaderGif}
            alt="circle loading gif"
            className="img-fluid img-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
