import React from 'react';
import map from 'lodash/map';

const GetImageDisplay = (props) => (
  <div>
    {props.photos.length > 0 && (
      <div>
        <p>Images from {props.rover}</p>
        {map(props.photos, (photo) => (
          <div className="photo " key={photo.id}>
            <img src={photo.img_src} alt="Mars Photo" height="200" />
          </div>
        ))}

      </div>
    )}
    <p>{props.resultMessage}</p>
  </div>
)

export default GetImageDisplay;
