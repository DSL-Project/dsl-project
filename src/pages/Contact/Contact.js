import { useState, useRef } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("select a subject");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("select a subject");
    setMessage("");
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    if (!name || !email || subject === "select a subject" || !message) {
      alert("Please fill in all the required fields.");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        resetForm();
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="form-container">
          <h1>Contact the Lab</h1>
          <form ref={formRef} id="contact-form" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="name-email-subject">
              <fieldset>
                <label className="semi-14" htmlFor="name">
                  Name
                </label>
                <input
                  className="regular-14"
                  id="name"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </fieldset>
              <fieldset>
                <label className="semi-14" htmlFor="email">
                  Email
                </label>
                <input
                  className="regular-14"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@address.com"
                  value={email}
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </fieldset>
              <fieldset>
                <label className="semi-14" htmlFor="subject">
                  Subject
                </label>
                <select
                  className="regular-14 default"
                  name="subject"
                  id="subject"
                  value={subject}
                  required
                  onChange={(event) => setSubject(event.target.value)}
                >
                  <option value="select a subject" disabled>
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
                Your Message
              </label>

              <textarea
                className="default regular-14"
                name="subject"
                id="your-message"
                cols="30"
                rows="8"
                placeholder="Start typing your message..."
                value={message}
                required
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <div className="button-container">
              {isSubmitted ? (
                <p className="text-box semi-14 form-submitted">
                  Thank you! Your message has been sent.
                </p>
              ) : (
                <p className="text-box semi-14">
                  The information above is used solely to respond to your
                  inquiry.
                </p>
              )}

              <button
                type="submit"
                className="regular-caps"
                onClick={handleSubmit}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="contact-wrapper">
        <div className="address-container">
          <address className="address">
            <div className="bold-18 address-name">Digital Society Lab</div>
            <div className="street-address">
              <p className="bold-18">1280 Main St</p>
              <p className="bold-18">WHamilton</p>
              <p className="bold-18">ONL8S4L8</p>
            </div>
            <address className="contact-methods">
              <div className="bold-16">Phone:</div>
              <div className="bold-16">555-555-5555</div>

              <div className="bold-16">Email</div>
              <div className="bold-16">
                <a href="mailto: webmaster@digitalsocietylab.org">
                  webmaster@digitalsocietylab.org
                </a>
              </div>
            </address>
          </address>
          <div className="map"></div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Contact;
