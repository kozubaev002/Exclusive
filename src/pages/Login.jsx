import React, {useState} from 'react'
import './Login.scss'
import image1 from '../assets/img/image1.png'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  
    async function loginEmail() {
      try {
        const res = await signInWithEmailAndPassword  (auth, email,password)
        console.log(res);
        
        if(res) {
          toast.success("Login successful")
          navigate('/account')
        }
        
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
      
    }
  return (
    <div className='frame767'>
        <img src={image1} alt="" />

      <div className='Exclusive'>
        <div className='Enter'>
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

          <div className='Password'>
            <input type="text" placeholder='Email or Phone Number'  value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <div className='Forget'>
          <button onClickCapture={() => loginEmail()} >Log In</button>
          <p>Forget Password?</p>
        </div>
      </div>
    </div>
  )
}

export default Login