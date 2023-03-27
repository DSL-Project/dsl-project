import { FaTwitter, FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="logo-media">
          <p className="bold-18">Digital Society Lab</p>
          <div className="media-container">
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
        <div className="copyright-terms">
          <p className="copyright">
            @ Digital Society Lab, 2023. McMaster University
          </p>
          <p className="terms">
            <a href="/">Privacty Policy</a>
            &nbsp;& &nbsp;
            <a href="/">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
