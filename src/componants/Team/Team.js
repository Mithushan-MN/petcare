import React from 'react'
import teamimg1 from '../../images/team (1).jpg'
import teamimg2 from '../../images/team (1).png'
import teamimg3 from '../../images/team (2).jpg'
import teamimg4 from '../../images/team (2).png'
import TeamCard from './TeamCard'
import './Team.css'

export default function Team() {

    const teamData=[
        {
            id:1,
            imageurl:teamimg1,
            name: "Mr MN",
            posision:"President & CEO",
        },
        {
            id:2,
            imageurl:teamimg2,
            name: "jane",
            posision:"Grooming CEO",
        },
        {
            id:3,
            imageurl:teamimg3,
            name: "Peter",
            posision:"manager",
        },
        {
            id:4,
            imageurl:teamimg4,
            name: "john",
            posision:"Pet Speacialist",
        },
    ]

    const teams = teamData.map((item)=>
    <TeamCard url={item.imageurl} name={item.name} posision={item.posision}/>)

  return (
    <div className='team'>
      <h1>Our Creative Team..!</h1>
      <p className='teamdescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit? 
        Alias voluptate nemo et ex illo quo similique!"</p>
       <div className='teamitems'>
       {teams}
        </div>
    </div>
  )
}
