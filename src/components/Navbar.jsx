import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartContainer = useSelector(state=>state);
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link exact to="/" className="navbar-brand ms-sm-4">
                        Zygarde🖤
                    </Link>
                    <div className="ms-auto">
                        <Link exact to='/cart'>
                            <IconButton className="text-white">
                                <ShoppingCartIcon />
                            </IconButton>
                            
                            <IconButton className="text-white">
                                {cartContainer.length}
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
