import React from 'react'
import './x.scss'


function X({month}) {
    return (
        <div className='box'>
            <div className='box-content'>
                <div style={{display:"flex", justifyContent:"end", paddingRight:"10px", paddingTop:"10px" }}>
                    <img src={month.imgs} alt="" />
                </div>
                <div  style={{display:"flex", justifyContent:"center"}}>
                    <img className='image' src={month.image} alt="" />
                </div>

                <button>
                    <img src={month.img} alt="" />
                    <p>{month.button}</p>
                </button>
            </div>

            <div style={{marginTop:'30px'}}>
                <h3>{month.title}</h3>
                <div style={{display:"flex",  gap:"10px"}}>
                <p>${month.p}</p>
                <p style={{textDecorationLine: "line-through", fontSize:"16px", fontWeight:'500px', color:"black", opacity:"0.5"}}>{month.p2}</p>
                </div>
                
                <div style={{display:"flex"}}>
                <img src={month.i} alt="" />
                <span>{month.san}</span>
                </div>
                
            </div>
            
        </div>
    )
}

export default X
