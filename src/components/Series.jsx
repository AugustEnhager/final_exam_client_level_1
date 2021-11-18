import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import Thumbnail from "./Thumbnail";

const Series = () => {
  const [serie, setSerie] = useState([]);

  const fetchData = async () => {
    const seriesResponse = await axios({
      method: "GET",
      url: `https://content.viaplay.se/pc-se/serier/samtliga`,
    });
    setSerie(
      seriesResponse.data._embedded["viaplay:blocks"][0]._embedded[
        "viaplay:products"
      ]
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const seriesInfo = serie.map((series) => {
    return <Thumbnail series={series} />;
  });

  return <Card>{seriesInfo}</Card>;
};

export default Series;
