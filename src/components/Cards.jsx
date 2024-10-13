import React ,{useState,useEffect} from 'react'
import cardimg1 from '../assets/ep1.png'
import cardimg2 from '../assets/ep2.png'
import cardimg3 from '../assets/ep3.png'
import cardimg4 from '../assets/ep4.png'
import cardimg5 from '../assets/ep5.png'
import cardimg6 from '../assets/ep6.png'
import host1 from '../assets/host1.svg'
import host2 from '../assets/host2.svg'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import { Card } from 'react-bootstrap'
import star from '../assets/starrr.png'
import scribble2 from '../assets/scribble2.png'
const Cards = () => {
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
    <div style={{backgroundColor:"#F7EDE8",paddingBottom:"60px"}}>
        <p style={{textAlign:"center",fontSize:"60px",marginTop:"60px",color:"black",fontWeight:"600",paddingTop:"100px"}}>Recent Episodes</p>
        <p style={{textAlign:"center",marginTop:"40px",fontWeight:"500",color:"#4D4D4D"}}>Available on your favorite platform</p>
        <div className='d-flex justify-content-evenly flex-wrap p-3'>
        <div style={{width:"570px",border:"2px solid black",flexWrap:isMobile?"wrap":"nowrap"}} className='bg-light d-flex  justify-content-between mb-4 py-3 rounded epsCard'>
            <div className='d-flex justify-content-between  flex-column' style={{width:"200px"}}>
                <img src={cardimg6} alt=""className=' p-3'/>
                <div className='d-flex justify-content-evenly mt-3'>
                  <button className='btn'style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}}>covid-19</button>
                  <button  className='btn' style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}}>health</button>
                </div> 
            </div>
            <div className='mt-3 px-3'>
                <p style={{color:"#CD4631",fontWeight:"600"}}>Eps. 6</p>
                <p style={{color:"#CD4631",fontWeight:"700",fontSize:"20px",paddingBottom:"10px",borderBottom:"1px solid black"}}>Pandemic becoming Endemic</p>
                <p style={{color:"#4D4D4D"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                <div className='d-flex justify-content-between float-end'style={{ width:"250px"}}>
                <div style={{ width:"100px"}} className='mt-5  fw-bolder text-dark'>Hosted by:</div> 
                 <div style={{ width:"100px",height:"50px",marginTop:"30px"}}><img className='host' src={host1} height={"50px"} alt="" style={{marginLeft:"-35px",position:"absolute"}}/>
                 <img className='host' src={host2} height={"50px"} style={{borderRadius:"50%",position:"relative"}} alt="" /></div>
                </div>
            </div>
        </div>
        <div style={{width:"570px",border:"2px solid black",flexWrap:isMobile?"wrap":"nowrap"}} className='bg-light d-flex  justify-content-between mb-4 py-3 rounded epsCard'>
            <div className='d-flex justify-content-between flex-column' style={{width:"200px"}}>
                <img src={cardimg5} alt=""className='rounded p-3' />
                <div className='d-flex justify-content-evenly mt-3'style={{width:"230px"}}><button className='btn' style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}}>automation</button>
                  <button  className='btn'style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}}>tech</button>
                </div> 
            </div>
            <div className='mt-3 px-3'>
                <p style={{color:"#CD4631",fontWeight:"600"}}>Eps. 5</p>
                <p style={{color:"#CD4631",fontWeight:"700",fontSize:"20px",paddingBottom:"10px",borderBottom:"1px solid black"}}>Pandemic becoming Endemic</p>
                <p style={{color:"#4D4D4D"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                <div className='d-flex justify-content-between float-end'style={{ width:"250px"}}>
                <div style={{ width:"100px"}} className='mt-5  fw-bolder text-dark'>Hosted by:</div> 
                 <div style={{ width:"100px",height:"50px",marginTop:"30px"}}><img className='host' src={host1} height={"50px"} alt="" style={{marginLeft:"-35px",position:"absolute"}}/>
                 <img className='host' src={host2} height={"50px"} style={{borderRadius:"50%",position:"relative"}} alt="" /></div>
                </div>
                
            </div>
        </div>
        <div style={{width:"570px",border:"2px solid black",flexWrap:isMobile?"wrap":"nowrap"}} className='bg-light d-flex justify-content-between   mb-4 py-3 rounded epsCard'>
            <div className='d-flex justify-content-between flex-column' style={{width:"200px"}}>
                <img src={cardimg4} alt=""className='rounded p-3' />
                <div className='d-flex justify-content-evenly mt-3'style={{width:"180px"}}><button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}} className='btn'>women'srights</button>
                </div> 
            </div>
            <div className='mt-3 px-3'>
                <p style={{color:"#CD4631",fontWeight:"600"}}>Eps. 4</p>
                <p style={{color:"#CD4631",fontWeight:"700",fontSize:"20px",paddingBottom:"10px",borderBottom:"1px solid black"}}>Pandemic becoming Endemic</p>
                <p style={{color:"#4D4D4D"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                <div className='d-flex justify-content-between float-end'style={{ width:"250px"}}>
                <div style={{ width:"100px"}} className='mt-5  fw-bolder text-dark'>Hosted by:</div> 
                 <div style={{ width:"100px",height:"50px",marginTop:"30px"}}><img className='host' src={host1} height={"50px"} alt="" style={{marginLeft:"-35px",position:"absolute"}}/>
                 <img className='host' src={host2} height={"50px"} style={{borderRadius:"50%",position:"relative"}} alt="" /></div>
                </div>
                
            </div>
        </div>
        <div style={{width:"570px",border:"2px solid black",flexWrap:isMobile?"wrap":"nowrap"}} className='bg-light d-flex justify-content-between mb-4 py-3 rounded epsCard'>
            <div className='d-flex justify-content-between flex-column' style={{width:"200px"}}>
                <img src={cardimg3} alt=""className='rounded p-3' />
                <div className='d-flex justify-content-evenly mt-3'style={{width:"230px"}}><button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}} className='btn'>self-esteem</button>
                  <button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}}  className='btn'>health</button>
                </div> 
            </div>
            <div className='mt-3 px-3'>
                <p style={{color:"#CD4631",fontWeight:"600"}}>Eps. 3</p>
                <p style={{color:"#CD4631",fontWeight:"700",fontSize:"20px",paddingBottom:"10px",borderBottom:"1px solid black"}}>Pandemic becoming Endemic</p>
                <p style={{color:"#4D4D4D"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                <div className='d-flex justify-content-between float-end'style={{ width:"250px"}}>
                <div style={{ width:"100px"}} className='mt-5  fw-bolder text-dark'>Hosted by:</div> 
                 <div style={{ width:"100px",height:"50px",marginTop:"30px"}}><img className='host' src={host1} height={"50px"} alt="" style={{marginLeft:"-35px",position:"absolute"}}/>
                 <img className='host' src={host2} height={"50px"} style={{borderRadius:"50%",position:"relative"}} alt="" /></div>
                </div>
                
            </div>
        </div>
        <div style={{width:"570px",border:"2px solid black",flexWrap:isMobile?"wrap":"nowrap"}} className='bg-light d-flex justify-content-between mb-4 py-3 rounded epsCard'>
            <div className='d-flex justify-content-between flex-column' style={{width:"200px"}}>
                <img src={cardimg2} alt=""className='rounded p-3' />
                <div className='d-flex justify-content-evenly mt-3' style={{width:"230px"}}><button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}} className='btn'>social class</button>
                  <button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}} className='btn'>wealth</button>
                </div> 
            </div>
            <div className='mt-3 px-3 '>
                <p style={{color:"#CD4631",fontWeight:"600"}}>Eps. 2</p>
                <p style={{color:"#CD4631",fontWeight:"700",fontSize:"20px",paddingBottom:"10px",borderBottom:"1px solid black"}}>Pandemic becoming Endemic</p>
                <p style={{color:"#4D4D4D"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                <div className='d-flex justify-content-between float-end'style={{ width:"250px"}}>
                <div style={{ width:"100px"}} className='mt-5  fw-bolder text-dark'>Hosted by:</div> 
                 <div style={{ width:"100px",height:"50px",marginTop:"30px"}}><img className='host' src={host1} height={"50px"} alt="" style={{marginLeft:"-35px",position:"absolute"}}/>
                 <img className='host' src={host2} height={"50px"} style={{borderRadius:"50%",position:"relative"}} alt="" /></div>
                </div>
                
            </div>
        </div>
        <div style={{width:"570px",border:"2px solid black",flexWrap:isMobile?"wrap":"nowrap"}} className='bg-light d-flex  justify-content-between mb-4 py-3 rounded epsCard'>
            <div className='d-flex justify-content-between flex-column' style={{width:"200px"}}>
                <img src={cardimg1} alt=""className='rounded p-3' />
                <div className='d-flex justify-content-evenly mt-3' style={{width:"270px"}}><button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}} className='btn'>mind-behaviour</button>
                  <button style={{border:"2px solid #4D4D4D", color:"#4D4D4D"}} className='btn'>health</button>
                </div> 
            </div>
            <div className='mt-3 px-3 '>
                <p style={{color:"#CD4631",fontWeight:"600"}}>Eps. 1</p>
                <p style={{color:"#CD4631",fontWeight:"700",fontSize:"20px",paddingBottom:"10px",borderBottom:"1px solid black"}}>Pandemic becoming Endemic</p>
                <p style={{color:"#4D4D4D"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
                <div className='d-flex justify-content-between float-end'style={{ width:"250px"}}>
                <div style={{ width:"100px"}} className='mt-5  fw-bolder text-dark'>Hosted by:</div> 
                 <div style={{ width:"100px",height:"50px",marginTop:"30px"}}><img className='host' src={host1} height={"50px"} alt="" style={{marginLeft:"-35px",position:"absolute"}}/>
                 <img className='host' src={host2} height={"50px"} style={{borderRadius:"50%",position:"relative"}} alt="" /></div>
                </div>
                
            </div>
        </div>

        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <a href='' className='buttons' style={{fontFamily:"Montserrat Alternates,sans-serif"}}>BROWSE ALL EPISODES</a>
        </div>
    </div>

    <div style={{paddingBottom:"60px"}}>
        <p style={{textAlign:"center",fontSize:"60px",marginTop:"60px",color:"black",fontWeight:"600",paddingTop:"100px"}}>Become Our sponser</p>
        <p style={{textAlign:"center",marginTop:"40px",fontWeight:"500",color:"#4D4D4D"}}>Get exclusive episodes, merch and more</p>
        <div className='d-flex flex-wrap justify-content-evenly flex-wrap p-3'>
        <div style={{width:"350px",border:"2px solid black"}} className='d-flex  justify-content-between mb-4 py-3 rounded cardBg'>
            <div className='d-flex justify-content-between flex-column px-5 text-dark' >
                <p style={{fontSize:"40px",color:"black",fontWeight:"600"}}>Member</p>
                <p>Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                <div className="d-flex justify-content-between align-items-center mt-3" style={{width:isMobile?"150px":"250px"}}>
                   <a href='' style={{fontFamily:"Montserrat Alternates,sans-serif"}} className="buttons">SUBSCRIBE</a>
                   <div>
                    <p style={{color:"#CD4631",fontWeight:"700",fontSize:"25px"}}>$9.99</p>
                    <p style={{fontWeight:"700",marginTop:"-20px"}}>/month</p>
                   </div>
               </div>
            </div>
            
        </div>
        <div style={{width:"350px",border:"2px solid black"}} className='d-flex justify-content-between mb-4 py-3 rounded cardBg'>
            <div className='d-flex justify-content-between flex-column px-5 text-dark' >
                <p style={{fontSize:"40px",color:"black",fontWeight:"600"}}>Family</p>
                <p>Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                <div className="d-flex justify-content-between align-items-center mt-3" style={{width:isMobile?"150px":"250px"}}>
                   <a hrefstyle={{fontFamily:"Montserrat Alternates,sans-serif"}}  className="buttons">SUBSCRIBE</a>
                   <div>
                    <p style={{color:"#CD4631",fontWeight:"700",fontSize:"25px"}}>$14.99</p>
                    <p style={{fontWeight:"700",marginTop:"-20px"}}>/month</p>
                   </div>
               </div>
            </div>
            
        </div>
        <div style={{width:"350px",border:"2px solid black"}} className='d-flex justify-content-between mb-4 py-3 rounded cardBg'>
            <div className='d-flex justify-content-between flex-column px-5 text-dark' >
                <p style={{fontSize:"40px",color:"black",fontWeight:"600"}}>Official</p>
                <p>Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                <div className="d-flex justify-content-between align-items-center mt-3" style={{width:isMobile?"150px":"250px"}}>
                   <a href='' style={{fontFamily:"Montserrat Alternates,sans-serif"}}  className="buttons">SUBSCRIBE</a>
                   <div>
                    <p style={{color:"#CD4631",fontWeight:"700",fontSize:"25px"}}>$29.99</p>
                    <p style={{fontWeight:"700",marginTop:"-20px"}}>/month</p>
                   </div>
               </div>
            </div>
            
        </div>
        <div style={{width:"350px",border:"2px solid black"}} className='d-flex justify-content-between mb-4 py-3 rounded cardBg'>
            <div className='d-flex justify-content-between flex-column px-2 text-dark' >
            <p className='mt-5 ms-3' style={{color:"#4D4D4D",fontWeight:"700"}}>What's included:</p>
            <ul className='mb-5 text-dark fw-bold'>
                <li>Exclusive Content</li>
                <li>5% Discount on Merch</li>
                <li>Join the Community</li>
                <li>Livestreaming Access</li>
            </ul>        
            </div>             
        </div>
        <div style={{width:"350px",border:"2px solid black"}} className='d-flex justify-content-between mb-4 py-3 rounded cardBg'>
        <div className='d-flex justify-content-between flex-column px-2 text-dark'>
            <p className='mt-5 ms-3 ' style={{color:"#4D4D4D",fontWeight:"700"}}>What's included:</p>
            <ul className='mb-5 text-dark fw-bold'>
                <li>Everything in Tier 1</li>
                <li>Free tickets to Events</li>
                <li>Limited Edition Merch</li>
                <li>Promote your Product</li>
                <li>Request Topic</li>
            </ul>       
            </div>  
            
        </div>
        <div style={{width:"350px",border:"2px solid black"}} className=' d-flex justify-content-between mb-4 py-3 rounded cardBg'>
        <div className='d-flex justify-content-between flex-column px-2 text-dark' >
            <p className='mt-5 ms-3' style={{color:"#4D4D4D",fontWeight:"700"}}>What's included:</p>
            <ul className='mb-5 text-dark fw-bold'>
                <li>Everything in Tier 2</li>
                <li>Exclusive Badge on Livestreaming</li>
                <li>Become an Official Sponsor</li>
                <li>Early Access to All Episodes</li>
                <li>Free Stikers and Merch</li>
            </ul>       
            </div>  
            
        </div>

        </div>
      
    </div>
    <div style={{paddingBottom:"10px"}}>
        <p style={{textAlign:"center",fontSize:"60px",marginTop:"30px",color:"black",fontWeight:"600",paddingTop:"100px"}}>Article and News</p>
        <p style={{textAlign:"center",marginTop:"40px",fontWeight:"500",color:"#4D4D4D"}}>News,tips,tricks and more</p>
        <img className='ms-3 doodleImg' height={isMobile?'100px':'150px'} src={star} alt="" style={{position:"absolute",marginTop:isMobile?"-25px":"-35px"}} />
        <div className="d-flex flex-wrap justify-content-evenly mt-5">
            <Card className='cardShadow' style={{ width: '30rem',border:"2px solid black"}}>
        <Card.Img variant="top" src={blog2} className='p-3' />
        <Card.Body>
        <Card.Subtitle className="mb-2 text-dark">PODCAST</Card.Subtitle>
        <Card.Title style={{fontSize:"30px",color:"#CD4631",fontWeight:"700"}}>Setup your own podcast</Card.Title>
        <Card.Text className='py-3'  style={{borderBottom:"1px solid black"}}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...
        </Card.Text>
        <div className='d-flex justify-content-between mt-5'>
        <div>
        <Card.Link href="#" style={{border:"2px solid black",textDecoration:"none",padding:isMobile?"2px":"5px",borderRadius:"5px",color:"black",fontSize:isMobile?"15px":"20px"}}>business</Card.Link>
        <Card.Link href="#"style={{border:"2px solid black",textDecoration:"none",padding:isMobile?"2px":"5px",borderRadius:"5px",color:"black",fontSize:isMobile?"15px":"20px"}}>startup</Card.Link>
        </div>
        <div>sep 14,2024</div>
        </div>
      </Card.Body>
            </Card>
            <Card className='cardShadow' style={{ width: '30rem',border:"2px solid black" }}>
        <Card.Img variant="top" src={blog1} className='p-3' />
        <Card.Body>
        <Card.Subtitle className="mb-2 text-dark">TIPS & TRICK</Card.Subtitle>
        <Card.Title style={{fontSize:"30px",color:"black",fontWeight:"700"}}>Doodle artwork 101</Card.Title>
        <Card.Text className='py-3' style={{borderBottom:"1px solid black"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...
        </Card.Text>
        <div className='d-flex flex-wrap justify-content-between mt-5'>
        <div>
        <Card.Link href="#" style={{border:"2px solid black",textDecoration:"none",padding:isMobile?"2px":"5px",borderRadius:"5px",color:"black",fontSize:isMobile?"15px":"20px"}}>art</Card.Link>
        <Card.Link href="#"style={{border:"2px solid black",textDecoration:"none",padding:isMobile?"2px":"5px",borderRadius:"5px",color:"black",fontSize:isMobile?"15px":"20px"}}>creative</Card.Link>
        <Card.Link href="#"style={{border:"2px solid black",textDecoration:"none",padding:isMobile?"2px":"5px",borderRadius:"5px",color:"black",fontSize:isMobile?"15px":"20px"}}>tips and tricks</Card.Link>
        </div>
        <div>sep 12,2024</div>
        </div>
      </Card.Body>
            </Card>
    
       </div>
       <img className='doodleImg' src={scribble2} alt="" height={isMobile?'100px':'170px'} style={{float:"right",marginTop:isMobile?"-20px":"-80px",marginRight:isMobile?"0px":"10px"}} />
       <div className="d-flex justify-content-center align-items-center" style={{marginTop:"90px"}}>
          <a href=''  className="buttons" style={{fontFamily:"Montserrat Alternates,sans-serif"}}>BROWSE ALL</a>
        </div>
    </div>
    </>
  )
}

export default Cards