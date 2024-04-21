import React, { useState } from 'react';
import './ShippingAddress.css';

const ShippingAddress = () =>{
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(address); // Process form submission here
        //Clear form fields
        setAddress({
            firstName: '',
            streetName: '',
            cityName: '',
            stateName: '',
            countryName: ''
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Shipping Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="John Maker"
                        id="firstName"
                        name="firstName"
                        value={address.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="streetName">Street Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="123 Plae Grond Stret"
                        id="streetName"
                        name="streetName"
                        value={address.streetName}
                        onChange={handleChange}
                    />
                    <label htmlFor="cityName">City</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Vermont"
                        id="cityName"
                        name="cityName"
                        value={address.cityName}
                        onChange={handleChange}
                    />
                    <label htmlFor="stateName">State / Province</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="California"
                        id="stateName"
                        name="stateName"
                        value={address.stateName}
                        onChange={handleChange}
                    />
                    <label htmlFor="countryName">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="United State of America"
                        id="countryName"
                        name="countryName"
                        value={address.countryName}
                        onChange={handleChange}
                    />
                    
                    <input
                        type="checkbox"
                        className="default-input default"
                        id="defaultAddress"
                        name="defaultAddress"
                        value={address.defaultAddresss}
                        onChange={handleChange}
                    />  <label htmlFor="defaultAddress" className='default-label default'> Set this as your default adddress</label>
                
                
              </div>
              <div className="cta">
                <button type="submit" className="add-address" onClick={handleSubmit}>Add Address</button>
                </div>
                    <div className="row">
                      <div className="col-6 text-start">
                      <button type="button" className="btn btn-primary mb-3">Back</button>
                   </div>
                <div className="col-6 text-end">
                    <button type="button" className="btn btn-primary mb-3">Secure connection</button>
                </div>
                </div>
            </form>
            
        </div>
    );
}

export default ShippingAddress;
