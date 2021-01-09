import React, { Component } from 'react';
import Header from '../components/Header.jsx'



class About extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className="page About">
        <div className="page__content-wrapper">
          <Header title="About"/>

          <section className="About__geographies">
            <ul>
              <li>Amsterdam</li>
              <li>Bournemouth</li>
              <li>London</li>
              <li>Swindon</li>
              <li>Paignton</li>
              <li>Plymouth</li>
              <li>Portsmouth</li>
            </ul>
          </section>
        </div>
      </div>

    )
  }
}

export default About
