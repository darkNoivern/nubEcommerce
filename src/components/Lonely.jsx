import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router';
import Loading from './Loading'
import NoItems from './NoItems';
import { toast } from 'react-toastify';
import './style.css'

const Lonely = () => {

    const [data, setData] = useState([]);
    const [rate, setRate] = useState(0.0);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();
    const list = useSelector(state => state)

    async function getData() {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://fakestoreapi.com/products/${id}`
        );

        console.log(responseJsonData.data)

        if (responseJsonData === null) {
            setData([])
        }
        else {
            setData(responseJsonData.data)
        }

        if (responseJsonData === null) {
            setRate(0.0)
        }
        else {
            setRate(responseJsonData.data.rating.rate)
        }
        // (responseJsonData === null) ? setRate(0.0) : setRate(responseJsonData.data.rating.rate)
        setLoading(false);
    }

    useEffect(() => {
        getData();
        console.log(data)
    }, []);

    
    const addCart = () => {

        const newData = {
            id: data.id,
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            image: data.image,
            rating: data.rating,
            cartCount: 1,
        }

        let ok = false;
        list.forEach((item) => {
            ok = ok || (data.id === item.id)
        })

        dispatch({
            type: 'ADD_TO_CART',
            payload: newData,
        });

        if(ok){
            toast.info('Already in Cart', { theme: "colored" })
        }
        else{
            toast.success('Added to Cart successfully', { theme: "colored" })
        }
    }

    return (
        loading === true
            ?
            <Loading />
            :
            (data === [])
                ?
                <NoItems text='This Item is Unavailable' />
                :
                <>
<div className="loading-background flexy">
                    <div class="item row mx-0 my-4">
                        <div className="col col-lg-4 col-12 d-flex justify-content-center align-items-center mt-3">

                            <div class="image lonely-image d-flex justify-content-center">
                                <img src={data.image} alt={data.title} />
                            </div>

                        </div>
                        <div className="col col-lg-8 col-12 pe-lg-5 px-4">
                            <div class="content mt-lg-5 mt-4">
                                <div class="lonely-header header py-2">{data.title}</div>
                                <div className="desc my-3">
                                    {data.description}
                                </div>
                                <div className="extra my-4">
                                    <i className="ui tag lonely-tag blue label">
                                        $ {data.price}
                                    </i>
                                    <span className="rating-lonely ms-5">
                                        {rate}
                                        <i class="star yellow icon ms-2"></i>
                                    </span>
                                </div>
                                <div className="btn-set d-flex justify-content-between">

                                    <div className="add-tolonely-btn flexy">
                                        <button onClick={addCart} className="ui ms-1 green button">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </>
    )
}

export default Lonely
