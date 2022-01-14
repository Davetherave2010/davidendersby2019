import React, { Component } from 'react';
import '../styles/Home.scss';
import Header from '../components/Header.jsx'


class Home extends Component {
  render() {
    return (
      <div className="page Home">
        <div className="page__content-wrapper">
          <Header title="David Endersby"/>
          <div className="Home__body">
            <section className="Home__introduction">
              <p>Hello, I am David. A self taught web developer based in Amsterdam. Some people describe me as a fairly tall, overly passionate person, with a billion likes and interests. I am responsible for the <a href="https://www.meetup.com/DigitalOceanAmsterdam">DigitalOcean Amsterdam meetup</a> and host regular meetups for the  <a href="https://www.meetup.com/Amsterdam-Blockbuster-Movie-Meetup/">Amsterdam Blockbuster meetup</a> group too.</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
