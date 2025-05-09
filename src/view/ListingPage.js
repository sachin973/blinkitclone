import React, { useEffect } from 'react';
import ProductCard from "../component/productCard/ProductCard";
import Grid from '@mui/material/Grid';
import axios from 'axios';



export default function ListingPage() {
    const [list, setList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    useEffect(() => {
        // Make GET request to fetch data
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                console.log(response.data.products);
                setList(response.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="listing-page">
            <Grid container spacing={2}>
                {list && list.map((item, i) => {
                    return (

                        <Grid size={3} key={i}>
                            <ProductCard item={item} />
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    );
}
