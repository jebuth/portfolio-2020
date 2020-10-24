import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);
    
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        JUSTIN BUTH
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Featured
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar