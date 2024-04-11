import React from "react";

const Hero = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "green" }}>Hero component</h1>
      {/* <div className='container shadow-lg d-md-flex justify-content-between'>
        <h2 className='text-danger border border-danger'>My work </h2>
        <h2 className='text-success border border-success'>Our work</h2>
    </div> */}

      {/* using bootstrap grid */}
      <div className="container shadow-lg p-5">
        <div className="row justify-content-between ">
          <h2 className="text-danger border border-danger col-md-6">My work </h2>
          <h2 className="text-success border border-success col-md-5">Our work</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
