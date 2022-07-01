import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import CartItem from './CartItem';
import './style.css'

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state);
    const [change,setChange] = useState(false);
    const [total, setTotal] = useState(0);

    const trigger = (getTriggered) => {
        setChange(!change)
    }

    useEffect(() => {
        // console.log('data changed')
        // console.log(data)
        let sum = 0;
        data.forEach((item) => {
            sum = sum + (item.price * item.cartCount);
        });
        setTotal(sum);

    }, [change])

    return (
        <>
            <div className="cart-background">
                <div className="banner flexy my-lg-5 my-4 pb-1">
                    Your Cart
                </div>
                {
                    data.length === 0 ?
                        <>
                            <div className="text-center">
                                <div className="noItem flexy">
                                    <div className="safe">
                                        <p>
                                            Choose Items to Add to Cart
                                        </p>
                                        <button onClick={() => { navigate('/') }} className="ui violet button">Click Me</button>
                                    </div>
                                </div>

                            </div>
                        </>
                        :
                        <>

                            <div className="flexy">
                                <div class="items">
                                    {
                                        data.map((item) => {
                                            return (
                                                <CartItem trigger={trigger} data={item} />
                                            )
                                        })
                                    }
                                    <div className="px-3 mt-lg-5 mt-3 mb-5 d-flex justify-content-between">
                                        <span className='total'>
                                            Total :
                                        </span>
                                        <span className="total-total">
                                            $ {total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Cart
