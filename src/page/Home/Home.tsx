import React, { useState} from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
import './Home.css'

function Home() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const generateId = () => {
    setId(uuidv4());
  }



  const handleJoin = () => {
    if(!name){
      toast.success('Pease enter Username')
    } 
    else{
      navigate('../editor/editor'),{
        id,
        name
      }
    }
    

  }

  return (
    <div className='home__container'>
      <form className="home_form">
        <input type="text" placeholder='Room Id' value={id} onChange={(e) => setId(e.target.value)} className='form_element'/>
        <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} className='form_element'/>
        <button type="submit" className='form_submit' onClick={() => handleJoin()}>Join</button>
        <a href="#" className='form_generate_id' onClick={(e) => generateId()}>Generate Unique Room Id</a>
      </form>
    </div>
  )
}

export default Home