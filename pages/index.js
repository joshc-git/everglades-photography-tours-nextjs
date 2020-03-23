import React from 'react';
import Link from 'next/link';
import TourCard from '../components/TourCard';

class Home extends React.Component {
  componentDidMount() {
    this.props.userMenu();
  }

  render() {
    return (
        <main>
            <div id="intro-block">
                <h1>Photography Tours</h1>
                <p>We have limited availability over the next few months. Be sure to sign up for our latest photography tours in Flamingo Park &amp; Big Cypress within the next week if you would like to join us. Below you'll find descriptions of each tour along with our current schedule, availability and pricing. Click the <strong>Sign Up</strong> button to enroll in the tour of your choice.</p><br />
                <Link href="/movie-dome"><a><button className="large-button">Featured Tour</button></a></Link>
            </div>
            <div className="tour-card-container">
                {this.props.tours.map(tour => <TourCard key={tour.id} index={tour.id} tour={tour} />)}
            </div>
        </main>
    )
  }
}

export default Home;
