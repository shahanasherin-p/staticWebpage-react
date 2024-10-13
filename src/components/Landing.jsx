import React, { useEffect, useState } from 'react'
import { Button,Container,Nav,Navbar,NavDropdown,Col,Row } from 'react-bootstrap'
import navLogo from '../assets/logo.png'
import landShape from'../assets/Hero Shape Swirl.svg'
import landStar from '../assets/Group 48095792.png'
import spotifyImg from '../assets/Spotify.png'
import googleImg from '../assets/Google Podcast.png'
import youtubeImg from '../assets/Youtube.png'
import illustraion1 from '../assets/Illustration 01.svg'
import illustraion2 from '../assets/ideas.png'
import avatar from '../assets/users.png'
import platform from'../assets/platform.png'
import star from '../assets/Star 4.png'
import vector from '../assets/Vector 4.png'
import './style.css'
const Landing = () => {
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
    <Navbar expand="lg"  style={{backgroundColor:"#F7EDE8",position:"fixed",width:"100vw",zIndex:"1"}}>
      <Container fluid>
        <Navbar.Brand className='ms-5' href="#"><img  height={'40px'} src={navLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fw-bolder">Episode</Nav.Link>
            <Nav.Link href="#action2" className="fw-bolder">About</Nav.Link>
            <NavDropdown className="fw-bolder" title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <div  className="d-flex flex-wrap  justify-content-evenly">
           <Button  variant="outline-dark" className="fw-bolder landingButton me-5">RECENT EPISODES</Button>
           <Button variant="outline-dark" className="fw-bolder mt-1 me-5">SUBSCRIBE</Button>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <img className='position-absolute doodleImg dimg1' src={landShape} alt="" style={{ height: isMobile ? '200px' : '500px' }}/>
        <div className='d-flex flex-column align-items-center justify-content-center bgStyle' style={{minHeight:"100vh",backgroundColor:"#F7EDE8"}}>
          <span style={{fontSize:isMobile?"30px":"80px",fontWeight:"bolder",color:"black"}}>Your Daily <br /> <h1 style={{fontSize:isMobile?"30px":"75px",fontWeight:"bolder",color:"#CD4631",textAlign:"center"}}>Podcast</h1></span>
        <p className='text-center text-dark' style={{marginTop:isMobile?"20px":"0px"}}>We cover all kinds of categories and <br />
        a weekly special guest.</p>
        <a href='#' className="buttons" style={{marginTop:isMobile? "50px":"0px"}} >SUBSCRIBE</a>
        </div>  
        <img className='doodleImg' style={{float:"right",marginTop:"-400px",height: isMobile ? '100px' : '200px'}} src={landStar} alt="" />
    </div>
    <div style={{backgroundColor:"#F7EDE8",paddingBottom:"90px"}}>
     <Container style={{
      borderBottom: '2px solid black',
      borderTop: '2px solid black',
      padding:"50px",
     }}>
      <Row>
        <Col><h3 style={{fontWeight:"300",color:"black",fontFamily:"Montserrat Alternates, sans-serif"}}>Supported By:</h3></Col>
        <Col><img height={'25px'} src={spotifyImg} alt="" style={{marginTop:isMobile?"16px":"0px"}} /></Col>
        <Col><img height={'25px'} src={googleImg} alt="" style={{marginTop:isMobile?"16px":"0px"}}/></Col>
        <Col><img height={'20px'} src={youtubeImg} alt="" style={{marginTop:isMobile?"16px":"0px"}}/></Col>

      </Row>
    </Container>
    </div>
    <div>
      <h1 style={{fontFamily:"Montserrat Alternates,sans-serif",
        color:"black",
        textAlign:"center",
        fontWeight:"700",
        marginTop:"100px"
      }} >Talk. Listen. Get inspired <br />
      by every minute of it.</h1>
      <div className='d-flex flex-wrap justify-content-evenly align-items-center w-100 mt-5' id='aa'>
        <div style={{width:"460px",height:"325px",color:"black",fontWeight:"500"}}>
          <img className='landing2Img' height={"250px"} src={illustraion1} alt="" style={{marginLeft:isMobile?"0px":"100px"}} />
          <p style={{paddingTop:"50px",fontFamily:"Montserrat Alternates,sans-serif",textAlign:isMobile?"center":"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit <p className='text-center'>Curabitur ac ultrices odio.</p>  </p>
        </div>
        <div  style={{width:"460px",height:"225px",marginTop:"",color:"black",fontWeight:"500"}}>
        <img className='landing2Img' height={isMobile?"150px":"250px"} src={illustraion2} alt="" style={{marginLeft:isMobile?"50px":"150px",paddingBottom:isMobile?"0px":"70px",marginTop:isMobile?"70px":"0px"}} />
        <p style={{fontFamily:"Montserrat Alternates,sans-serif",textAlign:isMobile?"center":"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit <p className='text-center' >Curabitur ac ultrices odio.</p>  </p>
        </div>
      </div>
     </div>
     <div className="container" style={{backgroundColor:"#F7EDE8",
      // height:"500px",
      marginTop:"180px",
      paddingBottom:"160px"}}>
        <img className='float-end doodleImg' src={star} alt="" style={{marginRight:isMobile?"-12px":"-50px",marginTop:isMobile?"-50px":"-70px",height:isMobile?"100px":"0px"}} />
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"250px"}}>
        <h1 style={{fontSize:"150px",color:"#CD4631",fontWeight:"700",paddingTop:isMobile?"150px":"150px"}}>“</h1>
        <h1 style={{fontFamily:"Montserrat Alternates,sans-serif",color:"black",fontWeight:"700",fontSize:isMobile?"20px":"50px"}}>One of the best daily podcasts that
        <h1 style={{fontFamily:"Montserrat Alternates,sans-serif",color:"black",fontWeight:"700",fontSize:isMobile?"20px":"50px",textAlign:"center"}}> covers every topic on Spotify.</h1></h1>
        <div className="d-flex mt-5">
          <div><img src={avatar} alt="" height={isMobile?"40px":'38px'} style={{marginLeft:isMobile?"90px":"0px"}} /></div>
          <div className='mt-2'><img src={platform} alt="" style={{height:isMobile?"20px":"20px"}} /></div>
        </div>
        </div>
        <img className='doodleImg' src={vector} alt="" style={{marginLeft:"-80px",height:isMobile?'100px':"0px"}} />
     </div>
    </>
    
  )
}

export default Landing