import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-accent">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Power-Hack</Link>
            </div>
            <div className="flex-none">
                <Link to={'/login'}>  <button className="btn btn-outline btn-secondary mr-5">
                    Login
                </button></Link>
                <Link to={'/register'}> <button className="btn btn-outline btn-secondary">
                    Register
                </button></Link>
            </div>
        </div>
    );
};

export default Navbar;