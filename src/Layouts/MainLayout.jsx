import React, {useContext} from 'react';
//context
import StoreContext from "../Context/StoreContext";

//bootstrap
import {Navbar, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//css
import "./MainLayout.styles.css"
const MainLayout = ({children}) => {
    const {state} = useContext(StoreContext);
    const {total} = state;
    return (
        <div className="pb-11 bg-img text-white">
            <Navbar className="p-4" bg="dark" variant="dark">
                <Container>
                <Link className="nav-title" to="/">
                    <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/3419/3419600.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    <div className="sm:text-3xl text-base d-inline-block">H H M S</div>
                
                </Link>
                <div className="d-inline-block nav-title no-underline sm:text-3xl text-base">TOTAL: ${total} </div>
                <Button variant="success">Check out!</Button>{' '}
                <Link to="/cart">
                <div className="d-inline-block nav-title no-underline sm:text-3xl text-base">MY CART</div>

                </Link>
                </Container>
            </Navbar>
            <div >
            {children}

            </div>

            
        </div>
    );
};

export default MainLayout;