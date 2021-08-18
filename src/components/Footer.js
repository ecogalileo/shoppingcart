import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="col-md-12">
          <div className="social-icons">
          <h3>"The best error message is the one that never shows up."</h3>
            <span className="m-4">
              <a
                href="mailto:ericogalileo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://github.com/ecogalileo"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#333333' }}
              >
                <i className="fab fa-github"></i>
              </a>
            </span>

            <span className="m-4">
              <a
                href="https://twitter.com/ecogalileo"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#55acee' }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://instagram.com/ecogalileo/"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#ac2bac' }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://www.facebook.com/erico.galileo/"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#3b5998' }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              {/* <blockquote>
                "I'm a lazy man so I tend to automate everything."
          "If brain is empty keep coding, else keep order coffee."
          "First, solve the problem. Then, write the code." - John Johnson
                "The best error message is the one that never shows up."
              </blockquote> */}
              <small>Copyright &copy; 2021, Erick Armstrong Galileo.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
