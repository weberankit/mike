
import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addPlayListData } from "../utils/playlistSlice"
import YouTube from "react-youtube"
//import { lazy,Suspense } from "react"
//import { listof8pm ,listbreaking, listTrmDuniya, dataApiCreditOver} from "./playlistconstant"
import { dataApiCreditOver, titlePlay} from "./playlistconstant"
import Header from "./Header"

const Playlist =()=>{





const {id}=useParams()
console.log(id,"this is id")
const selectPlaylistData= useSelector((store)=>store.playlistSliced.playListData)
console.log(selectPlaylistData,"nullwala")
const dispatch=useDispatch()
const [dataSrc,setDataSrc] =useState(null)

  async function dataFetchPlayList(){
    try{
    const data=await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${id}&key=${process.env.REACT_APP_PLAYLIST_KEY}`)

   const json= await data.json()
   console.log(json.items)
   if(json.items){
   dispatch(addPlayListData(json.items))
   }else{
  dataApiCreditOver(id,dispatch,addPlayListData)


   }
  }catch(error){
    dataApiCreditOver(id,dispatch,addPlayListData)
  }

  }

  useEffect(()=>{
     if(!selectPlaylistData[id]){
        dataFetchPlayList()
     }


  },[selectPlaylistData,id])
    return(
        <>
 <Header hideTopUp={"hidden"}/>

{!dataSrc && (
  <>
    {selectPlaylistData[id] && (
    <>
    <h1 className="text-2xl p-4">{titlePlay(id)}</h1>
      <b>headline-</b><i>{selectPlaylistData[id][0].snippet.title} </i>
    
    </>
    )}
  </>
)}
  





{dataSrc && <YouTube videoId={dataSrc}/>}
        {selectPlaylistData[id] && selectPlaylistData[id].map((item,index)=>{
          if(item.snippet.resourceId.videoId !== dataSrc){
          return(
            <div key={item.snippet.resourceId.videoId}>
            <img  onClick={()=>setDataSrc(item.snippet.resourceId.videoId)} className="w-44" src={item.snippet.thumbnails.high.url}></img>
            
            </div>
          )}
        })}
        </>
    )
}

export default Playlist