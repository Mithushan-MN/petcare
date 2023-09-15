import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import feedimg1 from '../../images/feedback (1).jpg'
import feedimg2 from '../../images/feedback (2).jpg'
import feedimg3 from '../../images/feedback (3).jpg'
import feedimg4 from '../../images/feedback (4).jpg'
import FeedbackCard from './FeedbackCard';
import './Feedback.css'

export default function Feedback() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
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

      const feedbackData = [
        {
            id:1,
            imageurl:feedimg1,
            name: "Pet Training",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
            posision: 'customer',
        },
        {
            id:1,
            imageurl:feedimg2,
            name: "Pet Training",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
            posision: 'customer',
        },
        {
            id:1,
            imageurl:feedimg3,
            name: "Pet Training",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
            posision: 'customer',
        },
        {
            id:1,
            imageurl:feedimg4,
            name: "Pet Training",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi,",
            posision: 'customer',
        },
      ]

      const fbcard = feedbackData.map((item)=>
      <FeedbackCard url={item.imageurl} name={item.name} description={item.description} posision={item.posision}/>)

  return (
    <div className='feedback'>
      <h1>What people Say..!</h1>
      <p className='fbp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? 
        Alias voluptate nemo et ex illo quo similique!"</p>
        <Carousel responsive={responsive}>
            {fbcard}
        </Carousel>
    </div>
  )
}
