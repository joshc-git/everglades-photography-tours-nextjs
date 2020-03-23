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
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default EvergladesZTree;
