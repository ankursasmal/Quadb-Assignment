
import React, { useState,useEffect } from 'react'
 
export default function Redirect() {
  const [currentDate, setCurrentDate] = useState(new Date());

    const [me,setm]=useState(" ");
    const [sent,sets]=useState(false);
    const [sending,setd]=useState(false);
 
async function onhandelchange(e){
    e.preventDefault();
    setd(true);
await sentme(me);
setd(false);
sets(true);

}
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentDate(new Date());
  }, 1000);  
   return () => clearInterval(intervalId);
}, []); 
if(sent){
    return <p>Thank for Bookiing ticket -{currentDate.toDateString()} {currentDate.toLocaleTimeString()}</p>
}
  return (
    <center style={{ justifyContent:'center',fontSize:'bold'}}>  
    <h1 style={{color:'#205091'}}>Book Your Movie Ticket</h1>       
    <form className='my-10 ' onSubmit={onhandelchange} style={{height:'300px',width:'auto',backgroundColor:'#f4f4f4',padding:'20px',borderRadius:'10px'}}>

         <label >Enter Show Name:</label>

    <input  disabled={sending}   value={me} onChange={(e)=>{setm(e.target.value)}}  ></input>  
    <br/>
   <input  type="checkbox"  id="flexCheckDefault"/>
  <label className="form-check-label">
    Confirm to payment
  </label>
  <br></br>
       <button className='btn btn-success' disabled={sending} type="submit" >Buy</button><br/>
    {sending && <p>sending ....</p>}
</form>
    </center>
  );
}
function sentme(me){
    return (new Promise((resolve, reject) => {
        setTimeout(resolve,2000);
    }))
}
 



 
