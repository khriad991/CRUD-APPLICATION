import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="text-center mb-5 text-primary fw-bolder ">Welcome To My Crud-Application</h1>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column ">
                        <h1 className="fw-bolder mb-4 ">Back-End Use</h1>
                        <p className="text-light bg-info rounded  px-4 py-2 shadow fw-bold fs-4 ">NodeJs</p>
                        <p className="text-light bg-info rounded  px-4 py-2 shadow fw-bold fs-4   ">ExpressJs</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="fw-bolder mb-4 ">Front-End Use</h1>
                        <p className="text-light bg-info rounded   px-4 py-2 shadow  fw-bold fs-4   ">ReactJs</p>
                        <p className="text-light bg-info rounded  px-4 py-2 shadow  fw-bold fs-4   ">Meterials UI</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;