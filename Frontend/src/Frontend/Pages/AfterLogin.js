import React from 'react'
import Header from '../Layout/Header'
import BG from '../Images/afterloginbg.jpg'
import BG2 from '../Images/afterlogin2.jpg'
import BG3 from '../Images/afterloginbg3.jpg'
import Textbox from '../Components/Textbox'
import '../Css/afterlogin.css'
import Button from '../Components/Button'
import Description2 from '../Components/Description2'
import Desc2 from '../Images/test.png'
import Desc1 from '../Images/awareness.png'
import Desc3 from '../Images/guidance.png'
import Content from '../Components/Content'
import Cont1 from '../Images/content1.jpg'
import Cont2 from '../Images/content2.jpg'
import Cont3 from '../Images/content3.jpg'
import ContentL from '../Components/ContentL'


export default function () {
  const awareness = () => {
    window.location.href = '/awareness';
  };
  const assesment = () => {
    window.location.href = '/questionnaire';
  };
  return (
    <>
    <img src={BG} style={{ position: 'absolute' , opacity:0.3 , width:'100%' }} />
     <Header />
      <div className='textbox2'>
      <Textbox title = 'CERVX' para = 'Welcome to our cervical cancer prediction platform! We provide tailored risk assessments for cervical cancer. Our mission is to empower individuals with proactive healthcare management through early detection tools, ensuring you stay ahead in safeguarding your well-being. Join us in the fight against cervical cancer and take control of your health journey today!' />
        <div className='butns'>
          <Button click = {awareness} btn = 'Awareness'/>
          <Button click = {assesment} btn = 'Assesment'/>
          <Button click = 'guidance' btn =  'Guidance'/>
        </div>
        <div className='decbox'>
        <p className='para4'>Choose us because we're here to keep you ahead of cervical cancer. Our assesment test predicts risks early, giving you a head start in protecting your health. After assesment we are here to provide guidance so you can move ahead with a plan.Trust us to be your partner in cervical cancer prevention and early detection. Stay proactive, stay informed, and let's beat cervical cancer together!</p>
        <h1 className='heading'>Why Choose Us</h1>
        
        < div className='descbox2'>
        <Description2 logo={Desc1} title = {'Awareness'} desc={'"Cervical cancer awareness is crucial for early detection and prevention."'} />
        <Description2 logo={Desc2} title = {'Assesment'} desc={'"It involves screening tests to detect abnormalities early."'}/>
        <Description2 logo={Desc3} title = {'Guidance'} desc={'"It involves information on prevention, screening, and treatment options."'}/>
        </div>
        </div>
        <div className='contentdiv'>
          <div className='contentdiv1'><Content img = {Cont1} para={"CERVICAL CANCER AWARENESS initiatives play a pivotal role in advocating for women's health globally. Through education, screening programs, and vaccination campaigns, these efforts aim to reduce the incidence and mortality rates associated with this preventable disease. Additionally, raising awareness about the risk factors and symptoms of cervical cancer encourages early detection and timely medical intervention, ultimately saving lives."}/></div>
          <div className='contentdiv2'><ContentL img = {Cont2} para={"CERVICAL CANCER ASSESMENT involves various tests aimed at detecting abnormalities in the cervix, allowing for early intervention and treatment. Ultimately, early detection through these assessments significantly increases the chances of successful treatment and improves overall outcomes for individuals at risk of cervical cancer. Regular screening and testing are essential components of women's healthcare, promoting early intervention and ultimately saving lives."}/></div>
          <div className='contentdiv3'><Content img = {Cont3}  para = {"CERVICAL CANCER GUIDANCE encompasses a range of recommendations aimed at reducing the incidence and impact of this disease. Moreover, guidance encourages lifestyle modifications such as smoking cessation, as tobacco use is associated with an increased risk of cervical cancer. Education about safe sexual practices and the importance of maintaining overall health and wellness also form essential components of cervical cancer guidance."}/></div>
        </div>
      </div>
      <img src={BG2} style={{ position: 'relative' ,'z-index': '1',bottom:'1627px', opacity:0.3 , width:'100%' }} />
      <img src={BG3} style={{ position: 'relative' ,'z-index': '1',bottom:'1630px', opacity:0.3 , width:'100%' }} />

    </>
  )
}
