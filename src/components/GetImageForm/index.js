import React, { Component } from 'react';
import API_KEY from '../../secrets.js';

class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleRoverInputChange = this.handleRoverInputChange.bind(this);
    this.handleCameraInputChange = this.handleCameraInputChange.bind(this);
    this.handleSolInputChange = this.handleSolInputChange.bind(this);
  }

  fetchRoverImage() {
    this.setState({
      camera: this.state.camera,
      rover: this.state.rover,
      sol: this.state.sol
    });

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    console.log(imageUrl);

    fetch(imageUrl)
    .then(results => results.json())
    .then(responseData => {
      this.setState({characters: responseData.results});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  handleRoverInputChange() {

  }

  handleCameraInputChange() {

  }

  handleSolInputChange() {
    
  }

  componentDidMount() {
    this.fetchRoverImage();
  }

  render () {
    return (
      <form>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRoverInputChange} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCameraInputChange} id="rover" value={this.state.value}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.handleSolInputChange} max="2000" min="1000" value={this.state.value}/>
      </form>
    )
  }
}

export default GetImageForm;
