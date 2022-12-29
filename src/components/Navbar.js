import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductForm from './ProductForm';

const Navbar = () => {
    return (
        <>
            <ProductForm />
            <nav className="navbar bg-body-tertiary bg-dark mb-2 sticky-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">CRUD-App</NavLink>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Item" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button type="button" className="btn btn-outline-light mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Item</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar