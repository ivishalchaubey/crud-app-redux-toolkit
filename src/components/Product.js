import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Image from '../images/image1.jpg';
import { getProduct } from '../redux/ItemsSlice';
import Edit from './Edit';


const Product = () => {
    const id = useParams();
    const selector = useSelector((state)=>state.ItemsSlice.aPost)
    const dispatch = useDispatch();
    const [counter,setCounter] = useState(false);
    useEffect(()=>{
        dispatch(getProduct(id.id))
    },[])
    return(
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 text-center">
                        <img src={Image} alt="" className='img-fluid rounded w-75' />
                    </div>
                    <div className="col-md-6">
                        <div className="container bg-light p-3 rounded mt-3">
                            <div className="d-grid gap-2 mb-3">
                                <button className="btn btn-success" type="button" onClick={()=>{
                                    setCounter(true)
                                }}>Edit Product</button>
                            </div>
                                {
                                    counter==true?<Edit name={selector}/>:null
                                }
                            <h3 className='bg-dark text-light p-3 rounded mt-2'>Product Title..</h3>
                            <p className='mx-5 p-3'>{selector.title}</p>
                            <h3 className='bg-dark text-light p-3 rounded'>Product Description..</h3>
                            <p className='mx-5 p-3'>{selector.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product