import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class PineGladesLake extends React.Component {
  render() {
    return (
        <>
          <Head>
            <title>Pine Glades Lake - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                  <TourCard key={this.props.tours[5].id} index={this.props.tours[5].id} tour={this.props.tours[5]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[5].title}</h1>
                    <p>{this.props.tours[5].longDescription}</p>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default PineGladesLake;
