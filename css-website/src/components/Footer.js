import "../styles/Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="header">
      <img src="/assets/cssLogo.png" alt="css" className="cssLogo" />
      <div></div>
      <div className="connect">
        <h1>Connect</h1>
        <ul>
          <li>Blog</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="programmes">
        <h1>Programmes</h1>
        <ul>
          <li>School of Groups</li>
          <li>Tell your story</li>
          <li>PC Clinic</li>
        </ul>
      </div>
    </div>
    <div style={{ flex: 1 }}></div>
    <div className="icons">
      <img src="/assets/Instagram.png" alt="instagram" className="icon" />
      <img src="/assets/LinkedIn.png" alt="linkedIn" className="icon" />
      <img src="/assets/TwitterX.png" alt="twitterX" className="icon" />
      <img src="/assets/Facebook.png" alt="facebook" className="icon" />
    </div>
    <div className="bottom">
      <p>Terms</p>
      <p>Privacy</p>
      <p>Security</p>
    </div>
  </div>
);

export default Footer;
