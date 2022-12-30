import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeProduct } from '../redux/ItemsSlice'

const Home = () => {
    const selector = useSelector((state) => state.ItemsSlice.allPost)
    const dispatch = useDispatch();
    return (
        
        <>
            <div className='container'>
                <div className="row">
                    {
                        selector.map((item) => (
                            <>
                                <div className="col-md-4 col-sm-6" key={item}>
                                    <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <div className="card-footer bg-transparent border-success">
                                            
                                                <NavLink to={`/product/${item.id}`} className="btn btn-outline-light"
                                                
                                                >View</NavLink>
                                            <button
                                            type="button" 
                                            className="btn btn-outline-danger float-end"
                                            onClick={()=>dispatch(removeProduct(item.id))}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Home