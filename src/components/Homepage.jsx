import React from "react";
import { Header } from "semantic-ui-react";

const styling = {
  backgroundColor: "black",
};

const Homepage = () => {
  return (
    <div>
      <Header data-cy="homepage" style={styling}>
        <img
          data-cy="viaplay-logo"
          src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        />
      </Header>
    </div>
  );
};

export default Homepage;
