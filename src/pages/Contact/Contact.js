//import GoogleMap from "./GoogleMap";
import dslMapStill from "../../assets/dslMapStill.png";
function Contact() {
  // const location = {
  //   latitude: 43.26224447913664,
  //   longitude: -79.92247478517749,
  // };
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="form-container">
          <h1>Contact the Lab</h1>
          <form action="">
            <div className="name-email-subject">
              <fieldset>
                <label className="semi-14" htmlFor="name">
                  Name*
                </label>
                <input
                  className="regular-14"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </fieldset>
              <fieldset>
                <label className="semi-14" htmlFor="email">
                  Email*
                </label>
                <input
                  className="regular-14"
                  id="email"
                  type="email"
                  placeholder="email@address.com"
                />
              </fieldset>
              <fieldset>
                <label className="semi-14" htmlFor="subject">
                  Subject*
                </label>
                <select
                  className="regular-14"
                  name="subject"
                  id="subject"
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="study">Study</option>
                  <option value="working at the lab">Working at the Lab</option>
                  <option value="media inquiry">Media inquiry</option>
                  <option value="other">Other</option>
                </select>
              </fieldset>
            </div>
            <div className="contact-message">
              <label className="semi-14" htmlFor="your-message">
                Your Message*
              </label>
              <input name="your message" id="your-message"></input>
            </div>
            <div className="button-container">
              <p className="text-box">
                The information above is used solely to respond to your inquiry.
              </p>
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="contact-wrapper">
        <div className="address-container">
          <div className="address">
            <div className="street-address">
              <h5>Digital Society Lab</h5>
              <p>1280 Main St W</p>
              <p>Hamilton, ON</p>
              <p>L8S 4L8</p>
            </div>
            <div className="contact-methods">
              {/* <div className="phone"> */}
              <div>Phone:</div>
              <div>555-555-5555</div>
              {/* </div> */}
              {/* <div className="email-address"> */}
              <div>Email</div>
              <div>
                <a href="mailto: webmaster@digitalsocietylab.org">
                  webmaster@digitalsocietylab.org
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="map">
            <img
              src={dslMapStill}
              alt="a map indicating digital society lab location"
            />
            {/* <GoogleMap location={location} width={600} height={450} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
