import React from 'react'
import flight from './asset/flights.png'
import './Home.css'
import asset from './data'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    <div style={{flex:'1 0 20rem',display:'flex',flexDirection:'column',gap:20,justifyContent:'center',alignItems:'center'}} id='Home_page_content' >
      <h1 style={{textAlign:'center'}}>
      Unlock the world's wonders with simplicity.
      </h1>
      <h1 style={{textAlign:'center'}}>Effortless travel, unforgettable experiences.</h1>
      <p style={{textAlign:'center'}}>Explore our immersive travel series, uncovering the world's wonders in every episode. From serene landscapes to vibrant cultures, ignite your wanderlust and join our journey of discovery. Let us be your guide to unforgettable adventures, inspiring your next travel experience.</p>
    </div>
    <div style={{flex:'1 0 20rem',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
     <div id='background_circle'></div>
     <div className='cloud1'></div>
     <div className='cloud2'></div>
      <img src={flight} alt='flight' style={{width:'100%',height:'100%'}}/>
    </div>
    </div>
    <div id='slogan'>
    <h2 style={{textAlign:'center'}}>Discover the extraordinary with Mazario: Where every adventure begins</h2>
    </div>
    <div id='Heading'>
    <h2 style={{textAlign:'center'}}>Tours & Travels</h2>
    </div>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%',alignItems:'center',gap:'1rem',padding:'2rem'}}>
       {
        asset.images.map((item,index)=>(
          <div key={index} style={{height:350,width:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',boxShadow:'0 -1px 10px rgba(0,0,0,0.5)',borderRadius:12}}>
            <div style={{height:200,width:200,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={item.src} alt={item.alt} key={`img${index}`} style={{height:'100%',width:'100%',objectFit:'contain'}} />
            </div>
            <p key={`content${index+1}`} style={{padding:10}}>{item.content}</p>
             <Link to='/book' key={`link${index}`}><button class="button" key={`button${index}`} style={{marginBottom:'2rem'}}>Book</button>
             </Link>
          </div>
        ))
       }
    </div>
    <div id='Heading'>
    <h2 style={{textAlign:'center'}}>Tourism Place</h2>
    </div>
    <div id='place_parent_tag'>
     {asset.Tourism.map((item,index)=>(
          <div key={index} id='child_tag' style={{backdropFilter:'blur(15px)'}}>
       <div id='Image_tag'>
       <img style={{height:'100%',width:'100%',objectFit:'cover', filter: 'blur(0)'}} src={item.src} alt={item.alt} id={`Tourism_image`} />
       <div id={`placename`}>
       <p key={`name${index+1}`} >{item.name}</p>
       </div>
       </div>
       <div id='rating'>
       <p key={`rating${index}`} className='rating'>{`⭐ ${item.rating}`}</p>
       <p key={`location${index+1}`}>{item.location}</p>
       </div>
       </div>
     ))}
     </div>
     </main>
  )
}

export default Home