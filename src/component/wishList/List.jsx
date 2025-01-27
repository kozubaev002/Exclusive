import React from 'react'
import './List.scss'

function List({ data }) {

    return (
        <div className='list'>
            <div className='list-content'>

                <div style={{ display: "flex", justifyContent: "end", paddingRight: "10px", paddingTop: "10px" }}>
                    <img className='img1' src={data.imges} alt="" />

                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>

                    <img className='img2' src={data.image} alt="" />
                </div>

                <button>
                    <img src={data.img} alt="" />
                    <p>{data.button}</p>
                </button>
            </div> 


            <div style={{ marginTop: "30px" }}>
                <h1>{data.title}</h1>
                <div style={{ display: "flex", gap: "10px" }}>
                    <p>${data.p}</p>
                    <p style={{ textDecorationLine: "line-through", fontSize: "16px", fontWeight: '500px', color: "black", opacity: "0.5" }}>{data.p2}</p>
                </div>

            </div>


        </div>
    )
}

export default List
