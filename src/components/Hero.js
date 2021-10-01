import { Link } from 'react-router-dom';
import { useCallback } from 'react'

import googlePlay from '../imgs/google_play.png';

const Hero = ({ backgroundImg, imgsrc, updateDownloads, downloads }) => {

    const bgImg = 'url(' + backgroundImg + ')'

    return (
        <section className="hero" style={{backgroundImage : bgImg}}>
            <div className="wrapper">
                <figure>
                    <div className="main-graphic">
                        <img src={imgsrc} />
                    </div>
                    <figcaption>
                        <h2>Control Of The Weather</h2>
                        <p>The Power of Weather in the palm of your hand.</p>
                        <div className="btn-group">
                            <Link to="/" className="btn">Learn More</Link>
                            <Link to="/demo" className="btn accent">Try it Now</Link>
                        </div>
                        <span onClick={updateDownloads}><img className="appstore" src={googlePlay} /></span>
                        <p class="current-downloads">Current Downloads: {downloads}</p>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Hero
