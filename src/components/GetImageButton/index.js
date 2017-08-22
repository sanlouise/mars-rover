import React from 'react';

const GetImageButton = (props) => (
  <div>
    <input type="submit" onClick={props.onClick} value="Get Images"/>
  </div>
)

export default GetImageButton;
