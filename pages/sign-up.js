import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router'
import Link from 'next/link';
import TourCard from '../components/TourCard';

class SignUp extends React.Component {
    state = {
        formSubmitted: false,
        disabled: true,
        errors: {
            nameInput: '',
            emailInput: '',
            phoneInput: '',
        }
    }

    nameRef = React.createRef();
    emailRef = React.createRef();
    phoneRef = React.createRef();
    commentsRef = React.createRef();

    handleChange = (event) => {
        event.preventDefault();
        this.setState({disabled: false});
        const { name, value } = event.target;
        let errors = this.state.errors;
        if(value.length === 0) {
            this.setState({disabled: true});
        }
        const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
        switch (name) {
            case 'nameInput': 
                errors.nameInput = value.length < 5 ? 'Full Name must be 5 characters long...' : '';
                break;
            case 'emailInput': 
                errors.emailInput = validEmailRegex.test(value) ? '' : 'Email is not valid...';
                break;
            case 'phoneInput': 
                errors.phoneInput = value.length < 8 ? 'Phone number must be 10 characters long...' : '';
                break;
            default:
                break;
            }
        
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const validateForm = (errors) => {
            let valid = true;
            Object.values(errors).forEach(
                // if we have an error string set valid to false
                (val) => val.length > 0 && (valid = false)
            );
            return valid;
        }
        if(validateForm(this.state.errors)) {
            const tourId = parseInt(this.props.router.query.id);
            const id = Date.now();
            const reservation = {
                id,
                tourId,
                name: this.nameRef.current.value,
                email: this.emailRef.current.value,
                phone: this.phoneRef.current.value,
                comments: this.commentsRef.current.value
            }
            this.props.addReservation(reservation);
            this.props.updateAvailability(tourId);
            event.currentTarget.reset();
            this.setState({formSubmitted: true})
            } else {
            console.log('Invalid Form')
        }
    }

    render() {
        const findTour = this.props.tours.filter(tour => tour.id === parseInt(this.props.router.query.id));
        const selectedTour = { ...findTour[0] };
        const {errors} = this.state;
        return (
            <>
                <Head>
                    <title>{selectedTour.title} Photography Tour - Everglades Photography Tours</title>
                </Head>
                <main>
                    <div id="sign-up-copy" style={{backgroundImage: `url(${selectedTour.coverPhoto})`}}>
                        <div id="sign-up-copy-overlay">
                            <h1>{selectedTour.title}</h1>
                            <p>{selectedTour.shortDescription}</p>
                            <Link href="/"><a className="home-link">Back to Home Page</a></Link>
                        </div>
                    </div>
                    <div id="sign-up-form">
                        <h2>Sign Up for the {selectedTour.title} Photography Tour</h2>
                        <ul>
                            <li><strong>Location:</strong> {selectedTour.location}</li>
                            <li><strong>Availability:</strong> {selectedTour.availability} Spots Remaining</li>
                            <li><strong>Date/Time:</strong> {selectedTour.dateTime}</li>
                            <li><strong>Pricing:</strong> ${selectedTour.price}/person</li>
                        </ul>
                        {this.state.formSubmitted ? (
                            <p>Thanks for submitting this form.<br />Your reservation at {selectedTour.location} on {selectedTour.dateTime} has been set!</p>
                        ) : (
                        <form onSubmit={this.handleSubmit}>
                            <fieldset>
                                {errors.nameInput.length > 0 && 
                                        <span className='error'>{errors.nameInput}</span>}
                                <input name="nameInput" ref={this.nameRef} onChange={this.handleChange} type="text" placeholder="Name" /><br />
                                {errors.emailInput.length > 0 && 
                                    <span className='error'>{errors.emailInput}</span>}
                                <input name="emailInput" ref={this.emailRef} onChange={this.handleChange} type="text" placeholder="Email" /><br />
                                {errors.phoneInput.length > 0 && 
                                    <span className='error'>{errors.phoneInput}</span>}
                                <input name="phoneInput" ref={this.phoneRef} onChange={this.handleChange} type="text" placeholder="Phone Number" /><br />
                                <textarea name="commentsInput" ref={this.commentsRef} placeholder="Comments" /><br />
                                <button type="submit" disabled={this.state.disabled} className="large-button">Sign Up</button>
                            </fieldset>
                        </form>
                        )}
                    </div>
                    <div className="tour-card-container">
                        {this.props.tours.map(tour => <TourCard  index={tour.id} key={tour.id} tour={tour} />)}
                    </div>
                </main>
            </>
        )
    }
}

export default withRouter(SignUp);
