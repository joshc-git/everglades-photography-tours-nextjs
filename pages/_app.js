import App from 'next/app';
import 'normalize.css';
import firebase from 'firebase';
import base, { firebaseApp } from '../components/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

class MyApp extends App {
    state = {
        tours: [
        {
        id: 1,
        photo: "/images/movie-dome.jpg",
        desktopPhoto: "/images/movie-dome-desktop.jpg",
        coverPhoto: "/images/movie-dome-cover.jpg",
        title: "Movie Dome",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 2,
        photo: "/images/everglades-z-tree.jpg",
        desktopPhoto: "/images/everglades-z-tree-desktop.jpg",
        coverPhoto: "/images/everglades-z-tree-cover.jpg",
        title: "Everglades Z-Tree",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 0,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 3,
        photo: "/images/sisal-pond.jpg",
        desktopPhoto: "/images/sisal-pond-desktop.jpg",
        coverPhoto: "/images/sisal-pond-cover.jpg",
        title: "Sisal Pond",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 4,
        photo: "/images/fisheating-creek.jpg",
        desktopPhoto: "/images/fisheating-creek-desktop.jpg",
        coverPhoto: "/images/fisheating-creek-cover.jpg",
        title: "Fisheating Creek",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Lake Okeechobee",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 5,
        photo: "/images/long-pine-key.jpg",
        desktopPhoto: "/images/long-pine-key-desktop.jpg",
        coverPhoto: "/images/long-pine-key-cover.jpg",
        title: "Long Pine Key",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 6,
        photo: "/images/pine-glades-lake.jpg",
        desktopPhoto: "/images/pine-glades-lake-desktop.jpg",
        coverPhoto: "/images/pine-glades-lake-cover.jpg",
        title: "Pine Glades Lake",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 7,
        photo: "/images/south-everglades.jpg",
        desktopPhoto: "/images/south-everglades-desktop.jpg",
        coverPhoto: "/images/south-everglades-cover.jpg",
        title: "South Everglades",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
        {
        id: 8,
        photo: "/images/dwarf-cypress.jpg",
        desktopPhoto: "/images/dwarf-cypress-desktop.jpg",
        coverPhoto: "/images/dwarf-cypress-cover.jpg",
        title: "Dwarf Cypress",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        location: "Flamingo Park",
        availability: 5,
        dateTime: "3/3/2020 @ 6am",
        price: 200,
        status: "available"
        },
    ],
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