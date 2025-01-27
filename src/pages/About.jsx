import React from 'react'
import Product from "../component/products/Product"
import './About.scss';
import Card from '../component/card/Card';
import image from '../assets/img/image copy.png'
import service from '../assets/svg/service.svg'
import service2 from '../assets/svg/service2.svg'
import service3 from '../assets/svg/service3.svg'
import service4 from '../assets/svg/service4.svg'
import service5 from '../assets/svg/service5.svg'
import service6 from '../assets/svg/service6.svg'
import service7 from '../assets/svg/service7.svg'

function About() {

  const products = [
    { id: 1, title: 'Sallers active our site', price: 10.5, img:service },
    { id: 2, title: 'Mopnthly Produduct Sale', price: 33, img:service2 },
    { id: 3, title: 'Customer active in our site', price: 45.5, img:service3 },
    { id: 4, title: 'Anual gross sale in our site', price: 25, img:service4 },
  ];


  const cards = [
    { id: 1, name: 'FREE AND FAST DELIVERY', title: "Free delivery for all orders over $140",img:service5 },
    { id: 2, name: '24/7 CUSTOMER SERVICE', title: "Friendly 24/7 customer support", img:service6 },
    { id: 3, name: 'MONEY BACK GUARANTEE', title: "We reurn money within 30 days", img:service7 },
  ]
  return (
    <div className='about'>
      <h3>Home /<p>About</p></h3>
      <div className='Our-Story'>
        <div className='text'>
          <h3>Our Story</h3>
          <div>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
        </div>

        <img src={image} alt="" />
      </div>

      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>




      <div className='cards'>
        {cards.map(card => (
          <Card
            key={card.id}
            name={card.name}
            title={card.title}
            img={card.img}
          />
        ))}
      </div>
    </div>
  )
}

export default About
