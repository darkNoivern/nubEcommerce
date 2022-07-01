import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'

const CartItem = (props) => {
    const [count, setCount] = useState(props.data.cartCount);

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state);

    const setAddDispatch = () => {

        let cnt = count + 1;

        setCount(cnt)
        const data = {
            id: props.data.id,
            title: props.data.title,
            price: props.data.price,
            description: props.data.description,
            category: props.data.category,
            image: props.data.image,
            rating: props.data.rating,
            cartCount: props.data.cartCount,
        }

        dispatch({
            type: 'INC_COUNT',
            payload: data,
        });
        console.log(cartItems)
        
        props.trigger(1);
    }

    const setSubDispatch = () => {

        let cnt = count - 1;

        if (cnt <= 0) {
            dispatch({
                type: 'DELETE_FROM_CART',
                payload: props.data,
            });

            toast.error('Removed from Cart succesfully', { theme: "colored" })
        }
        else {
            setCount(cnt)
            const data = {
                id: props.data.id,
                title: props.data.title,
                price: props.data.price,
                description: props.data.description,
                category: props.data.category,
                image: props.data.image,
                rating: props.data.rating,
                cartCount: cnt
            }

            dispatch({
                type: 'DEC_COUNT',
                payload: data,
            });
        }
        
        props.trigger(1);
    }

    const removeItem = () => {

        dispatch({
            type: 'DELETE_FROM_CART',
            payload: props.data,
        });

        toast.error('Removed from Cart succesfully', { theme: "colored" })
        
        props.trigger(1);
    }

    return (
        <>
            <div class="item row mx-0 my-4">
                <div className="col col-md-3 col-12 d-flex justify-content-center align-items-center mt-3">

                    <div class="image cart-image">
                        <img src={props.data.image} alt={props.data.title} />
                    </div>
                </div>
                <div className="col col-md-9 col-12 px-lg-0 px-4">
                    <div class="content mt-4">
                        <div class="header">{props.data.title}</div>

                        <div className="extra my-4">
                            <i className="ui tag cart-tag blue label">
                                $ {props.data.price}
                            </i>
                            <span className="rating-cart ms-5">

                                {props.data.rating.rate}
                                <i class="star yellow icon">
                                </i>
                            </span>
                        </div>
                        <div className="btn-set d-flex justify-content-between">
                            <div className="count-btn">
                                <IconButton onClick={setSubDispatch}>
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton>
                                    {count}
                                </IconButton>
                                <IconButton onClick={setAddDispatch}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <div className="remove-btn flexy">
                                <button onClick={removeItem} className="ui inverted red button">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
