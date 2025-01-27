import React from 'react'
import './Account.scss'
import Input from "../utils/Input/Input.jsx"
import Button from "../utils/Button/Button.jsx"

function Account() {
    return (
        <div className='MyAccount'>
            <div className='div1'>
                <h1>Home / <p>My Account</p></h1>
                <h2>Welcome! Md Rimel</h2>
            </div>

            <div className='a'>
                <div className='div2'>
                    <h2>Manage My Account</h2>
                    <ul>
                        <li>My Profile</li>
                        <li>Address Book</li>
                        <li>My Payment Options</li>
                    </ul>
                    <h2>My Orders</h2>
                    <ul>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                    <h2>My WishList</h2>
                </div>


                <div className='div3'>
                    <h2>Edit Your Profile</h2>

                    <div className='div4'>
                        <div>
                            <p>First Name</p>
                            <Input  type='text' placeholder='MD' />
                        </div>
                        <div>
                            <p>Last Name</p>
                            <Input type='text' placeholder='Rimel' />
                        </div>
                    </div>

                    <div className='div5'>
                        <div>
                            <p>Email</p>
                            <Input type='text' placeholder='rimel1111@gmail.com' />
                        </div>
                        <div>
                            <p>Address</p>
                            <Input type='text' placeholder='Kingston, 5236, United State' />
                        </div>
                    </div>

                    <div className='div6'>
                        <p>Password Changes</p>
                        <input type="text" placeholder='Current Passwod' />
                        <input type="text" placeholder='New Passwod' />
                        <input type="text" placeholder='Confirm New Passwod' />
                    </div>

                    <div className='div7'>
                        <p>Cancel
                        <Button/>
                        </p>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Account
