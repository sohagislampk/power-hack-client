import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-3 px-5 my-4 mx-5 bg-base-200 rounded'>
                <div className='flex justify-between items-center font-bold gap-4'>
                    <p>Billing</p>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>
                <button className="btn btn-wide">Add New Bill</button>
            </div>
            <div className="overflow-x-auto mx-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;