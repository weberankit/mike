import { useState } from "react"
import { X } from "react-bootstrap-icons";

const OpenMsgbox=({videoIdval,setShowMsg,setVideoStop})=>{



return(
<>
<div className="absolute z-[200]  rounded-lg   animate-slide-down xs:top-[15%]  top-1/4 sm:top-1/2    bg-black h-[200px] w-full">
<div className=" top-0 text-white w-56  cursor-pointer" onClick={()=>{setShowMsg();setVideoStop()}} ><X size={20}/></div>
<div className="flex justify-center ">

    <div className=" px-7 py-2 rounded-md mt-10">
     <p className="text-white text-base m-1 mt-2">Moving to Youtube</p>
    <div className="text-center"><button className="bg-red-500 text-xl z-[1000] text-white rounded-lg p-1 text-center px-2" onClick={()=>{window.open(`https://www.youtube.com/watch?v=${videoIdval}`,'_blank');setShowMsg();setVideoStop()}}>ok</button>
</div>
    </div>
</div>

</div>

</>

)


}

export default OpenMsgbox