import { useState,useRef, useEffect } from "react"

const Header=()=>{
/*
    const navLinks=[
        {
       path:"/",
       navName:"tab",
       icon:<House size={24}/>
    
        },
        {
            path:"/cart",
            navName:"tab",
            icon:<FileEarmark size={24}/>
         
             },
             {
                path:"/upload",
                navName:"tab",
                icon:<CloudUploadFill size={24}/>
             
                 },
                 {
                    path:"/setting",
                    navName:"tab",
                    icon:<GearWideConnected size={24}/>
                 
                     }
                     
    
    
    ]*/

const navLinks=["lion","ldid","dddd","ddde","ded"]


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

<div>tab</div>

<div>tab</div>

<div>tab</div>

<div>tab</div>

<div>tab</div>

<div>tab</div>
</div>


<div ref={hideRef} className={ `  ${ navBar ? "left-0" :"-left-full"} fixed  flex flex-col justify-between bg-red-600 w-2/3 `}>


<div className={`relative `} >
    
<button className="p-2 m-1 rounded-lg ml-[85%] text-red-600 text-2xl font-extrabold" onClick={()=>setNavBar(!navBar)}>ll</button>
<div >
<ul className="mt-16">
{navLinks.map((item)=>{
    return(
        <div key={item}>
        <div  className={`p-2 text-center border border-gray-200 hover:bg-[#202020c9] hover:text-white" `}>
         {item}
      

        </div>
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