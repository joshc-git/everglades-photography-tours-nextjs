import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class SisalPond extends React.Component {
  render() {
    return (
        <>
          <Head>
            <title>Sisal Pond - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                  <TourCard key={this.props.tours[2].id} index={this.props.tours[2].id} tour={this.props.tours[2]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[2].title}</h1>
                    <p>{this.props.tours[2].longDescription}</p>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default SisalPond;
