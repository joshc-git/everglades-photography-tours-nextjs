import React from 'react';
import Head from 'next/head';
import TourCard from '../components/TourCard';
import Login from '../components/Login';

class Reservations extends React.Component {
  componentDidMount() {
    this.props.adminMenu();
  }
  
  render() {
    const reservations = this.props.reservations;
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
            <title>Current Reservations - Admin - Everglades Photography Tours</title>
          </Head>
          <main>
              <div id="intro-block">
                  <h1>Admin - Current Reservations</h1>
                  {reservations.length > 0 ? (
                    <p>View current reservations below.</p>
                    ) : (
                      <p>No current reservations.</p>
                      )
                  }
              </div>
              <div className="tour-card-container">
                  {this.props.tours.map(tour => <TourCard key={tour.id} index={tour.id} tour={tour} isReservations={true} reservations={this.props.reservations} deleteReservation={this.props.deleteReservation} />)}
              </div>
          </main>
        </>
    )
  }
}

export default Reservations;
