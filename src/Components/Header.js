import { useState,useRef, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Globe, House ,Youtube ,Icon8Square,Newspaper,List, XSquare, Instagram, TwitterX, Linkedin, PersonBadgeFill, Film} from "react-bootstrap-icons"
import { ImageLazyLoading } from "../helper"
import { useLocation } from "react-router-dom"



const Header=({hideTopUp})=>{
    const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts) 
const imgRef = useRef()
const location =useLocation()
console.log(location)

 const navLinks=[
       
    
{
                        path:"/playlist/PLF_A6dNxTXazPGTqnPdrS4ZFmoAzu_k6w",
                        navName:"BREAKING NEWS",
                        icon:<Newspaper size={24} className="mr-6 mt-1   sm:mt-0 sm:mr-0  sm:text-red-500 sm:bg-black sm:rounded-lg sm:w-5 sm:h-5" />
                     
                         },

             
                 {
                    path:"/playlist/PLF_A6dNxTXawUA94psGVCxXfIf4FtxQTI",
                    navName:"8PM BREAKING",
                    icon:<Icon8Square size={24}  className="mr-6 mt-1 sm:mr-0 sm:mt-0 sm:bg-black sm:text-white sm:rounded-lg sm:w-5 sm:h-5" />
                 
                     },
                     
                     {
                path:"/playlist/PLF_A6dNxTXazVWmkHf3uQtV9xAI9MzjdB",
                navName:"TRM DUNIYA",
                icon:<Globe size={24}  className="mr-8 mt-1 sm:mr-0 sm:mt-0  sm:w-5 sm:h-5" />
             
                 },
    
    
    ]

//const navLinks=["lion","ldid","dddd","ddde","ded"]


const [navBar , setNavBar] = useState(false)
const hideRef=useRef()
let scrollRef=useRef()
function hideNavout(e){


    if(hideRef.current  && hideRef.current instanceof HTMLElement){
        if(!hideRef.current.contains(e.target)){
           setNavBar(false)
        }
    }
}
useEffect(()=>{
window.addEventListener("mousedown",hideNavout)

window.addEventListener("scroll",scrollHide)

return(()=>{window.removeEventListener("mousedown",hideNavout);
            window.removeEventListener("scroll",scrollHide)
})

},[])

