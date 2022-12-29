import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeProduct } from '../redux/AddItemSlice'

const Home = () => {
    const selector = useSelector((state) => state.AddItemSlice)
    const dispatch = useDispatch();
    return (
        <>
            <div className='container'>
                <div className="row">
                    {
                        selector.map((item,i) => (
                            <>
                                <div className="col-md-4 col-sm-6" key={i}>
                                    <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <div className="card-footer bg-transparent border-success">
                                            
                                                <NavLink to="/product" className="btn btn-outline-light">View</NavLink>
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