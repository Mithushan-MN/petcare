import React, { useState } from 'react'
import './Booking.css'
import bookimg from '../../images/pngegg (10).png'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import Swal from 'sweetalert2';

const Booking = () => {

    const [newUserName,setNewUserName] = useState('');
    const [newPetName,setNewPetName] = useState('');
    const [newBookingDate,setNewBookingDate] = useState(0);
    const [newPackage,setNewPackage] = useState([]);
    const [newNumber,setNewNumber] = useState(0);

    const BookingCollectionRef = collection(db,"Orders")


    const onsubmitBooking = async()=>{
        try{
            await addDoc(BookingCollectionRef,{
                name: newUserName,
                petname: newPetName,
                date: newBookingDate,
                mobile_number: newNumber,
                package: newPackage,
            })
            Swal.fire({
                title: 'Success!',
                text: `Room has been successfully created.`,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
              });
        } catch (err){
            console.error(err);
        }
    }



  return (
    <div className='booking'>
      <div className='bookingleft'>
        <img src={bookimg}/>
      </div>
      <div className='bookingright'>
      <div className='inputitems'>
            <input type='name' placeholder='Your Name' className='input' onChange={(e) => setNewUserName(e.target.value)}/>
            <input type='number' placeholder='Mobile Number' className='input' onChange={(e) => setNewNumber(e.target.value)}/>
            <input type='name' placeholder='Pet Name' className='input' onChange={(e) => setNewPetName(e.target.value)}/>
            <input type='date' placeholder='check in'  className='input' onChange={(e) => setNewBookingDate(e.target.value)}/>           
            <select name="package" placeholder='package' id="package" className='input' onChange={(e) => setNewPackage(e.target.value)}>
                <option >Select Grooming Service</option>
                <option >Mini Groom</option>
                <option >Complete Groom</option>
                <option >Hand scissor Groom</option>
            </select>

            <button className='btn-primary' onClick={onsubmitBooking}>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Booking
