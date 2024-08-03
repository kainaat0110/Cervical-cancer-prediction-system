import React, { useState } from 'react';
import Header from '../Layout/Header';
import '../Css/awareness.css';
import Card from '../Components/Card';
import Articlebox from '../Components/ArticleBox'

export default function Awareness() {
  const [selectedContent, setSelectedContent] = useState('null');
  const [showArticle, setShowArticle] = useState(false);


  // Function to handle content selection
  const handleContentChange = (contentbox) => {
    setSelectedContent(contentbox);
      setShowArticle(true);
  };
  return (
    <>
      <div className='bgawareness'>
        <Header />
        <div className='carddiv'>
        <Card onClick={() => handleContentChange("   Human Papillomavirus (HPV) Infection: HPV is a common sexually transmitted infection and a primary risk factor for cervical cancer. Not all HPV infections lead to cancer, but persistent infection with high-risk HPV strains can cause changes in cervical cells, leading to cancer over time. Lack of Regular Screening: Regular cervical cancer screening such as Pap smears and HPV tests, can detect abnormal changes in cervical cells early, allowing for timely intervention. Failure to undergo routine screening increases the risk of undiagnosed and untreated cervical cancer. Smoking: Tobacco use including smoking and exposure to secondhand smoke increases the risk of cervical cancer. Chemicals in tobacco can damage cervical cells and weaken the immune system's ability to fight HPV infections. Weakened Immune System: Conditions or treatments that weaken the immune system, such as HIV/AIDS, organ transplantation, and prolonged use of corticosteroids, can increase susceptibility to HPV infection and cervical cancer.")} title = 'Risk Factors' content = 'Several factors increase the risk of developing cervical cancer:' time = '4 mins read'  />
        <Card onClick={() => handleContentChange("  Abnormal vaginal bleeding, such as bleeding between periods, after sexual intercourse, or after menopause. Unusual vaginal discharge that may be watery, bloody, or have a foul odor. Pelvic pain or pain during sexual intercourse. Persistent back leg or pelvic pain.") } title = 'Symptoms' content = 'Cervical cancer may not cause noticeable symptoms in its early stages.' time = '1 mins read' />
        <Card onClick={() => handleContentChange("  Vaccination: HPV vaccines are highly effective in preventing infection with the most common high-risk HPV strains responsible for cervical cancer. Vaccination is recommended for preteen girls and boys before they become sexually active. Regular Screening: Routine cervical cancer screening can detect precancerous changes in cervical cells early, allowing for prompt treatment and preventing the progression to cancer. Pap smears and HPV tests are essential components of screening programs. Safe Sexual Practices: Practicing safe sex, including using condoms and limiting the number of sexual partners, can reduce the risk of HPV infection. Smoking Cessation: Quitting smoking reduces the risk of cervical cancer and improves overall health. Support resources and smoking cessation programs are available to assist individuals in quitting smoking.")} title = 'Prevention' content = 'Prevention plays a crucial role in reducing the incidence of cervical cancer:' time = '3 mins read' />
        <Card onClick={() => handleContentChange("  Surgery to remove cancerous tissue, such as a hysterectomy or removal of pelvic lymph nodes. Radiation therapy to target and destroy cancer cells. Chemotherapy to kill cancer cells or stop their growth. Targeted therapy and immunotherapy to target specific cancer cells or boost the immune system's ability to fight cancer.")} title = 'Treatment' content = 'Treatment options for cervical cancer depend on the stage of the disease ' time = '1 mins read' />
        </div>
        {
      showArticle ? (
      <div className='article-box'>
        <Articlebox article={selectedContent} /> 
      </div>
      ): (null)
    }

      </div>
    </>
  );
}
