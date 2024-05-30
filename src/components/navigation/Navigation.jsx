import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/image.png';

const Navigation = ({ routes }) => {
    const location = useLocation();
    const indexPageLink = routes.filter((route) => route.index === false).shift();
    const pages = routes.filter((route) => Object.prototype.hasOwnProperty.call(route, 'title'));

    return (
        <header>
            <Navbar expand='md' bg='dark' data-bs-theme='dark' className='my-navbar'>
                <Container fluid>
                    <Navbar.Brand as={Link} to={indexPageLink?.path ?? '/'}>
                    <img src={logo} alt="Logo" className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='main-navbar' />
                    <Navbar.Collapse id='main-navbar'>
                        <Nav className='me-auto link' activeKey={location.pathname}>
                            {
                                pages.map((page) =>
                                    <Nav.Link as={Link} key={page.path} eventKey={page.path} to={page.path ?? '/'}>
                                        {page.title}
                                    </Nav.Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header>
    );
};

Navigation.propTypes = {
    routes: PropTypes.array,
};

export default Navigation;
