import "./style.css";
import { Link } from "react-router-dom";
import { Button} from "antd";


export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <Link to="/" className="header__logo">
                <img
                  src="http://flixgo.volkovdesign.com/main/img/logo.svg"
                  alt=""
                />
              </Link>
              <Link className="header-section" to="/">Home</Link>
              <Link className="header-section"  to="/">Catalog </Link>
              <Link className="header-section"  to="/">Pricing plans </Link>
              <Link className="header-section"  to="/search"> Search  Movie  </Link>
             

              <form action="#" className="header-search">
                <input
                  className="header-search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="header-search-button" type="button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <div className="header-language">
                <Link
                  className="header-nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                  </svg>
                </Link>

                <ul className="dropdown-menu header-dropdown-menu header-dropdown-menu-lang">
                  <li>
                    <Link to="#">English</Link>
                  </li>
                  <li>
                    <Link to="#">Spanish</Link>
                  </li>
                  <li>
                    <Link to="#">French</Link>
                  </li>
                </ul>
              </div>

              <Button className="header-sign-in" type="primary">
                sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
