import React from 'react'
import { useState } from 'react'
import './Section1.css'
import { FaArrowAltCircleDown ,FaArrowAltCircleUp} from 'react-icons/fa';
// import '../land_page/LandPage.css'
import accimg1 from '../../images/pngegg (10).png'
import accimg2 from '../../images/img1 (1).jpg'
import accimg3 from '../../images/pngegg (12).jpg'
import accimg4 from '../../images/pngegg (11).png'


export default function Section1() {

    const [selected, setSelected] = useState(null)


    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }




  return (
    <div className='accordian-section'>
      <div className='accordian'>
        <h1>Why Choose Us..!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!",
        </p>

        {data.map((item, i)=>(
            <div className={selected === i ?'item show': 'item'}>
                <div className='title' onClick={()=>toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? <FaArrowAltCircleUp/>: <FaArrowAltCircleDown/>}</span>
                </div>
                <div className={selected === i ?'answer show': 'answer'}>
                    {item.answer}
                </div>
            </div>
        ))}
      </div>

      <div className='accordian-images'>
        <div className='ac1row'>
            <img src={accimg1} className='dog'/>
            <img src={accimg2} className='cat'/>
        </div>
        <div className='ac2row'>
            <img src={accimg3} className='lady'/>
            <img src={accimg4} className='multi'/>
        </div>
      </div>

    </div>
  )
}

const data =[
    {
        question: "How Pettopia pet Care Started.",
        answer: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!",
    },
    {
        question: "How Pettopia pet Care Started.",
        answer: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!",
    },
    {
        question: "How Pettopia pet Care Started.",
        answer: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!",
    },
    {
        question: "How Pettopia pet Care Started.",
        answer: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? Alias voluptate nemo et ex illo quo similique!",
    },

]