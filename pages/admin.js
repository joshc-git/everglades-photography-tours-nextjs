import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';
import Login from '../components/Login';

class Admin extends React.Component {
  componentDidMount() {
    this.props.adminMenu();
  }

  render() {
    if (!this.props.uid) {
      return <Login authenticate={this.props.authenticate} />;
    }
    if (this.props.uid !== this.props.owner) {
      return <div>
        <p>Sorry, you are not the admin.</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    }
    return (
        <>
          <Head>
            <title>Tour Details - Admin - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="intro-block">
                  <h1>Admin - Tour Details</h1>
                  <p>Adjust photography tour availability, date/time, pricing and sold out settings below.</p>
              </div>
              <div className="tour-card-container">
                  {this.props.tours.map(tour => <TourCard key={tour.id} index={tour.id} tour={tour} isAdmin={true} updateTour={this.props.updateTour} />)}
              </div>
          </main>
        </>
    )
  }
}

export default Admin;
