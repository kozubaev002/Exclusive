import React from 'react'
import List from '../component/wishList/List.jsx'
import { wish} from '../data/index.js'
import "./Card.scss"
import X from '../component/x/x.jsx'
import {list} from '../data/index.js'

function Card() {
    return (
        <div >
            <div className='bag'>
                <p>Wishlist (4)</p>
                <button>Move All To Bag</button>
            </div>


            <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
                {
                    wish.map((item) => (
                        <List key={item.id} data={item} />
                    ))
                }
            </div>

            <div className='bag2'>
                <p>Just For You</p>
                <button>See All</button>
            </div>

            <div className='map'>
                {
                    list.map((x) => (
                        <X key={x.id} month={x} />
                    ))
                }
            </div>

        </div>
    )
}

export default Card