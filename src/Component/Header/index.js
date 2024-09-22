import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <a
                href="	http://flixgo.volkovdesign.com/main/img/logo.svg"
                className="header__logo"
              >
                <img
                  src="http://flixgo.volkovdesign.com/main/img/logo.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
