import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../redux/ItemsSlice';

const Edit = (name) => {
    const [prodTitle, setProdTitle] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const [myid,setMyid] =useState(0);
    const dispatch = useDispatch();

    return (
        <>
            <form className="container">
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
                        type="button"
                        className="btn btn-danger px-5 py-2"
                        onClick={() => {
                            setMyid(myid + 1);
                            dispatch(editProduct(
                                prodTitle
                            ))
                        }}
                    >
                        Edit Product
                    </button>
            </form>
        </>
    )
}

export default Edit