function Footer() {
  return (
    <footer className="footer">
      {/* <a href="@DigSocietyLab">Follow the Lab on Twitter</a> */}
      <form action="" method="post">
        <label htmlFor="bd-email">Sign up for news & updates</label>
        <div className="email-inputs">
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="email@address.com"
            autoComplete="off"
          />
          <input type="hidden" name="tag" value="placeholder-signup" />
          <button>Sign up</button>
          {/* <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Sign up" /> */}
        </div>
      </form>
    </footer>
  );
}

export default Footer;
