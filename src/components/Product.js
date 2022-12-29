import React from 'react'
import Image from '../images/image1.jpg'

const Product = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src={Image} alt="" className='img-fluid rounded w-75' />
                    </div>
                    <div className="col-md-6">
                        <div className="container bg-light p-3 rounded mt-3">
                            <div class="d-grid gap-2 mb-3">
                                <button class="btn btn-success" type="button">Edit Product</button>
                            </div>
                            <h3 className='bg-dark text-light p-3 rounded'>Product Title..</h3>
                            <p className='mx-5 p-3'>Awesome App</p>
                            <h3 className='bg-dark text-light p-3 rounded'>Product Description..</h3>
                            <p className='mx-5 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel non, rem eaque tenetur harum ratione modi et, aliquam ex, excepturi fuga. Et repellat omnis tempore neque officiis voluptatem at alias, corrupti eius, cum assumenda quis. Tenetur ipsa nam ex, pariatur molestias eum endis dolorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product