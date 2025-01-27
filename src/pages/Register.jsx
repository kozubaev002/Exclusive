import React, {useState} from 'react'
import './Register.scss'
import image1 from '../assets/img/image1.png'
import { Link } from 'react-router-dom'
import google from '../assets/svg/googe.svg'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'




function Register() {
  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')

  async function signUp() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email,password)
      console.log(res);
      
      if(res) {
        toast.success("Email success created")
      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
    
  }
  return (
    <div className='card'>
      <div style={{display:"flex"}}>
      <div>
      <img style={{width:"805px", height:"781px"}} src={image1} alt="" />
      </div>

      <div className='card2'>
        <div className='account'>
          <h3>Create an account</h3>
          <p>Enter your details below</p>
        </div>

        <div className='text'>
          <div className='Name'>
             <input type="text"
              placeholder='email'
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />

             <input type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             />


             <input type="text" placeholder='Password' />
          </div>

          <div className='Create'>
            <button onClickCapture={() => signUp()} className='Create-btn'>Create Account</button>

            <div className='Google'>
                <button>
                  <img src={google} alt="" />
                  <p>Sign up with Google</p>
                </button>
              </div>

              <div className='Login'>
                <p>Already have account?</p>
                <Link to="/login">Login</Link>
              </div>

          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Register