const scrollHide=useCallback( ()=>{
    const topHeading=document.querySelector(".top-heading")
//console.log(topHeading.offsetHeight,window.scrollY)
if(window.scrollY>=topHeading.offsetHeight){
   // console.log(scrollRef.current)
if(scrollRef.current){
    scrollRef.current.style.position="fixed"
    scrollRef.current.style.top = "0";
    scrollRef.current.style.width="100%"
    scrollRef.current.style.background="white"
    scrollRef.current.style.marginTop="0"
    scrollRef.current.style.maxWidth="1700px"
    scrollRef.current.style.zIndex="100"
}
}else{
    scrollRef.current.style.position = ""; // Reset position when not sticking
                scrollRef.current.style.top = "";
                scrollRef.current.style.width = ""; // Reset width
                scrollRef.current.style.zIndex = ""; 
                 scrollRef.current.style.background=""
                 scrollRef.current.style.marginTop="12px"
}

},[])

    return(
        <>
<div>
<div className="">


<div className={`${hideTopUp} top-heading`}>
<div>
<div className="flex flex-row justify-between sm:w-4/5 sm:m-auto  mt-1">
<div className="sm:hidden p-2 mt-2 text-black font-bold" onClick={()=>setNavBar(!navBar)}><List size={35}/></div>

<div className="  sm:ml-2 "><div className="blur-load " style={{ backgroundImage: 'url(' + require('../image/smallmike.png') + ')'}}><img  onLoad={(e)=>ImageLazyLoading(e,imgRef.current)} ref={imgRef} loading="lazy" className=" mt-2 w-12 sm:w-20 object-cover rounded-full  animate-pulse   transition-opacity duration-300 opacity-0" src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png" alt="logo-of-site"></img></div></div>

<div className=" hidden sm:block  pt-10 w-1/3"><div className=" m-auto  flex flex-row justify-between  sm:hover:text-black">
  <span><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TheRedMike." > <Youtube color="red" size={24}/></a></span> 
   <span> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/theredmike/?hl=en" >  <Instagram color="#d74672" size={24}/></a> </span>
   <span> <a target="_blank" rel="noopener noreferrer" href="https://x.com/TheRedMike" >  <TwitterX size={24}/></a></span>
   <span><a target="_blank" rel="noopener noreferrer" href="#" >    <Linkedin  size={24}/></a> </span>
    
    </div></div> 

<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TheRedMike." ><div className="p-2 mt-2 sm:mt-7"><button className="bg-red-500 text-white font-serif px-2 py-1 rounded-md sm:hover:bg-black">Subscribe⭷</button></div></a>



</div>
</div>
</div>


<div ref={scrollRef} className="  font-sans text-sm font-semibold border-t-gray-300 mt-3 border-t border-b-gray-300 border-b p-2  hidden  sm:flex flex-row justify-between ">
<div className=" flex flex-row justify-around  w-1/5">
    
<Link to={"/"}>   <div  className={`${location.pathname==="/" ? "text-red-600":"text-black"} flex flex-row flex-nowrap p-2 text-center`}      ><House className="text-orange-400 sm:rounded-lg sm:w-5 sm:h-5" size={24}/> <span className="ml-1">HOME </span> </div></Link> 
{selectDataShorts?.length>0 && <Link to={`/shorts/${selectDataShorts[0]?.snippet?.resourceId?.videoId}`}>   <div  className={`${location.pathname===`/shorts/${selectDataShorts[0]?.snippet?.resourceId?.videoId}` ? "text-red-600":"text-black"} flex flex-row flex-nowrap p-2 text-center `}  ><Youtube className="text-red-600 sm:rounded-lg sm:w-5 sm:h-5"  size={24}/><span className="ml-1">SHORTS</span></div></Link> }
</div>
<div className="flex flex-row justify-between  w-1/3">
{navLinks.map((item,index)=>{
    
    return(
        <div key={item.path}>
    <Link to={item.path}>   <div  className={ `${location.pathname ===`${item.path}` ? "text-red-600" : "text-black"} flex flex-row flex-nowrap p-2 text-center `} >
  <span className=" hidden lg:block ">   {item.icon}</span> <span className="ml-1 sm:w-20 truncate md:w-24" >{item.navName}</span> 
      

        </div></Link> 
        </div>
    )
})}


      </div>
<div className="flex flex-row w-1/4 justify-around">
<Link to={"/"}>   <div  className={`p-2 flex flex-row justify-center  `}><Film className="hidden lg:block sm:w-5 sm:h-5" size={24}/><span className="ml-1">Advertisement</span></div></Link> 
<Link to={"/"}>   <div  className={` p-2 flex flex-row justify-center  `}><PersonBadgeFill className=" hidden lg:block sm:w-5 sm:h-5" size={24}/> <span className="ml-1">Contact</span></div></Link> 
</div>

</div>



{
    /**
     * showing bar when parmasa is hiiden for playlist and other route
     */
}
<div className={` ${(hideTopUp === "hidden") ? "block": "hidden" } sm:hidden  p-2 mt-2 text-black font-bold`} onClick={()=>setNavBar(!navBar)}><List size={35}/></div>


<div ref={hideRef} className={ `  ${ navBar ? "left-0" :"-left-full"} z-[120] sm:hidden   fixed  flex flex-col justify-between bg-red-600 w-4/5 top-0  rounded-r-xl`}>


<div className={`relative mt-1`} >

  <div className=""><Link to={"/"}><div><img  className="w-16 m-auto rounded-full" src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png" alt="logo-of-site"></img></div></Link></div> 
  <div className="pt-10"><div className=" m-auto w-1/2 flex flex-row justify-between text-white sm:hover:text-black">
  <span><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TheRedMike." > <Youtube size={24}/></a></span> 
   <span> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/theredmike/?hl=en" >  <Instagram size={24}/></a> </span>
   <span> <a target="_blank" rel="noopener noreferrer" href="https://x.com/TheRedMike" >  <TwitterX size={24}/></a></span>
   <span><a target="_blank" rel="noopener noreferrer" href="#" >    <Linkedin size={24}/></a> </span>
    
    </div></div> 
<button className="absolute right-0 top-0 text-white sm:hover:text-black"  onClick={()=>setNavBar(!navBar)}><XSquare size={35}/></button>



<div >
<ul className="mt-16">


<Link to={"/"}>   <div  className={`p-4 text-center border border-gray-200 text-white text-xl  flex flex-row justify-center  `}><House className="mr-6 mt-1" size={24}/>Home</div></Link> 

{selectDataShorts?.length>0 && <Link to={`/shorts/${selectDataShorts[0]?.snippet?.resourceId?.videoId}`}>   <div className={`p-4 text-center border border-gray-200 text-white text-xl  flex flex-row justify-center  `}><Youtube className="mr-6 mt-2" size={24}/>shorts</div></Link> }


        



{navLinks.map((item)=>{
    
    return(
        <div key={item.path}>
    <Link to={item.path}>   <div  className={`p-4 text-center border border-gray-200 text-white text-xl  flex flex-row justify-center  `}>
     {item.icon}  {item.navName}
      

        </div></Link> 
        </div>
    )
})}
<Link to={"/"}>   <div  className={`  p-4 text-center border border-gray-200 text-white text-xl  flex flex-row justify-center  `}><Film className="mr-11  mt-1" size={24}/>Advertisement</div></Link> 
<Link to={"/"}>   <div  className={`  p-4 text-center border border-gray-200 text-white text-xl  flex flex-row justify-center  `}><PersonBadgeFill className="mr-11  mt-1 " size={24}/>Contact</div></Link> 

</ul>



</div>



</div>





</div>
</div>
</div>

        </>
    )
}
export default Header