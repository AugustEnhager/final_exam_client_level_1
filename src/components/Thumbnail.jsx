import React from "react";
import { Card } from "semantic-ui-react";

const Thumbnail = ({ series }) => {
  return <Card data-cy="series-image" image={series.content.images.boxart.url} />;
};

export default Thumbnail;
