import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';

class DwarfCypress extends React.Component {
  render() {
    return (
        <>
          <Head>
            <title>Dwarf Cypress - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="tour-container">
                <div className="single-tour-card-container">
                  <TourCard key={this.props.tours[7].id} index={this.props.tours[7].id} tour={this.props.tours[7]} />
                </div>
                <div id="tour-block">
                    <h1>{this.props.tours[7].title}</h1>
                    <p>{this.props.tours[7].longDescription}</p>
                </div>
              </div>
          </main>
        </>
    )
  }
}

export default DwarfCypress;
