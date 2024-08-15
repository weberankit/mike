import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { Play ,CaretLeftFill,CaretRightFill} from "react-bootstrap-icons"
import CustomShimmerBox from "./CustomShimmerBox"
const ShortsContainer=()=>{
    const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts)

   
    const scrollRef=useRef()
    
 
 
 
 
 
 
 
function handleMove(e){
 if(scrollRef.current){
    const containerToMove=scrollRef.current
    containerToMove.scrollLeft+=e.movementX*0.3
 }
 }
 
 const handleScrollLeft = () => {
     if (scrollRef.current) {
         scrollRef.current.scrollLeft -= 300; // Adjust this value for desired scroll amount
     }
 };
 const handleScrollRight = () => {
     if (scrollRef.current) {
         scrollRef.current.scrollLeft += 300; // Adjust this value for desired scroll amount
     }
 };
 




    return(
        <>  
          <h1 className="p-1 font-bold text-xl font-mono ml-8 sm:ml-12  ">SHORTS</h1>
          <div  
      
          className="flex flex-row"
           >

{
    !selectDataShorts && <CustomShimmerBox value={6}/>
}

            {
selectDataShorts && <button onClick={handleScrollLeft} className="hidden sm:block text-center  h-96"><CaretLeftFill   size={50}/> </button>
}


    <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar" onMouseMove={(e)=>handleMove(e)}>






    {


         selectDataShorts&&   selectDataShorts.slice(0,7).map((card,index) => {
                return (
                 <Link to={`/shorts/${card.snippet.resourceId.videoId}`} key={card.snippet.resourceId.videoId} >   <div className="flex-shrink-0  p-2 w-64 mb-3">
                       <div className="relative">
                       <div className=" text-white bg-red-500  absolute top-1/2  z-40 left-1/3 right-1/3 animate-spin-outline  w-10 rounded-xl m-auto"><Play className="ml-1" size={35} /></div>
                        <img
                            className="w-56 h-96 object-cover rounded-2xl sm:hover:bg-black sm:hover:opacity-80"
                            src={card.snippet.thumbnails.high.url}
                            alt={card.snippet.title}
                            // Ensure the image fills the container style={{ width: '1300px', height: '420px' ,objectFit:"cover"}}
                        />
                        </div>
                    </div></Link>
                );
            })
        }

</div>
{
selectDataShorts && <button onClick={handleScrollRight} className="hidden sm:block h-96"><CaretRightFill size={50}/> </button>
}
 
</div>
        </>
    )









}
export default ShortsContainer