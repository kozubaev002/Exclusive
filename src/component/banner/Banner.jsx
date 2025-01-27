import React, { useEffect } from 'react'
import './Banner.scss'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../assets/img/banner.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getProductByCategory } from '../../Redux/products/productSlice';
import { fetchCategory } from '../../Redux/category/categorySlice';

// let API = 'https://dummyjson.com/products/category-list'
function Banner() {
  // const [list, setList] = useState([])

  // async function getList() {
  //   try {
  //     const res = await axios.get(API)
  //     console.log(res)
  //     setList(res.data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getList()
  // }, [])


  const dispatch = useDispatch()
  const { loading, category, error } = useSelector((state) => state.categoryList)

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='banner'>
      <div className='banner-sidebar'>
        <ul >
          {
            category.map((item, index) => (
              <li onClick={() => dispatch(getProductByCategory(item))} style={{cursor:"pointer"}} key={index}>
                {item}
              </li>
            ))
          }
        </ul>

        <Button variant="warning">Warning</Button>
      </div>


      <div className='banner-carousel'>

        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={banner} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={banner} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={banner} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Banner
