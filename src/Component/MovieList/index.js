import "./style.css";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieList({title, link, pageId}) {
  const [data, setData] = useState({
    data: [],
    metadata: {},
  });
  useEffect(function () {
    axios
      .get( `https://moviesapi.ir/api/v1/movies?page=${pageId} `)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, [pageId]);

  function renderFarm() {
    return data.data.map(function ({ id, title, poster }, index) {
      return (
        <li key={id}>
          <Link to={`/movie/${id}`} >
          <img className="full-width" src={poster} alt="" />
          <h3>{title}</h3>
          </Link>
        </li>
      );
    });
  }
  return (
    <Fragment>
      <div className="movie-list">
        <div className="container">
          <div className="header-section">
            <Link to={link} >
              <h2>{title}</h2>
            </Link>
          </div>
          <div className="movie-item">
            <ul className="row">{renderFarm()}</ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
