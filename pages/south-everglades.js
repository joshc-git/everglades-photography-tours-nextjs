import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class SouthEverglades extends React.Component {
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
                    <p>{this.props.tours[6].longDescription}</p>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default SouthEverglades;
