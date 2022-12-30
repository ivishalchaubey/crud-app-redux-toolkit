import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
import { addProduct, editProduct, getProduct } from '../redux/ItemsSlice';
import Home from './Home';



const Edit = (name) => {
    const [prodTitle, setProdTitle] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const dispatch = useDispatch();

    const formSubmit = (e) => {
        e.preventDefault()
        dispatch(editProduct(
            {
                id: name.name.id,
                title: prodTitle,
                description: prodDesc
            }
        ))
        setProdDesc("");
        setProdTitle("");
    }

    return (
        <>
            <form className="container" onSubmit={formSubmit}>
                <input
                    type="text"
                    placeholder="Product Title"
                    className="form-control my-2"
                    value={prodTitle}
                    onChange={(e) => setProdTitle(e.target.value)}
                    required
                />
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    placeholder="Product Description.."
                    className="form-control my-2"
                    value={prodDesc}
                    
                    onChange={(e) => setProdDesc(e.target.value)}

                    required
                ></textarea>
                <button
                    type="submit"
                    className="btn btn-danger px-5 py-2">
                    Edit Product
                </button>
            </form>
        </>
    )
}

export default Edit