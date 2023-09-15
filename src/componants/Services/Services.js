import React from 'react'
import './Services.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import caroimg from '../../images/card (1).png'
import caroimg2 from '../../images/card (2).png'
import caroimg3 from '../../images/card (3).png'
import ServiceCard from './ServiceCard';


export default function Services() {
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    const productData = [
      {
        id:1,
        imageurl:caroimg,
        name: "Pet Training",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
      },
      {
        id:2,
        imageurl:caroimg2,
        name: "Pet Walking",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
      },
      {
        id:3,
        imageurl:caroimg3,
        name: "Health & Wellness",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
      },
      {
        id:4,
        imageurl:caroimg,
        name: "Pet Training",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
      },
      {
        id:5,
        imageurl:caroimg2,
        name: "Pet Walking",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
      },
      {
        id:6,
        imageurl:caroimg3,
        name: "Health & Wellness",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
      },
    ]

    const product = productData.map((item) =>
      <ServiceCard url={item.imageurl} name={item.name} description={item.description}/>)

    return (

    <div className='services'>
      <h1>All Pet Care Services..!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? 
        Alias voluptate nemo et ex illo quo similique!"</p>
      <Carousel responsive={responsive}>
       {product}
  
        
    </Carousel>;
    </div>
  )
}
