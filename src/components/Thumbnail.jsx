import React from "react";
import { Card } from "semantic-ui-react";

const Thumbnail = ({ series }) => {
  return (
    <div className="display-show">
      <Card
        data-cy="series-image"
        image={series.content.images.landscape.url}
      />
    </div>
  );
};

export default Thumbnail;
