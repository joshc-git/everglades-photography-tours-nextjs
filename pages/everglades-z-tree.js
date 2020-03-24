import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class EvergladesZTree extends React.Component {
  render() {
    return (
        <>
          <Head>
            <title>Everglades Z-Tree - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                  <TourCard key={this.props.tours[1].id} index={this.props.tours[1].id} tour={this.props.tours[1]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[1].title}</h1>
                    <p>{this.props.tours[1].longDescription}</p>
                    <div id="tour-block-equipment">
                      <h2>Activities/Gear</h2>
                      <ul>
                        <li><img src="../images/image-solid.svg" width="81" height="70" alt="Landscape" /><br />Landscape</li>
                        <li><img src="../images/moon-solid.svg" width="81" height="70" alt="Nighttime" /><br />Nighttime</li>
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

export default EvergladesZTree;
