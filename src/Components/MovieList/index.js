import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Spin } from "antd";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setloading] = useState(false);
  const [data, setData] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 1,
      page_count: 1,
      total_count: 1,
    },
  });
  function getApi(page = 1) {
    setloading(true);
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`)
      .then(function (response) {
        setData(response.data);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
      });
  }
  useEffect(function () {
    getApi(searchParams.get("page"));
  }, []);
  
  function renderFarm() {
    return data.data.map((movie, index) => {
      const { id, title, poster } = movie;
      return (
        <li key={id}>
          <Link to={`/movie/${id}`}>
            <div className="item-cover">
              <img className="full-width" src={poster} alt="" />
              <div className="item-cover-hover"></div>
            </div>
          </Link>
          <h3> {title}</h3>
        </li>
      );
    });
  }

  function changePage(current, size) {
    setSearchParams(createSearchParams({ page: current }));
    getApi(current);
  }
  return (
    <div className="container">
      <Spin spinning={loading}>
        <div className="movie-list">
          <ul className="row">{renderFarm()}</ul>
        </div>
        <div className="pagination">
          <Pagination
            align="center"
            current={data.metadata.current_page}
            total={data.metadata.total_count}
            pageSize={data.metadata.per_page}
            showSizeChanger={false}
            onChange={changePage}
          />
        </div>
      </Spin>
    </div>
  );
}
