import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import NoItems from "./NoItems"
import Loading from './Loading'
import './style.css'

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://fakestoreapi.com/products`
        );
        setData(responseJsonData.data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return (

        loading === true ? <Loading /> :

            <>
                <div className="banner flexy my-lg-5 my-4 pb-1">
                    Our Products
                </div>
                {
                    (data.length > 0)
                        ?
                        <div class="row mx-0">
                            {

                                data.map((item, index) => {
                                    return (
                                        <div className="col col-lg-3 col-md-6 col-12 mb-5 py-2 d-flex justify-content-center">
                                            <Card data={item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <NoItems />
                }
            </>

    )
}

export default Home
