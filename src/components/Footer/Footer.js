import { FaTwitter, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="logo-media">
          <p className="bold-18">Digital Society Lab</p>
          <div className="media-container">
            <a
              href="https://twitter.com/DigSocietyLab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter aria-hidden="true" />
              <span className="sr-only">Follow us on Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/DigSocietyLab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF aria-hidden="true" />
              <span className="sr-only">Follow us on Facebook</span>
            </a>
          </div>
        </div>
        <div className="copyright-terms">
          <p className="copyright">
            @ Digital Society Lab, {new Date().getFullYear()}. McMaster
            University
          </p>
          <p className="terms">
            <a href="/">Privacy Policy</a>
            &nbsp;& &nbsp;
            <a href="/">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
