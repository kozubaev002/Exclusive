import React, {useEffect} from 'react'
import { getProductByCategory } from '../../../Redux/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../product/Product'

function Products() {

    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductByCategory('laptops'));
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log(products)
    
    return (
        <div>
            <div className='products'>
                {products.map((item) => (
                    <Product key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default Products
