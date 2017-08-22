import React, { Component } from 'react';

const GetImageButton = (props) => (
  <div>
    <input type="submit" onClick={props.onClick}/>
  </div>
)

export default GetImageButton;
