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
                  className="regular-14 default"
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

              <textarea
                className="default regular-14"
                name="your message"
                id="your-message"
                cols="30"
                rows="8"
                placeholder="Start typing your message..."
              />
            </div>
            <div className="button-container">
              <p className="text-box semi-14">
                The information above is used solely to respond to your inquiry.
              </p>
              <button className="regular-caps">SEND</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="contact-wrapper">
        <div className="address-container">
          <div className="address">
            <div className="bold-18 address-name">Digital Society Lab</div>
            <div className="street-address">
              <p className="bold-18">1280 Main St</p>
              <p className="bold-18">WHamilton</p>
              <p className="bold-18">ONL8S4L8</p>
            </div>
            <div className="contact-methods">
              <div className="bold-16">Phone:</div>
              <div className="bold-16">555-555-5555</div>

              <div className="bold-16">Email</div>
              <div className="bold-16">
                <a href="mailto: webmaster@digitalsocietylab.org">
                  webmaster@digitalsocietylab.org
                </a>
              </div>
            </div>
          </div>
          <div className="map">
            <img
              src={dslMapStill}
              alt="a map indicating digital society lab location"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Contact;
