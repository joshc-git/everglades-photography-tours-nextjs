import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class MovieDome extends React.Component {
  render() {
    return (
        <>
          <Head>
            <title>Movie Dome - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                    <TourCard key={this.props.tours[0].id} index={this.props.tours[0].id} tour={this.props.tours[0]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[0].title}</h1>
                    <p>{this.props.tours[0].longDescription}</p>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default MovieDome;
