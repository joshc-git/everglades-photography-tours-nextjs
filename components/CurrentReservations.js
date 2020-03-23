import React from 'react';

class CurrentReservation extends React.Component {
    render () {
        return (
            <>
            <div className="tour-card-details">
                <h2>{this.props.reservation.name}</h2>
                <div className="tour-card-details-copy">
                    <ul>
                        <li>{this.props.reservation.email}</li>
                        <li>{this.props.reservation.phone}</li>
                        <li>{this.props.reservation.comments}</li>
                    </ul>
                </div>
            </div>
            <button onClick={() => this.props.deleteReservation(this.props.index)} className="small-button">Delete Reservation</button>
            </>
        )
    }
}

export default CurrentReservation;