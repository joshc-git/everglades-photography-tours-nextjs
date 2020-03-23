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
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default LongPineKey;
