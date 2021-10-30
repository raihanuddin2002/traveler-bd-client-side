import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

//https://i.ibb.co/QNGwN03/3.png
const AllOrders = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        axios.get(`https://damp-cliffs-56350.herokuapp.com/allOrders`)
            .then(res => setServices(res.data))
    },[services]);
    
    return (
        <div className="container">
            <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">ALL ORDERS</h2>
            <div className="row row-cols-1 gy-4 mt-3 my-5">
                {
                    services.map(data => <Order key={data._id} data={data}></Order>)
                }
            </div>
        </div>
        
    );
}
export default AllOrders;