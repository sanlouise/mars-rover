import React, { Component } from 'react';
import { API_KEY } from '../../secrets.js';
import GetImageButton from '../GetImageButton';
import GetImageDisplay from '../GetImageDisplay';

const getImageFormStyle = {

};

const inputStyle = {
  width: '200px'
}

const selectStyle = {
  width: '200px'
}

class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      photos: [],
      sol: "",
      resultMessage: "",
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
      sol: this.state.sol,
      resultMessage: "",
    });

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    console.log(imageUrl);

    fetch(imageUrl)
    .then(results => results.json())
    .then(responseData => {
      this.setState({photos: responseData.photos});
      console.log(this.state.photos)

      this.state.photos.length === 0 && (
        this.setState({resultMessage: "No images were found"})
      )
      console.log(this.state.photos)
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  handleRoverInputChange(e) {
    e.preventDefault();
    this.setState({rover: e.target.value});
    console.log(this.state.rover)
  }

  handleCameraInputChange(e) {
    e.preventDefault();
    this.setState({camera: e.target.value});
    console.log(this.state.camera)
  }

  handleSolInputChange(e) {
    e.preventDefault();
    this.setState({sol: e.target.value});
    console.log(this.state.sol)
  }

  render () {
    return (
      <div className="text-center" style={getImageFormStyle}>
        <form>
          <label htmlFor="rover">Rover</label>
          <select style={selectStyle} onChange={this.handleRoverInputChange} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select style={selectStyle} onChange={this.handleCameraInputChange} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input style={inputStyle} type="number" onChange={this.handleSolInputChange} max="2000" min="1000" value={this.state.value}/>
      </form>
      <GetImageButton onClick={this.fetchRoverImage} />
      <GetImageDisplay rover={this.state.rover} photos={this.state.photos} resultMessage={this.state.resultMessage} />
    </div>
    )
  }
}

export default GetImageForm;
