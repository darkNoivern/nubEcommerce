import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Card from './Card';
import NoItems from './NoItems';
import Loading from './Loading'
import './style.css'

const Similar = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { category } = useParams();

    async function getData(category) {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
        );
        setData(responseJsonData.data);
        setLoading(false);
    }

    useEffect(() => {
        getData(category);
    }, []);

    return (
        loading===true ? <Loading/>:
        <>
        <div className="banner flexy my-lg-5 my-4 pb-1 text-center">
                    {category}
                </div>
            {
                (data.length > 0)
                    ?
                    <div class="row mx-0">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="col col-lg-3 col-md-6 col-12 mb-5 py-4 d-flex justify-content-center">
                                        <Card data={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <NoItems text="Similar Items Unavailable" />
            }
        </>
    )
}

export default Similar
