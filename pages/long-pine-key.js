import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class LongPineKey extends React.Component {
  render() {
    return (
        <>
          <Head>
            <title>Long Pine Key - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                  <TourCard key={this.props.tours[4].id} index={this.props.tours[4].id} tour={this.props.tours[4]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[4].title}</h1>
                    <p>{this.props.tours[4].longDescription}</p>
                    <div id="tour-block-equipment">
                      <h2>Activities/Gear</h2>
                      <ul>
                        <li><img src="../images/image-solid.svg" width="81" height="70" alt="Landscape" /><br />Landscape</li>
                        <li><img src="../images/crow-solid.svg" width="81" height="70" alt="Wildlife" /><br />Wildlife</li>
                        <li><img src="../images/hiking-solid.svg" width="81" height="70" alt="Hiking" /><br />Hiking</li>
                        <li><img src="../images/sun-solid.svg" width="81" height="70" alt="Sunrise" /><br /> Sunrise</li>
                        <li><img src="../images/bug-solid.svg" width="81" height="70" alt="Bug Spray" /><br />Bug Spray</li>
                      </ul>
                    </div>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default LongPineKey;
