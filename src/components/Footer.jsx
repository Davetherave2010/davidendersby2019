import React, { Component } from 'react';
import heart from '../images/heart.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'

import '../styles/components/Footer.scss';

class Footer extends Component {
  // constructor(props) {
  //   super(props)
  // }

  getYear = () => {
    return new Date().getFullYear()
  }

  render() {
    return (
      <footer className="Footer">
        <ul className="social-icons__list">
          <li className="social-icons__list-item social-icons__list-item--github">
            <a href="https://www.github.com/davetherave2010">
              <img className="social-icon" src={github} alt="Github octocat"/>
            </a>
          </li>
          <li className="social-icons__list-item social-icons__list-item--medium">
            <a href="https://www.medium.com/@daendersby">
              <img className="social-icon" src={medium} alt="Medium icon"/>
            </a>
          </li>
          <li className="social-icons__list-item social-icons__list-item--twitter">
            <a href="https://www.twitter.com/davidendersby1">
              <img className="social-icon" src={twitter} alt="Twitter icon"/>
            </a>
          </li>
          <li className="social-icons__list-item social-icons__list-item--instagram">
            <a href="https://www.instagram.com/davetherave2010">
              <img className="social-icon" src={instagram} alt="Instagram icon"/>
            </a>
          </li>
        </ul>
        <p className="Footer__text">Made with <img src={heart} alt="heart" className="heart-icon"/> in Amsterdam.</p>
        <p className="Footer__text Footer__text--copyright">&copy; {this.getYear()} David Endersby.</p>
      </footer>
    )
  }
}

export default Footer
