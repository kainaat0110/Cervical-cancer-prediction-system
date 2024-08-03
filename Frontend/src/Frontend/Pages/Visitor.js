import React from 'react'
import BG from '../Images/Bg.jpeg'
import '../Css/visitor.css'
import Layout from '../Layout/Layout'
import Textbox from '../Components/Textbox'
import Description from '../Components/Description'
import Desc1 from '../Images/awareness.png'
import Desc2 from '../Images/test.png'
import Desc3 from '../Images/guidance.png'
import Box from '../Components/Box'
import stages from '../Images/stages.jpg'
import Footer from '../Layout/Footer'
export default function Visitor() {
  return (
    <>
    <div className='visitor'>
        <Layout />
        <Textbox title = 'Your Health Matters' para = 'Your health is our top priority. Whether you are seeking information about cervical cancer, looking to assess your risk, or searching for support and resources, CERVX  is here to assist you every step of the way.' />

        <img className='img' src={BG} />
        </div>
        <div className='visitorbg'>
        <h1 className='tname' style={{color: '#F0777C'}}>Features</h1>
        <br></br><br></br>
        <div className='description'>
        <Description logo= {Desc1} title = {'Awareness'} desc = {'Knowlegde is power. Educate yourself and others about cervical cancer prevention and screening.'}/>
        <Description logo= {Desc2} title = {'Test'} desc = {'Taking the test today could save your tomorrow. Get screened for cervical cancer.'}/>
        <Description logo= {Desc3} title = {'Guidance'} desc = {'Finding the way through cervical cancer can be tough, but with our guidance, you can navigate this journey.'}/>
        </div>
        <br></br><br></br><br></br>        <br></br><br></br>

        <h1 className='tname' style={{color: '#F0777C' }}>Stages</h1>
        <br></br><br></br>
        <div className='stage'>
          <img src={stages} width={1000} className='stages' />
        </div>
        <br></br><br></br>        <br></br><br></br>        <br></br><br></br>
        <h1 className='tname' style={{color: '#F0777C'}}>Testimonial</h1>
        <br></br><br></br>
        <div className='dr'>
        
          <Box para = {"As medical professionals, we cannot stress enough the importance of regular screenings for cervical cancer. Early detection through these screenings can make a profound difference in treatment outcomes and overall prognosis. Let's continue to advocate for cervical health awareness and empower individuals to take control of their well-being."}/>
          <Box para = {"Early screenings for cervical cancer are crucial for saving lives. With early detection and advanced treatments, we're making significant strides against this disease. Stay proactive, stay informed and take required steps towards your cervical health. Together, we can overcome this challenge and strive for a future free from the burden of cervical cancer."}/>
        </div>
        <br></br><br></br><br></br>        <br></br><br></br>
      <Footer />
      </div>
        </>
  )
}
