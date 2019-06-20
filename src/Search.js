import React from 'react';
import './App.css';
import Geocode from "react-geocode";

// Geocode.setApiKey("");


class Search extends React.Component{

  state={
    address: ""
  }
  grab=()=>{
    fetch('https://data.cityofnewyork.us/resource/94pk-v63f.json?borough=Brooklyn')
    .then(r=>r.json())
    .then(r=>{
      console.log(r)
    })
  }

  handleAddress=(e)=>{
    console.log(e.target.value)
    this.setState({address:e.target.value})
  }
  setAddress=()=>{
        Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
      )  ;
  }
  render(){
    return (
      <div className="search">
      <input type="text"
        className="input"
        onChange={this.handleAddress}
        />
        <button className="address" onClick={this.setAddress}>
        search by address
        </button>

        {this.grab()}
      </div>
    );

  }
}

export default Search;
