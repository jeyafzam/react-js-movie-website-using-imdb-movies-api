import "./style.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src="http://flixgo.volkovdesign.com/main/img/logo.svg"
              alt=""
            />
            <p>
              Movies & TV Shows, Online cinema, Movie database HTML Template.
              The perfect choice for your project.
            </p>
            <ul className="flex  align-center ">
              <li>
               
                <Link to="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
            </ul>



          </div>
          <div className="col-3 text-center">
            <h3 className="title">Resources</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Pricing plans</Link>
              </li>
              <li>
                <Link to="/">Help center</Link>
              </li>
              <li>
                <Link to="/">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 text-center">
            <h3 className="title">Browse</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/">TV Shows</Link>
              </li>
              <li>
                <Link to="/">Anime</Link>
              </li>
              <li>
                <Link to="/">Cartoons</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 text-center">
            <h3 className="title">Help</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/">Account & Billing</Link>
              </li>
              <li>
                <Link to="/">Plans & Pricing</Link>
              </li>
              <li>
                <Link to="/">Supported devices</Link>
              </li>
              <li>
                <Link to="/">Accessibility</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="footer__copyright flex space-between">
            <small>
              © FlixGo, 2018—2027. Create by
              <Link to="/"
              >
                Angel Jeyafzam
              </Link>
              
            </small>

            <ul className="flex">
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Terms and conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
