import "../styles/LearnConnectGrow.css";

const LearnConnectGrow = () => {
  return (
    <div className="learnConnectGrow">
      <div className="learn">
        <h1>Learn</h1>
        <div className="text">
          <p>
            Learn from a well curated guidline in your journey to become the
            next techie.
          </p>
        </div>

        <img src="/assets/learnImage.png" className="learnImage" alt="learn" />
      </div>
      <div className="connect">
        <h1>Connect</h1>
        <div className="text">
          <p>
            Network with both senior and junior society members who are of like
            minded goals and aims.
          </p>
        </div>

        <img
          src="/assets/connectImage.png"
          className="connectImage"
          alt="connect"
        />
      </div>
      <div className="grow">
        <h1>Grow</h1>
        <div className="text">
          <p>
            Network with both senior and junior society members who are of like
            minded goals and aims.
          </p>
        </div>

        <img src="/assets/growImage.png" className="growImage" alt="grow" />
      </div>
    </div>
  );
};

export default LearnConnectGrow;
