import React,{useState} from 'react'
import asset from './data'
const Book = () => {
 
  const [checker,setChecker]=useState({})
  const [values,setValues]=useState({button:true})
  const [seats,setSeats]=useState([])
  function handleSubmit(){
    if(checker.images){
      setValues(pre=>({...pre,images:asset.images[checker.images-1].alt}))
      let flightseat=flightSeat()
       setChecker(pre=>({...pre,flightSeats:flightseat}))
      if(checker.place){
      setValues(pre=>({...pre,place:asset.Tourism[checker.place].name}))
      if(seats.length>0){
        console.log('1st')
      setValues(pre=>({...pre,seats:seats,button:false}))
      }
      else if(checker.car){
        console.log('2nd')
      setValues(pre=>({...pre,car:asset.cars[checker.car].alt,button:false}))
      }
      else{
        console.log(false)
      }
      }
    }
    else{
      console.log(false)
      console.log(values)
    }
  }
  const flightSeat=()=>{
    let arr=[]
    let value=asset.images[checker.images-1].alt==='flight'|| asset.images[checker.images-1].alt==='boat'?60:42
    for (let i = 1; i <= value; i++){
    arr.push(i)
    }
    return arr
}
  return (
    <div id='book_page' style={{minHeight:'100vh',width:'100%',overflow:'hidden',display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke'}}>
      <h2 style={{margin:60}}>
        {values.images===undefined?
        'Select Your Vechicle':
        values.place===undefined?
        'Select Your place':values.car===undefined && values.seats===undefined?`select your ${asset.images[checker.images-1]?.alt==='car'?'CAR':"SEAT"}`:'Fill your Details'
}
        </h2>
     {
      values.images===undefined?
     <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',paddingBottom:20}}  >
      {
        asset.images.map((item,index)=>(
          <div 
          onClick={()=>setChecker(pre=>({...pre,images:index+1}))}
          style={{height:300,width:300,marginTop:30,padding:20,borderRadius:12,overflow:'hidden',boxShadow:'0 0px 8px rgba(0,0,0,0.5)',border:checker.images-1===index?'5px solid cyan':'5px solid rgba(255,255,255,0.4)'}} key={`parentTage${index}`} className='blurEffect'>
          <img src={item.src} style={{height:'100%',width:'100%',objectFit:'contain',}} alt={item.alt}  key={`image${index}`}/>
          </div>
        ))
      }
      </div>
      :values.place===undefined?
      <div id='place_parent_tag'>
     {asset.Tourism.map((item,index)=>(
          <div key={index} id='child_tag' className='blurEffect' onClick={()=>setChecker(pre=>({...pre,place:index}))} style={{border:checker.place===index?'4px solid rgb(255,0,255)':'4px solid rgba(255,255,255,0.5)'}} >
       <div id='Image_tag'>
       <img style={{height:'100%',width:'100%',objectFit:'cover', filter: 'blur(0)'}} src={item.src} alt={item.alt} />
       </div>
       <div id='rating'>
       <p key={`rating${index}`} className='rating'>{`⭐ ${item.rating}`}</p>
       <p key={`location${index+1}`}>{item.location}</p>
       </div>
       </div>
     ))}
     </div>
     :values.seats===undefined && values.car===undefined?
     <>
     {
     asset.images[checker.images-1].alt==='flight' || asset.images[checker.images-1].alt==='bus' || asset.images[checker.images-1].alt==='boat' ?
     <div id='seats' className='blurEffect'>
     {checker.flightSeats.map((item, index) => (
       <h2 key={`seats${index}`} 
       onClick={()=>(seats.find(ele=>ele===item)?setSeats(seats.filter(ele=>ele!==item)):setSeats(pre=>[...pre,item]))}
       style={{height:50,width:50,backgroundColor:seats.find(ele=>ele===item)?'lightgreen':'white',border:seats.find(ele=>ele===item)?'2px solid green':'2px solid transparent',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',fontSize:16,boxShadow:'0 0 12px rgba(0,0,0,0.5)',cursor:'pointer'}}>
         {item<10?'0'+item:item}
       </h2>
      
     ))}
   </div>:asset.images[checker.images-1]?.alt==='car'?
   <div style={{display:'flex',flexWrap:'wrap',width:'100%',justifyContent:'center',alignItems:'center',gap:30}}>
    {
      asset.cars.map((item,index)=>(
        <div 
        onClick={()=>setChecker(pre=>({...pre,car:index}))}
        style={{height:250,width:250,position:'relative',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,boxShadow:'0 3px 15px rgba(0,0,0,0.5)',border:checker.car===index?'3px solid cyan':'3px solid rgba(255,255,255,0.5)'}} className='blurEffect'>
        <img src={item.url} alt={item.alt} style={{height:'100%',width:'100%',objectFit:'contain'}} key={`cars_image_${index}`} />
        <p style={{position:'absolute',bottom:'2%',fontWeight:900}}>{item.alt}</p>
        </div>
      ))
    }
   </div>:<></>
}
   </>
    :<div id='PersonalDetails' style={{width:500,padding:20,minHeight:400,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'2rem',borderRadius:12,boxShadow:'0 -2px 15px 2px rgba(0,0,0,0.5)',border:'3px solid white'}} className='blurEffect'>
      <div id='input_container'><input type='text' placeholder='Enter Your name' style={{fontSize:20}}/></div>
      <div id='input_container'><input type='text' placeholder='Phone Number' style={{fontSize:20}}/></div>
      <div id='input_container'><input type='date' style={{fontSize:20}}/></div>
      <div id='input_container' style={{border:'none'}}>
        <h3>Select Your Reason:</h3>
        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',padding:20}}>
        <label id='label' htmlFor='Reason'>
       <input type='radio' name='Reason' value={()=>setValues(pre=>({...pre,reason:'Education'}))}/>
        Education</label> 
        <label htmlFor='Reason' id='label'>
       <input type='radio' name='Reason' value={()=>setValues(pre=>({...pre,reason:'Medical'}))}/>
        Medical</label> 
        <label htmlFor='Reason' id='label'>
       <input type='radio' name='Reason' value={()=>setValues(pre=>({...pre,reason:'Job'}))}/>
        Job</label> 
        <label htmlFor='Reason' id='label'>
       <input type='radio' name='Reason' value={()=>setValues(pre=>({...pre,reason:'Other'}))}/>
        other</label> 
        </div>
     </div>
     <button id='book_button'>
     <h2>Book</h2>
     </button>
    </div>
} 
{values.button?
<div style={{display:'flex',justifyContent:'flex-end',width:'100%',paddingBottom:30,paddingRight:30}}>
  <button 
   onClick={()=>handleSubmit()}
    style={{width:150,height:30,backgroundColor:'black',color:'white',fontSize:18,fontWeight:900,border:'none',borderRadius:12,cursor:'pointer'}}>
    Next
    </button>
    </div>:<></>
}
    </div>
  )
}

export default Book