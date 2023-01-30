import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Context/Authcontext';

const Navbar = () => {
    const { user } = useContext(Authcontext);
    console.log(user);
    return (
        <div className="navbar bg-accent">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Power-Hack</Link>
            </div>
            <div className="flex-none">

                {
                    user ?
                        <>
                            <p className='font-bold'>Total Paid = 0.00</p>
                        </>
                        :
                        <>
                            <Link to={'/login'}>  <button className="btn btn-outline mr-5">
                                Login
                            </button></Link>
                            <Link to={'/register'}> <button className="btn btn-outline ">
                                Register
                            </button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;