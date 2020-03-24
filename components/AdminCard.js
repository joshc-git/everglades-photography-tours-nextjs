import React from 'react';

class AdminCard extends React.Component {
    state = {
        tour: this.props.tour,
        formSubmitted: false
    }

    shortDescriptionRef = React.createRef();
    longDescriptionRef = React.createRef();
    locationRef = React.createRef();
    availabilityRef = React.createRef();
    dateTimeRef = React.createRef();
    priceRef = React.createRef();
    targetRef = React.createRef();

    scrollToTargetRef = () => {
        this.targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    };

    handleChange = () => {
        const tour = { 
            ...this.state.tour,
            shortDescription: this.shortDescriptionRef.current.value,
            longDescription: this.longDescriptionRef.current.value,
            location: this.locationRef.current.value,
            availability: this.availabilityRef.current.value,
            dateTime: this.dateTimeRef.current.value,
            price: this.priceRef.current.value
        };
        this.setState({ tour });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const updatedTour = { 
            ...this.props.tour,
            shortDescription: this.shortDescriptionRef.current.value,
            longDescription: this.longDescriptionRef.current.value,
            location: this.locationRef.current.value,
            availability: parseInt(this.availabilityRef.current.value),
            dateTime: this.dateTimeRef.current.value,
            price: parseInt(this.priceRef.current.value)
        };
        this.props.updateTour(this.props.index, updatedTour);
        this.setState({ formSubmitted: true })
        this.scrollToTargetRef()
        setTimeout(() => {
            this.setState({ formSubmitted: false })
        }, 2500)
    };

    render () {
        const {title, photo, desktopPhoto} = this.props.tour;
        const isAvailable = this.props.tour.availability;
        const formSubmitted = this.state.formSubmitted;
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
                    {formSubmitted === true ? (
                        <div className="success-message">
                            <p>Tour details have been successfully updated!</p>
                        </div>
                    ) : (
                    <form onSubmit={this.handleSubmit} ref={this.targetRef} className="admin-form">
                        <fieldset>
                            <label>Short Description:</label>
                            <textarea name="shortDescription" ref={this.shortDescriptionRef} onChange={this.handleChange} value={this.state.tour.shortDescription} /><br />
                            <label>Long Description:</label>
                            <textarea name="longDescription" ref={this.longDescriptionRef} onChange={this.handleChange} value={this.state.tour.longDescription} /><br />
                            <label>Location:</label>
                            <input type="text" name="location" ref={this.locationRef} onChange={this.handleChange} value={this.state.tour.location} /><br />
                            <label>Availability:</label>
                            <input type="text" name="availability" ref={this.availabilityRef} onChange={this.handleChange} value={this.state.tour.availability} /><br />
                            <label>Date/Time:</label>
                            <input type="text" name="dateTime" ref={this.dateTimeRef} onChange={this.handleChange} value={this.state.tour.dateTime} /><br />
                            <label>Price:</label>
                            <input type="text" name="price" ref={this.priceRef} onChange={this.handleChange} value={this.state.tour.price} /><br />
                            <button type="submit" className="small-button">Update</button>
                        </fieldset>
                    </form>
                    )}
                </div>
            </div>
        )
    }
}

export default AdminCard;