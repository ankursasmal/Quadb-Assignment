 import React,{useEffect, useState} from 'react'
  import {Link} from 'react-router-dom'
  import "bootstrap/dist/css/bootstrap.min.css"

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

    const propspass={

    }
   return (
    <> 
     <center>
     <h1 style={{ color:'#6610f2'}}>Movie Details</h1>
     {
        state.map((e)=>{
           let {show,image}=e;
                       console.log(show.medium)
return (
            <div key={show.id}  style={{hangingPunctuation:'60%'}}> 
     <div className="px-4 py-4 my-5 text-center  " style={{ border:'6',backgroundColor:'#accaf2',width:'90%',backgroundColor:'#f4f4f4',padding:'20px',borderRadius:'10px'}}>
        <h1 className="display-5 fw-bold text-body-emphasis" >{show.name}</h1>
<img className="d-block mx-auto mb-4" src={show.image} alt="loading error" width="70%" height="250px"/>
     
    <div className="col-lg-6 mx-auto">
    <h4 className="display-5 fw-bold text-body-emphasis">Time:{show.averageRuntime}</h4>
    <h4 className="display-5 fw-bold text-body-emphasis">Language:{show.language}</h4>
    <h3 className="display-5 fw-bold text-body-emphasis">rating:{show.rating.average}</h3>
      {/* <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center align-item-center h-400">
<button type="button" className="btn btn-info btn-lg px-4"onClick={()=>onclick(show.id)}> {val?"Hide Detail":"Show Detail"}</button>
  <br/>
                             {val==true?<p dangerouslySetInnerHTML={{__html:show.summary}}/>:null} <br/>

              
              <Link className="btn btn-success btn-lg px-4 " to={{pathname: '/Redirect'}} style={{textDecoration:'none'}}>Pay Now</Link>
</div>
    </div>
  </div> 
  </div>
                      )
        })
        }

 
{/* <Link to="/Redirect">save</Link> */}
     </center>
     </>
   )
 }
 
 export default App
 
