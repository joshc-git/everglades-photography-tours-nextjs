import React from 'react';
import CurrentReservations from './CurrentReservations';

class ReservationsCard extends React.Component {
    render () {
        const {title, photo, desktopPhoto} = this.props.tour;
        const isAvailable = this.props.tour.availability;
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
                </div>
                {this.props.reservations.length > 0 && (
                    this.props.reservations.filter(reservation => reservation.tourId === this.props.tour.id).map(reservation => <CurrentReservations key={reservation.id} index={reservation.id} reservations={this.props.reservations} reservation={reservation} deleteReservation={this.props.deleteReservation} />))
                }
            </div>
        )
    }
}

export default ReservationsCard;