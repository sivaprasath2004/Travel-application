import React from 'react'
import asset from './data'
import './About.css'
const About = () => {
  return (
     <div style={{paddingTop:60,width:'100%',height:'100%'}} id='About_page' >
      <h1 style={{textAlign:'center',padding:20}}>About Us</h1>
<div id='parent_About_page' style={{padding:50}}>
<div id='first_tag'>
  <h1 style={{textAlign:'center'}}>Get unlimited Experience</h1>
  <p style={{textAlign:'left',padding:20,fontSize:20}}>Welcome to our innovative travel application, where we aim to revolutionize the way you experience travel. Our platform is designed with the modern traveler in mind, offering a seamless and personalized journey from start to finish. Whether you're a seasoned globetrotter or embarking on your very first adventure, our app is here to enhance every aspect of your travel experience.</p>
</div>
<div id='second_tag'>
<img src={asset.cars[3].url} style={{height:'auto',width:400}}  alt={asset.cars[3].alt}/>
</div>
</div>
<div id='parent_About_page'>
<div id='first_tag'>
<img src={asset.images[2].src} style={{height:'auto',width:400}}  alt='Bus'/>
</div>
<div id='second_tag'>
  <p style={{textAlign:'left',padding:20,fontSize:20}}>At Mazario, we believe in simplifying complexity and empowering individuals to achieve their goals effortlessly. Our application is meticulously crafted to be intuitive, efficient, and adaptable to your needs. Whether you're managing tasks, organizing schedules, or collaborating with others, Mazario provides a comprehensive solution to enhance your productivity and streamline your workflow.</p>
</div>
</div>
    </div>
  )
}

export default About