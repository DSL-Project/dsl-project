import GoogleMap from "./GoogleMap";
function Contact() {
  const location = {
    latitude: 43.26224447913664,
    longitude: -79.92247478517749,
  };
  return (
    <div>
      <div>
        <h2>Contact Page</h2>
        <form action="">
          <div>
            <fieldset>
              <label htmlFor="name">Name*</label>
              <input id="name" type="text" placeholder="Your name" />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" placeholder="email@address.com" />
            </fieldset>
            <fieldset>
              <label htmlFor="subject">Subject*</label>
              <select name="subject" id="subject">
                <option value="select a subject" placeholder disabled>
                  Select a subject
                </option>
                <option value="study">Study</option>
                <option value="working at the lab">Working at the Lab</option>
                <option value="media inquiry">Media inquiry</option>
                <option value="other">Other</option>
              </select>
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor="your-message">Your Message*</label>
            <textarea
              name="your message"
              id="your-message"
              cols="30"
              rows="10"
            ></textarea>
          </fieldset>

          <div>
            <p>
              The information above is used solely to respond to your inquiry.
            </p>
            <button>SEND</button>
          </div>
        </form>
      </div>

      <div>
        <address>
          <p>Digital Society Lab</p>
          <p>1280 Main St W</p>
          <p>Hamilton, ON</p>
          <p>L8S 4L8</p>
          <p>
            <span>Phone</span>
            <a href="tel:+15555555555">555-555-5555</a>
          </p>
          <p>
            <span>Email</span>
            <a href="mailto: webmaster@digitalsocietylab.org">
              webmaster@digitalsocietylab.org
            </a>
          </p>
        </address>
        <div>
          <GoogleMap location={location} width={600} height={450} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
