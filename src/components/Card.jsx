import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import './style.css'

const Card = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const list = useSelector(state => state)

    const getSimilar = () => {
        navigate(`/similar/${props.data.category}`)
    }

    const getIndividual = () => {
        navigate(`/product/${props.data.id}`)
    }

    const addCart = () => {

        const data = {
            id: props.data.id,
            title: props.data.title,
            price: props.data.price,
            description: props.data.description,
            category: props.data.category,
            image: props.data.image,
            rating: props.data.rating,
            cartCount: 1,
        }

        let ok = false;
        list.forEach((item) => {
            ok = ok || (props.data.id === item.id)
        })

        dispatch({
            type: 'ADD_TO_CART',
            payload: data,
        });

        if(ok){
            toast.info('Already in Cart', { theme: "colored" })
        }
        else{
            toast.success('Added to Cart successfully', { theme: "colored" })
        }
    }

    return (
        <>
            <div className="ui link cards d-flex justify-content-center">
                <div className="card">
                    <div className="image navigate-individual"  onClick={getIndividual}>
                        <img src={props.data.image} alt={props.data.title} />
                    </div>
                    <div className="content">
                        <div className="header navigate-individual" onClick={getIndividual}>
                            {
                                props.data.title.length > 50
                                    ?
                                    `${props.data.title.slice(0, 50)} . . . .`
                                    :
                                    props.data.title
                            }
                        </div>
                        <div className="meta price d-flex justify-content-between">
                            <span>
                                $ {props.data.price}
                            </span>
                            <span>
                                {props.data.rating.rate}
                                <i class="star outline yellow icon ms-1"></i>
                            </span>
                        </div>
                        <div className="meta">{props.data.category}</div>
                        <div className="btn-store d-flex justify-content-between">
                            <button onClick={addCart} class="ui primary mt-2 button">
                                Add to Cart
                            </button>

                            <button onClick={getSimilar} class="ui me-0 yellow mt-2 button">
                                Show Similar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
