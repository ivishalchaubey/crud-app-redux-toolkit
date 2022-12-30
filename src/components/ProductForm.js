import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/ItemsSlice";

const ProductForm = () => {
    const [prodTitle, setProdTitle] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const [myid,setMyid] =useState(0);

    const dispatch = useDispatch();

    const addItemClk = (e) => {
        e.preventDefault();
        dispatch(
            addProduct({
                id:myid,
                title: prodTitle,
                description: prodDesc,
            })
        );
        setProdDesc("");
        setProdTitle("");
    };

    return (
        <>
            <div>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                    Modal title
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>

                            {/* Form Area  */}
                            <form className="container" onSubmit={addItemClk}>
                                <div className="modal-body">
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
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    data-bs-dismiss="modal"
                                    onClick={()=>setMyid(myid+1)}
                                    >
                                        Add Item
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductForm;
