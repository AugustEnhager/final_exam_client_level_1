import React from "react";
import { Header } from "semantic-ui-react";

const styling = {
  backgroundColor: "rgb(48,58,68)",
};

const Homepage = () => {
  return (
    <>
      <Header data-cy="homepage" style={styling} size="medium">
        <img
          data-cy="viaplay-logo"
          width="250px"
          src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        />
      </Header>
      <div className="footer"></div>
    </>
  );
};

export default Homepage;
