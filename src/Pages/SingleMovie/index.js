import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrimaryLayout from "../../Component/Layaouts/Primary";
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
  const { title, poster, genres, type, released,imdb_id} = data;
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    axios
      .get(`https://moviesapi.ir/api/v1/movies/${MovieId}`)
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }, []);

  useEffect(function(){
    itemTitleMaker(title, type)
  }, [])
  function renderGenres(){
    return genres.map(function(genre){
        return (
            <div key={genre} className="generItem">
                {genre}
            </div>
        )
    })
  }
  return (
    <PrimaryLayout>
      {loading === true ? (
        <h1>loading ...</h1>
      ) : (
        <Fragment>
          <h1>{title}</h1>
          <img src={poster} alt="" />
          <div className="geners">
            {renderGenres()}
          </div>
          <h1>{moment (released).format("mm/yy/dd")}</h1>
          <a target="-blank" href={`https://imdb.com/title/${imdb_id}`}>imdb</a>
        </Fragment>
      )}
    </PrimaryLayout>
  );
}
