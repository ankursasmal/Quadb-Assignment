 import React,{useEffect, useState} from 'react'
 
 const api="https://api.tvmaze.com/search/shows?q=all";
 
 function App() {
  const [state,setstate]=useState([]);
let [val,setval]=useState(false);
       const fetchapi=async(link)=>{
        try{
        const res=await fetch(link);
        const data=await res.json();
        // console.log(data)
        if(data.length>0){
          setstate(data);
        }
          }
        catch(e){
        console.log(e);
        }
            };
        useEffect(( )=>{
        fetchapi(api);
       },[]) 

     let onclick=()=>{
      if(val==true){
        setval( false);
      }
      else{
        setval(true);
      }
     } 
   return (
    <> 
     <center>
      
       <h1>Show Details </h1>
         {
        state.map((e)=>{
           let {show}=e;

          return (
            <div key={show.id} style={{height:'auto',display:'flex',alignItems:'center',justifyContent:'center',border:'1.5px solid black',marginBottom:'5px',flexWrap:'wrap'}}>
              <div style={{display:'flex',alignItems:'center',textDecoration:'none',justifyContent:'center', flexDirection:'column'}}>
              <h1>{show.name}</h1>
             <a>Time:{show.averageRuntime}</a>
              <a>Language:{show.language}</a>
              <a>link:{show.url}</a>
               <button onClick={onclick}> {val?"Hide":"Show"}</button> 
              {val==true?<p>{show.summary}</p>:null}
                 </div>

            </div>
            
          )
        })}
     </center>
     </>
   )
 }
 
 export default App
 