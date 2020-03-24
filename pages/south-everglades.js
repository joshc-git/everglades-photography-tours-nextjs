import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class SouthEverglades extends React.Component {
  createMarkup = () => {
    return {__html: this.props.tours[6].longDescription};
  }

  render() {
    return (
        <>
          <Head>
            <title>South Everglades - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                  <TourCard key={this.props.tours[6].id} index={this.props.tours[6].id} tour={this.props.tours[6]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[6].title}</h1>
                    <p dangerouslySetInnerHTML={this.createMarkup()} />
                    <div id="tour-block-equipment">
                      <h2>Activities/Gear</h2>
                      <ul>
                        <li><img src="../images/image-solid.svg" width="81" height="70" alt="Landscape" /><br />Landscape</li>
                        <li><img src="../images/crow-solid.svg" width="81" height="70" alt="Wildlife" /><br />Wildlife</li>
                        <li><img src="../images/sun-solid.svg" width="81" height="70" alt="Sunset" /><br /> Sunset</li>
                        <li><img src="../images/bug-solid.svg" width="81" height="70" alt="Bug Spray" /><br />Bug Spray</li>
                        <li><img src="../images/car-side-solid.svg" width="81" height="70" alt="Driving" /><br />Driving</li>
                      </ul>
                    </div>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default SouthEverglades;
