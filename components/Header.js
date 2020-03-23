import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

class Header extends React.Component {
    routeChangeStart = () => {
        NProgress.start();
    };

    routeChangeEnd = () => {
        NProgress.done();
    };

    componentDidMount() {
        Router.events.on('routeChangeStart', this.routeChangeStart);
        Router.events.on('routeChangeComplete', this.routeChangeEnd);
        Router.events.on('routeChangeError', this.routeChangeEnd);
      }

    render() {
        return (
            <header>
                <div id="admin-nav">
                <Link href="/admin"><a><img src="../images/admin.svg" width="31" height="25" alt="admin" /></a></Link>
                </div>
                <div id="logo">
                    <Link href="/"><a><img src="../images/logo.png" width="640" height="90" alt="Everglades Photography Tours" /></a></Link>
                </div>
                <nav className="mobile-nav">
                <ul>
                    <li><button className="mobile-nav-menu" onClick={this.props.showMenu}>Menu</button></li>
                </ul>
                {
                    this.props.setShowMenu && this.props.setAdminMenu === false && (
                    <ul>
                        <li><Link href="/movie-dome"><a>Movie Dome</a></Link></li>
                        <li><Link href="/everglades-z-tree"><a>Everglades Z-Tree</a></Link></li>
                        <li><Link href="/sisal-pond"><a>Sisal Pond</a></Link></li>
                        <li><Link href="/fisheating-creek"><a>Fisheating Creek</a></Link></li>
                        <li><Link href="/long-pine-key"><a>Long Pine Key</a></Link></li>
                        <li><Link href="/pine-glades-lake"><a>Pine Glades Lake</a></Link></li>
                        <li><Link href="/south-everglades"><a>South Everglades</a></Link></li>
                        <li><Link href="/dwarf-cypress"><a>Dwarf Cypress</a></Link></li>
                    </ul>)
                }
                {
                    this.props.setShowMenu && this.props.uid !== null && this.props.setAdminMenu === true && (
                    <ul>
                        <li><Link href="/admin"><a>Edit Tour Details</a></Link></li>
                        <li><Link href="/reservations"><a>View Current Reservations</a></Link></li>
                        <li><button className="mobile-nav-logout" onClick={this.props.logout}>Log Out</button></li>
                    </ul>)
                }
                </nav>
                <nav className="desktop-nav">
                {
                    this.props.uid !== null && this.props.setAdminMenu === true ? (
                    <ul>
                        <li><Link href="/admin"><a>Edit Tour Details</a></Link></li>
                        <li><Link href="/reservations"><a>View Current Reservations</a></Link></li>
                        <li><button className="mobile-nav-logout" onClick={this.props.logout}>Log Out</button></li>
                    </ul>
                    )
                    : (
                        <ul>
                            <li><Link href="/movie-dome"><a>Movie Dome</a></Link></li>
                            <li><Link href="/everglades-z-tree"><a>Everglades Z-Tree</a></Link></li>
                            <li><Link href="/sisal-pond"><a>Sisal Pond</a></Link></li>
                            <li><Link href="/fisheating-creek"><a>Fisheating Creek</a></Link></li>
                            <li><Link href="/long-pine-key"><a>Long Pine Key</a></Link></li>
                            <li><Link href="/pine-glades-lake"><a>Pine Glades Lake</a></Link></li>
                            <li><Link href="/south-everglades"><a>South Everglades</a></Link></li>
                            <li><Link href="/dwarf-cypress"><a>Dwarf Cypress</a></Link></li>
                        </ul>
                    )
                }
                </nav>
            </header>
        )
    }
}

export default Header;