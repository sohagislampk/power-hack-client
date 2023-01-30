import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Authcontext';

const Register = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(Authcontext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registerError, setRegisterError] = useState('');
    const handleRegister = (data) => {
        setRegisterError('');
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password
        }

        fetch('http://localhost:5000/registration', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result._id) {

                    toast.success('Registration Successfull')
                    setUser(result.email);
                    navigate('/')
                } else {
                    setRegisterError(result.message)
                }
            })
            .catch(e => {
                setRegisterError(e.message)
            });
    }
    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center gap-10">
            <div className="text-center mx-w-sm lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Please create account or register to access your data</p>
            </div>
            <form onSubmit={handleSubmit(handleRegister)} className="card-body max-w-sm shadow-2xl bg-base-100 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register("email", {
                        required: "Email is Required"
                    })} className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" {...register("password", {
                        required: "Password is Required"
                    })} className="input input-bordered" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <label className="label">
                        <Link to={"/login"} className="label-text-alt link link-hover">Already have a account? Login</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                    {registerError && <p className='text-red-500'>{registerError}</p>}
                </div>
            </form>
        </div>
    );
};

export default Register;