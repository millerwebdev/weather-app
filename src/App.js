import './css/reset.css';
import './css/main.css';
import { useState, setState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//COMPONENTS
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import InfoStrip from './components/InfoStrip';
import CenterContent from './components/CenterContent';
import PricePoints from './components/PricePoints';
import Footer from './components/Footer';

import Demo from './components/Demo';

//IMAGES
import beachVector from './imgs/beach_vector.webp';
import phone1 from './imgs/phone_01.png';
import phone2 from './imgs/phone_02.png';
import outdoors1 from './imgs/outdoors_01.jpeg';
import outdoors2 from './imgs/outdoors_02.jpeg';

function App() {
  const [downloads, setDownloads] = useState(0);
  const [activeItem, setActiveItem] = useState()

  const updateDownloads = (e) => {
    window.open('https://play.google.com/store?hl=en_US&gl=US', '_blank').focus();
    setDownloads(downloads + 1);
    console.log('Downloads: ' + downloads);
  }

  const setActiveNavItem = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  }

  const cardToggle = (e) => {
    if (!e.target.parentElement.parentElement.classList.contains('active')) {
      e.target.parentElement.parentElement.classList.add('active');
    } else {
      e.target.parentElement.parentElement.classList.remove('active');
    }
  }

  return (
    <Router>
      <div className="App">

        <Header
          updateDownloads={updateDownloads}
          setActiveNavItem={setActiveNavItem} />

        <Route path="/" exact render={(props) => (
          <>
            <Hero
              imgsrc={phone1}
              backgroundImg={beachVector}
              updateDownloads={updateDownloads}
              downloads={downloads} />

            <Overview
              headline="Start Your Adventure"
              bodycopy="Whether you're looking for a Sun-Soaked hike, or a relaxing Sunset on the Beach, AmplyCast has you covered! We supply YOU with the most accurate Weather Updates, right down to the hour based on YOUR location. Don't believe us? Try a Sample of our App Below!" />

            <InfoStrip
              imgsrc={outdoors1}
              classes="img-left light"
              title="The Perfect Hike"
              text="Based on your preferences, we can supply you with the Weather Info you need to plan the best Hike of your life." />

            <CenterContent
              img={phone2}
              headline="Not Convinced Yet?"
              bodycopy="We supply quick, fast Weather information to allow you to plan a day, 2 days in advance, all the way up to a WEEK in advance. Not good enough? How about an Hourly breakdown to let you map out an entire day of activities. Pick the best days that work in your favor!" />

            <InfoStrip
              imgsrc={outdoors2}
              classes="img-right dark"
              title="Fitness Goals?"
              text="Mo problem! If you are looking to get more active, AmplyCast gives you the power to adjust your Workout times to fit your perfect conditions." />

            <PricePoints
              cardToggle={cardToggle}
              updateDownloads={updateDownloads}
              headline="Simple &amp; Affordable"
              desc="Choose the plan that fits your perfectly." />
          </>
        )} />


        <Route path="/demo" component={Demo} />
        <Footer />

      </div>

    </Router>
  );
}

export default App;
