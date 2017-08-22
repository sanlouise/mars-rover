import React from 'react';
import map from 'lodash/map';

const GetImageDisplay = (props) => (
  <div>
    {map(props.images, (image) => (
      <div className="image">
        {image}
      </div>
    ))}

  </div>
)

export default GetImageDisplay;
