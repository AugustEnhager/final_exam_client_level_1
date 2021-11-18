import React from "react";
import { Header } from "semantic-ui-react";

const styling = {
  backgroundColor: "grey",
};

const Homepage = () => {
  return (
    <Header data-cy="homepage" style={styling} size="medium">
      <img
        data-cy="viaplay-logo"
        size="tiny"
        src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
      />
    </Header>
  );
};

export default Homepage;
