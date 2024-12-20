import React from "react";
import ImageSlider from "../components/ImageSlider";
import "../styles/Events.css";
import "../styles.css";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <>
      <div className="events">
        <div className="design">
          <div className="text">
            <h1>Attend Organized Events</h1>
          </div>

          <img
            src="/assets/calendarImage.png"
            alt="calendar"
            className="calendarImage"
          />
        </div>
      </div>
      <div className="event">
        <div className="top">
          <h1>See what events we have</h1>
          <button className="eventBtn">View all</button>
        </div>
        <ImageSlider />
      </div>
      <Footer />
    </>
  );
};

export default Events;
