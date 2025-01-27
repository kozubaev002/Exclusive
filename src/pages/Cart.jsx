import React from 'react'
import './Cart.scss'
import image1 from '../assets/img/image copy 11.png'
import image3 from '../assets/svg/image1.svg'
import image2 from '../assets/svg/image2.svg'

function Cart() {
    return (
        <div className='cart'>


            <div className='cart2'>

                <ul >
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>


                <div className='cart3'>
                    <div className='div10'>
                        <img src={image1} alt="" />
                        <h3>H1 Gamepad</h3>
                    </div>
                    <p>$550</p>
                    <div className='div11'>
                        <p>02</p>
                        <div className='imgs'>
                            <img src={image3} alt="" />
                            <img src={image2} alt="" />
                        </div>
                    </div>
                    <p>$1100</p>
                </div>

            </div>

            <div className='cart4'>
                <button>Return To Shop</button>
                <button>Update Cart</button>
            </div>


            <div className='cart5'>
                <div className='cart51'>
                    <h2>Coupon Code</h2>
                    <button>Apply Coupon</button>
                </div>


                <div className='cart52'>
                    <h2>Cart Total</h2>
                    <div className='div12'>
                        <h2>Subtotal: <h2>$1750</h2></h2>
                        <p></p>
                        <h2>Shipping: <h2>Free</h2></h2>
                        <p></p>
                        <h2>Total: <h2>$1750</h2></h2>
                    </div>
                    <button>Procees to checkout</button>
                </div>
            </div>


        </div>
    )
}

export default Cart

