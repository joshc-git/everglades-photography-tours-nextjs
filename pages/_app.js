import App from 'next/app';
import 'normalize.css';
import firebase from 'firebase';
import base, { firebaseApp } from '../components/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

class MyApp extends App {
    state = {
        tours: [],
        reservations: [],
        setShowMenu: false,
        setAdminMenu: false,
        uid: null,
        owner: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
            this.authHandler({ user });
            }
        })
        this.ref = base.syncState(`tours`, {
            context: this,
            asArray: true,
            state: 'tours',
        });
        this.ref = base.syncState('reservations', {
            context: this,
            asArray: true,
            state: 'reservations'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addReservation = (reservation) => {
        const reservations = [ ...this.state.reservations ];
        reservations.push(reservation);
        this.setState({ reservations })
    }

    deleteReservation = (index) => {
        const reservations = this.state.reservations.filter(reservation => reservation.id !== index);
        this.setState({ reservations });
    }

    updateTour = (index, updatedTour) => {
        const tours = [ ...this.state.tours ];
        tours[`${index-1}`] = updatedTour;
        this.setState({ tours });
    }

    updateAvailability = (tourId) => {
        const tours = [ ...this.state.tours ];
        const tourIndex = this.state.tours.findIndex(tour => tour.id === tourId);
        if (tours[tourIndex].availability > 0) {
            tours[tourIndex].availability = tours[tourIndex].availability - 1;
        }
        this.setState({ tours });
    }

    showMenu = (event) => {
        event.preventDefault();
        this.setState({ setShowMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({ setShowMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    adminMenu = () => {
        this.setState({ setAdminMenu: true });
    }

    userMenu = () => {
        this.setState({ setAdminMenu: false });
    }

    authHandler = async (authData) => {
        const tours = await base.fetch(JSON.stringify(Date.now()), { context: this });
        if (!tours.owner) {
            await base.post(JSON.stringify(Date.now()), {
            data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid,
            owner: tours.owner || authData.user.uid
        })
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({ uid: null });
    }
    
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Meta />
                <Header showMenu={this.showMenu} adminMenu={this.adminMenu} setAdminMenu={this.state.setAdminMenu} setShowMenu={this.state.setShowMenu} logout={this.logout} uid={this.state.uid} />
                <Component {...pageProps} tours={this.state.tours} userMenu={this.userMenu} showMenu={this.showMenu} adminMenu={this.adminMenu} setAdminMenu={this.state.setAdminMenu} setShowMenu={this.state.setShowMenu} reservations={this.state.reservations} addReservation={this.addReservation} updateAvailability={this.updateAvailability} authHandler={this.authHandler} authenticate={this.authenticate} logout={this.logout} uid={this.state.uid} owner={this.state.owner} updateTour={this.updateTour} deleteReservation={this.deleteReservation} />
                <Footer />
            </>
        )
    }
}

export default MyApp;