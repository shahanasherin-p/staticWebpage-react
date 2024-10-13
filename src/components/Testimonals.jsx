import React ,{ useEffect, useState }  from 'react'
import user1 from '../assets/users.png'
import user2 from '../assets/users2.png'
import user3 from '../assets/users3.png'
import platform1 from '../assets/platform1.png'
import platform2 from '../assets/platform2.png'
import platform3 from '../assets/Youtube.png'
import sparkle from '../assets/Sparkle.png'
import scribble1 from '../assets/Scribble1.png'
import { Container,Row,Col } from 'react-bootstrap'
import featureimg1 from '../assets/Scribblee.png'
import featureimg2 from '../assets/Shining starss.png'
import featureimg3 from '../assets/Face 1.png'
import featureimg4 from '../assets/Face 5.png'
import featureimg5 from '../assets/Fire.png'
import featureimg6 from '../assets/Starr.png'


const Testimonals = () => {
  const[isMobile,setIsMobile]=useState(window.innerWidth<768)
   useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth<768)
    }
    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener('resize', handleResize);
   },[])
  return (
    <>
    <div className='mt-5 py-5' style={{backgroundColor:"#EDF3F7"}}>
        <p style={{textAlign:"center",fontSize:isMobile?"35px":"60px",marginTop:isMobile?"100px":"150px",color:"black",fontWeight:"600"}}>What our listeners say</p>
        <img className='doodleImg' style={{marginTop:isMobile?"-370px":"-260px",marginLeft:"200px"}} src={sparkle} alt="" />
        <p style={{textAlign:"center",fontWeight:"500",color:"#4D4D4D"}}>Their experience throughout every platform</p>
        <div className='d-flex justify-content-evenly mt-5 flex-wrap'>
        <div className='bg-light text-dark px-3 py-2' style={{fontWeight:"500",borderRadius:"10px",borderColor:"gainsboro",width:"360px"}}>
        <h1 style={{fontSize:"80px",color:"#CD4631",fontWeight:"700",height:"60px"}}>“</h1>
        <p>Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
        <img height={'30px'} src={user2} alt="" /> <span><img src={platform1} alt="" height={'15px'} /></span>
        </div>
        <div className='bg-light text-dark px-3 py-2' style={{fontWeight:"500",borderRadius:"10px",borderColor:"gainsboro",width:"360px"}}>
        <h1 style={{fontSize:"80px",color:"#CD4631",fontWeight:"700",height:"60px"}}>“</h1>
        <p>Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
        <img height={'30px'} src={user3} alt="" /> <span><img src={platform2} alt="" height={'15px'} /></span>
        </div>
        <div className='bg-light text-dark px-3 py-2' style={{fontWeight:"500",borderRadius:"10px",borderColor:"gainsboro",width:"360px"}}>
        <h1 style={{fontSize:"80px",color:"#CD4631",fontWeight:"700",height:"60px"}}>“</h1>
        <p>Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
        <img height={'30px'} src={user1} alt="" /> <span><img src={platform3} alt="" height={'13px'}/></span>
        </div>
        </div>
    </div>
    <div className='py-5'>
      <p style={{textAlign:"center",fontSize:isMobile?"40px":"60px",marginTop:"150px",color:"black",fontWeight:"600"}}>Membership benefits</p>
      <img className='doodleImg' style={{float:"right",marginTop:"-280px",marginRight:isMobile?"-0px":"150px",height:isMobile?"200px":""}}  src={scribble1} alt="" />
      <p style={{textAlign:"center",marginTop:"40px",fontWeight:"500",color:"#4D4D4D"}}>Become our sponsor and get all benefits</p>
      <Container className='mt-5'>
      <Row>
        <Col className=' p-5'>
          <div className='text-center' >
          <img src={featureimg1} alt="" className='py-3' />
          <p className='text-dark text-center fw-bolder'>Topic by request</p>
          <p className='text-dark text-center fw-medium'>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
         </div>
       </Col>
        <Col className=' p-5'>
        <div className='text-center' >
          <img src={featureimg2} alt="" className='py-3' />
          <p className='text-dark text-center fw-bolder'>Exclusive Content</p>
          <p className='text-dark text-center fw-medium'>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
         </div>
        </Col>
        <Col className=' p-5'>
        <div className='text-center' >
          <img src={featureimg3} alt="" className='py-3' />
          <p className='text-dark text-center fw-bolder'>Join the Community</p>
          <p className='text-dark text-center fw-medium'>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
         </div>
        </Col>
      </Row>
      <Row>
        <Col className=' p-5 ' style={{gap:"5px"}}>
        <div className='text-center' >
          <img src={featureimg4} alt="" className='py-3' />
          <p className='text-dark text-center fw-bolder'>Livestreaming Access</p>
          <p className='text-dark text-center fw-medium'>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
         </div>
        </Col>
        <Col className=' p-5'>
        <div className='text-center' >
          <img src={featureimg5} alt="" className='py-3'  />
          <p className='text-dark text-center fw-bolder'>Exclusive Episodes & Merch</p>
          <p className='text-dark text-center fw-medium'>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
         </div>
        </Col>
        <Col className=' p-5'>
        <div className='text-center' >
          <img src={featureimg6} alt="" className='py-3' />
          <p className='text-dark text-center fw-bolder'>And much more!</p>
          <p className='text-dark text-center fw-medium'>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
         </div>
        </Col>
      </Row>
    </Container>
      <div className="d-flex justify-content-center align-items-center mt-3">
      <a href='' style={{fontFamily:"Montserrat Alternates,sans-serif"}}  className="buttons">SEE PRICING</a>
      </div>
    
    </div>
    </>
  )
}

export default Testimonals