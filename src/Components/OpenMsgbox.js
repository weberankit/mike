import { useState } from "react"


const OpenMsgbox=({videoIdval,setShowMsg,setVideoStop})=>{



return(
<>
<div className="absolute z-[200] sm:w-[300px] rounded-lg m-auto top-24 animate-slide-down sm:left-[20%]   bg-black h-[200px] ">

<div className="flex justify-center">

    <div className=" p-4 rounded-md mt-10">
     <p className="text-white text-xs m-1 mt-2">please click here to open youtube  (`your browser is blocking pop up `)</p>
    <button className="bg-red-500 text-xl z-[1000] text-white rounded-lg p-1 px-3" onClick={()=>{window.open(`https://www.youtube.com/watch?v=${videoIdval}`,'_blank');setShowMsg();setVideoStop()}}>open</button>

    </div>
</div>

</div>

</>

)


}

export default OpenMsgbox