import React from 'react'
import './Product.scss'
import Star from '../../assets/svg/star.jsx'
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addWish, deleteWish } from '../../Redux/Wish/WishSlice.js';
import { addCart } from '../../Redux/basket/basketSlice.js';

function Product({ product }) {
  const dispatch = useDispatch()

  const {items} = useSelector((state) => state.wishList)
  const isInWishList = items.some((item) => item.id == product.id)

  return (
    <div className='product'>
       <div className='box'>
        {
          isInWishList ? 
          <FaRegHeart className='icon_add' onClick={() => dispatch(deleteWish(product.id))} size={20} />
          : <FaRegHeart className='icon' onClick={() => dispatch(addWish(product))} size={20} />
        }
         
          
        </div>
      <div className="product-container">
        <div className="image">
          <img src={product.thumbnail} alt="" />
        </div>
        
        <button onClick={() => dispatch(addCart(product)) } className="adding">
          Add To Cart
        </button>
      </div>
      {/* <div className="discount" style={{
        display: `${product.discount? "block" : "none"}`
      }}>-{product.discountedPercentage}%</div> */}
    
      <h3>{product.title}</h3>
      <p>
        {/* <span className='d-price'>${product.discountedPrice}</span> */}
        <span className='price'>${product.price}</span>
      </p>
      <div className="rating">
        <div className="stars">
          {
            [1, 2, 3, 4, 5].map((x) => (
              <Star key={x} fill={product.rating >= x ? "#FFAD33" : "gray"} />
            ))
          }
        </div>
        <span>{product.rating}</span>
      </div>
    </div>
  )
}

export default Product
