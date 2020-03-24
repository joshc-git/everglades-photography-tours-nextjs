import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import AdminCard from './AdminCard';
import ReservationsCard from './ReservationsCard';

class TourCard extends React.Component {
    handleSignUp = () => {
        Router.push({pathname: '/sign-up', query: { id: this.props.tour.id },}).then(() => window.scrollTo(0, 0));
    }

    slugify = (string) => {
        return '/' + string.toString().toLowerCase().replace(/\s+/g, '-');
    }

    render () {
        const {title, photo, desktopPhoto, shortDescription, location, availability, dateTime, price} = this.props.tour;
        const isAdmin = this.props.isAdmin;
        const isReservations = this.props.isReservations;
        const isAvailable = this.props.tour.availability;
        const slug = this.slugify(this.props.tour.title);
        if (isAdmin) {
            return (
                <AdminCard index={this.props.index} tour={this.props.tour} updateTour={this.props.updateTour} />
            )
        }
        if (isReservations) {
            const reservationCards = this.props.reservations.filter(reservation => reservation.tourId === this.props.tour.id);
            return (
                reservationCards.length > 0 && (
                <ReservationsCard index={this.props.index} tour={this.props.tour} reservations={this.props.reservations} deleteReservation={this.props.deleteReservation} />)
            )
        }
        return (
            <div className="tour-card">
                {!isAvailable && <div className="sold-out" aria-label="Sold Out"></div>}
                <div className="tour-card-image">
                    <picture>
                        <source media="(max-width: 767px)" srcSet={photo} />
                        <img src={desktopPhoto} alt={title} />
                    </picture>
                </div>
                <div className="tour-card-copy">
                    <h2>{title}</h2>
                    <p>{shortDescription}<br /><Link href={slug}><a>View Tour Description</a></Link></p>
                </div>
                <div className="tour-card-details">
                    <h2>Tour Details</h2>
                    <div className="tour-card-details-copy">
                        {!isAvailable ? (
                            <p>Sorry! The Everglades Z-Tree tour is current sold out...</p>
                        ) : (
                            <ul>
                                <li><span className="tour-details-heading">Location:</span> {location}</li>
                                <li><span className="tour-details-heading">Availability:</span> {availability} Spots Remaining</li>
                                <li><span className="tour-details-heading">Date/Time:</span> {dateTime}</li>
                                <li><span className="tour-details-heading">Pricing:</span> ${price}/person</li>
                            </ul>
                        )}
                    </div>
                </div>
                <button className="small-button" disabled={!isAvailable} onClick={this.handleSignUp}>Sign Up</button>
            </div>
        )
    }
}

export default TourCard;