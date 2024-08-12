import { useState,useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Globe, House ,Youtube ,Icon8Square,Newspaper} from "react-bootstrap-icons"


const Header=()=>{
    const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts) 
 const navLinks=[
       
    
{
                        path:"/playlist/PLF_A6dNxTXazPGTqnPdrS4ZFmoAzu_k6w",
                        navName:"Breaking News",
                        icon:<Newspaper size={24}/>
                     
                         },

             
                 {
                    path:"/playlist/PLF_A6dNxTXawUA94psGVCxXfIf4FtxQTI",
                    navName:"8PM BREAKING",
                    icon:<Icon8Square size={24}/>
                 
                     },
                     
                     {
                path:"/playlist/PLF_A6dNxTXazVWmkHf3uQtV9xAI9MzjdB",
                navName:"TRM DUNIYA",
                icon:<Globe size={24}/>
             
                 },
    
    
    ]

//const navLinks=["lion","ldid","dddd","ddde","ded"]


const [navBar , setNavBar] = useState(false)
const hideRef=useRef()

function hideNavout(e){


    if(hideRef.current  && hideRef.current instanceof HTMLElement){
        if(!hideRef.current.contains(e.target)){
           setNavBar(false)
        }
    }
}
useEffect(()=>{
window.addEventListener("mousedown",hideNavout)
return(()=>{window.removeEventListener("mousedown",hideNavout)})
},[])



    return(
        <>

<div className="flex justify-between">
<div className="sm:hidden" onClick={()=>setNavBar(!navBar)}>icon</div>
<div className="bg-red-400">logo</div>
<div>contact</div>
</div>

<div className=" hidden  sm:flex flex-row justify-between">

<Link to={"/"}>   <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}><House size={24}/>Home</div></Link> 
{selectDataShorts?.length>0 && <Link to={`/shorts/${selectDataShorts[0]?.snippet?.resourceId?.videoId}`}>   <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}><Youtube size={24}/>shorts</div></Link> }

{navLinks.map((item,index)=>{
    
    return(
        <div key={item.path}>
    <Link to={item.path}>   <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}>
     {item.icon}  {item.navName}
      

        </div></Link> 
        </div>
    )
})}
        
</div>


<div ref={hideRef} className={ `  ${ navBar ? "left-0" :"-left-full"} fixed  flex flex-col justify-between bg-red-600 w-2/3 `}>


<div className={`relative `} >
    
<button className="p-2 m-1 rounded-lg ml-[85%] text-red-600 text-2xl font-extrabold" onClick={()=>setNavBar(!navBar)}>ll</button>
<div >
<ul className="mt-16">


<Link to={"/"}>   <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}><House size={24}/>Home</div></Link> 
{selectDataShorts?.length>0 && <Link to={`/shorts/${selectDataShorts[0]?.snippet?.resourceId?.videoId}`}>   <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}><Youtube size={24}/>shorts</div></Link> }

        



{navLinks.map((item)=>{
    
    return(
        <div key={item.path}>
    <Link to={item.path}>   <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}>
     {item.icon}  {item.navName}
      

        </div></Link> 
        </div>
    )
})}



</ul>



</div>



</div>





</div>



        </>
    )
}
export default Header