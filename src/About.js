import React from 'react'
import asset from './data'
const About = () => {
  return (
    <div style={{marginTop:60,width:'100%',height:'100%'}}>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
<div style={{flex:'1 0 20rem',justifyContent:'center',alignItems:'center'}}>
  <h1 style={{textAlign:'center'}}>Get unlimited Experience</h1>
</div>
<div style={{flex:'1 0 10rem',justifyContent:'center',alignItems:'center'}}>
<img src={asset.cars[3].url} style={{height:'auto',width:400}}  alt={asset.cars[3].alt}/>
</div>
</div>
    </div>
  )
}

export default About