import React from 'react'
import logo from '../assets/logo.png'
import google from '../assets/Google Podcast.png'
import spotify from '../assets/Spotify.png'
import youtube from '../assets/Youtube.png'
import app from '../assets/available.png'
const Footer = () => {
  return (
    <>
    <footer className='d-flex flex-wrap justify-content-around text-dark mt-5 container'>
        <div style={{width:"230px"}}>
            <img height={'60px'} src={logo} alt="" /> <span>&copy; 2024</span>
            <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='d-flex justify-content-between'>
            <i class="fa-brands fa-twitter fa-lg"></i>
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-tiktok fa-lg"></i>
           </div>
        </div>
        <div>
            <ul style={{listStyle:"none"}}>
                <li className='py-3'>About</li>
                <li className='py-3'>Testimonals</li>
                <li className='py-3'>Features</li>
            </ul>
        </div>
        <div>
            <ul style={{listStyle:"none"}}>
                <li className='py-3'>Episodes</li>
                <li className='py-3'>Pricing</li>
                <li className='py-3'>Blog</li>
            </ul>
        </div>
        <div style={{width:"350px"}}>
            <p>Listen to episodes on your fav platform:</p>
            <div className='d-flex justify-content-between py-3'>
            <img src={google} alt="" height={'20px'}/>
            <img src={spotify} alt="" height={'20px'}/>
            <img src={youtube} alt="" height={'15px'}/>
            </div>
            <p className='py-3'>App available on:</p>
            <img src={app} alt="" height={'30px'} className='ms-5' />
        </div>
    </footer>
    <div className='d-flex flex-wrap justify-content-between mt-5 container' style={{borderTop:"2px solid black"}}>
            <p className='py-3'>&copy;2024. All Rights Reserved. Pod of Cast</p>
            <p className='py-3'>Terms . Policy</p>
        </div>
    </>
  )
}

export default Footer