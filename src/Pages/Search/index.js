import "./style.css";
import axios from "axios";
import PrimaryLayout from "../../Components/Layaouts/Primary";
import { useState, useEffect } from "react";
import { Card, Col, Row,Spin } from "antd";
import { useSearchParams, createSearchParams } from "react-router-dom";


const { Meta } = Card;
export default function Search() {
  const [loading, setloading] = useState(false);
  const [queryStrings, setQueryStrings] = useSearchParams();
  const [data, setData] = useState({
    data: [],
    metadata: {},
  });
  function type(e) {
    setloading(true);
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value}`
      )
      .then(function (response) {
        setQueryStrings(createSearchParams({ key: e.target.value }));
        setData(response.data);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
      });
  }

  useEffect(function () {
    setloading(true);
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${queryStrings.get(
          "key"
        )}&page=1`
      )
      .then(function (response) {
        setData(response.data);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
      });
  }, []);

  function renderFarm() {
    return data.data.map(function ({ title, id, poster, plot }) {
      return (
        <Col span={8} gatter={5}>
          <Card
            key={id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={poster} />}
          >
            <Meta title={title} description={plot} />
          </Card>
        </Col>
      );
    });
  }

  return (
    <PrimaryLayout>
      <div className="container">
      <Spin spinning={loading}>
        <div className="search">
          <h1 className="title">search:</h1>
          <input onChange={type} placeholder="Please Enter Movie Name" />
          <div className="movies">
            <Row>{renderFarm()}</Row>
          </div>
        </div>
        </Spin>
      </div>
    </PrimaryLayout>
  );
}
