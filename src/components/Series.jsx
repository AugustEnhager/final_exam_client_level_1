import React, { useState, useEffect } from "react";
import axios from "axios";

const Series = () => {
  const [serie, setSerie] = useState([]);

  const fetchData = () => {
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
    fetchData;
  }, []);

  const seriesInfo = series.map((series) => {
    
  })

  return <div></div>;
};

export default Series;
