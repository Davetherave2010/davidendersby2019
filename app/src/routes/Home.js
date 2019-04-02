import React, { Component } from 'react';
import '../styles/Home.scss';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

class Home extends Component {
  constructor(props) {
    super(props)
    this.map = null
  }
  render() {
    const mapStyles = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      zIndex: '-1'
    }

    return (
      <div className="Home">
        <header className="Home-header">
          <div className="Home-header-text-wrapper">
            <h1 className="Home-header-title">David Endersby</h1>
          </div>
        </header>
        <div className="Home-body">
          <section>
            <h2>Geographer &rarr; Geologist &rarr; Web Developer</h2>

          </section>

        </div>
      </div>
    );
  }

  // componentDidMount (){
  // <div id="map" style={mapStyles}/>
  //   mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2ZXRoZXJhdmUyMDEwIiwiYSI6ImNpbnZ0aTF6MjAwcG13OW0yZ2QwdzQzYW4ifQ.F3wHgzPHsPOdA6ZoaI5MDA';
  //   this.map = new mapboxgl.Map({
  //   container: 'map', // container id
  //   style: 'mapbox://styles/davetherave2010/cjsysjlb91iwn1fs5zplsz2w0', // stylesheet location
  //   center: [4.899, 52.355], // starting position [lng, lat]
  //   zoom: 13
  //   });
  // }
}

export default Home;
