import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,name,price, description, picture} = props.data;
    return (
        <div className="col d-flex align-items-stretch">
            <article className="service-col p-5 bg-light shadow-lg rounded-4">
                <p className="mb-4 text-center">
                    <img src={picture} alt="" className="img-fluid" />
                </p>
                <h3 className="fw-bold mb-4 ff-volkhob">
                   {name}
                </h3>
                <p className="text-muted">
                    {description}
                </p>
                <h5 className="">
                    {price}
                </h5>
                <Link to={`serviceDetails/${_id}`}><button className="btn btn-warning px-4">Book Now</button></Link>
            </article>
        </div>
        // 
    );
};

export default Service;