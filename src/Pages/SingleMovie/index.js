import "./style.css";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layaouts/Primary";
import { itemTitleMaker } from "../../Helpers/TitleMaker";
import moment from "moment";

export default function SingleMovie() {
  const { MovieId } = useParams();
  const [data, setData] = useState({
    id: 1,
    title: "",
    poster: "",
    year: "",
    rated: "",
    released: "",
    runtime: "",
    director: "",
    writer: "",
    actors: "",
    plot: "",
    country: "",
    awards: "",
    metascore: "",
    imdb_rating: "",
    imdb_votes: "",
    imdb_id: "",
    type: "",
    genres: [],
    images: [],
  });
  const {
    title,
    poster,
    genres,
    type,
    released,
    imdb_id,
    writer,
    actors,
    plot,
    country,
    awards,
    imdb_rating,
  } = data;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(
    function () {
      window.scrollTo(0, 0);
      axios
        .get(`https://moviesapi.ir/api/v1/movies/${MovieId}`)
        .then(function (response) {
          setData(response.data);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
      axios
        .get(
          `https://moviesapi.codingfront.dev/api/v1/movies?page=${parseInt(
            Math.random() * 21
          )}`
        )
        .then(function (response) {
          setMovies(response.data.data);
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
        });
    },
    [MovieId]
  );

  useEffect(
    function () {
      itemTitleMaker(title, type);
    },
    [data, title, type]
  );
  function renderGenres() {
    return genres.map(function (genre) {
      return (
        <div key={genre} className="generItem">
          {genre}
        </div>
      );
    });
  }

  function renderRelatedMovies() {
    return movies.map(function ({ title, id }) {
      return (
        <li key={id}>
          <Link to={`/movie/${id} `}>{title}</Link>
        </li>
      );
    });
  }
  return (
    <PrimaryLayout>
      <div className="singel-movie-container">
        <h1 className="title">{title}</h1>
        <div className="singel-movie-items align-center">
          {loading === true ? (
            <h1 className="title">loading ...</h1>
          ) : (
            <Fragment>
              <div className="singel-movie-left-items">
                <img src={poster} alt="" />
              </div>
              <div className="singel-movie-right-items">
                <div className="geners row singel-movie-right-item">
                  <span className="singel-movie-right-item-fs">Genre:</span>
                  {renderGenres()}
                </div>
                <div className="singel-movie-right-item">
                  <span className="singel-movie-right-item-fs">Released:</span>{" "}
                  {moment(released).format("yyyy/mm/dddd")}
                </div>
                <div className="singel-movie-right-item">
                  <span className="singel-movie-right-item-fs">imdb_id:</span>
                  <a
                    className="singel-movie-right-item"
                    target="-blank"
                    href={`https://imdb.com/title/${imdb_id}`}
                  >
                    imdb
                  </a>
                </div>

                <div className="singel-movie-right-item">
                  <span className="singel-movie-right-item-fs">
            
                    Imdb_rating:
                  </span>
                  {imdb_rating}
                </div>
                <div className="singel-movie-right-item">
                  <span className="singel-movie-right-item-fs">Country:</span>
                  {country}
                </div>
                <div className="singel-movie-right-item">
              
                  <span className="singel-movie-right-item-fs">Writer:</span>
                  {writer}
                </div>
                <div className="singel-movie-right-item">
                  <span className="singel-movie-right-item-fs"> Awards:</span>
                  {awards}
                </div>
                <div className="singel-movie-right-item">
                  <span className="singel-movie-right-item-fs"> Actors:</span>
                  {actors}
                </div>
                <div className="singel-movie-right-item">
                
                  <span className="singel-movie-right-item-fs">Plot:</span>
                  {plot}
                </div>
              </div>
            </Fragment>
          )}
        </div>

        <div className="related-movie-container">
          {loading === true ? (
            <h1 className="title">loading ...</h1>
          ) : (
            <Fragment>
           <div className="related-movie-items flex">
           <div className="related-movie-left">
             <h2 className="rt">Related Movie</h2>
             <ul >{renderRelatedMovies()}</ul>
             </div>
             <div className="related-movie-right">
             <h2 className="rt">Related Movie</h2>
             <ul >{renderRelatedMovies()}</ul>
             </div>
           </div>
            </Fragment>
          )}
        </div>
      </div>
    </PrimaryLayout>
  );
}
