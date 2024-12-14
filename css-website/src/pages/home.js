import React from "react";
import "../styles/Home.css";
import LearnConnectGrow from "../components/LearnConnectGrow";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="nextEvent"></div>
        <div className="writings">
          <div className="societyName">
            <h1>Computer Science</h1>
            <p>Society</p>
          </div>
          <div className="societyDescription">
            <p>
              Go the distance bush league the gloves are off gamble responsible
              fast and furious daisy-cutter claret on the field
            </p>
          </div>
        </div>
      </div>
      <LearnConnectGrow />
      <Footer />
    </>
  );
};

export default Home;
