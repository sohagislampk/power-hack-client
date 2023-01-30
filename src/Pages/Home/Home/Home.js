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
                <label htmlFor="my-modal-3" className="btn btn-wide">Add New Bill</label>
            </div>
            <div className="overflow-x-auto mx-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td><button className="btn btn-xs mr-2">Edit</button><button className="btn btn-xs">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-group my-10">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Please Input your Bill Details</h3>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name <span>*</span></span>
                            </label>
                            <input type="text" placeholder="full name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span>*</span></span>
                            </label>
                            <input type="email" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone <span>*</span></span>
                            </label>
                            <input type="tel" placeholder="phone 11 digit" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" required className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payable Amount <span>*</span></span>
                            </label>
                            <input type="number" placeholder="payable amount" required className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Add Bill</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Home;