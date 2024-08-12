import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useRef } from "react"
const ShortsContainer=()=>{
    const selectDataShorts=useSelector((store)=>store.dataSliced.allShorts)

   
    const scrollRef=useRef()
    
 
 
 
 
 
 
 
function handleMove(e){
 if(scrollRef.current){
    const containerToMove=scrollRef.current
    containerToMove.scrollLeft+=e.movementX
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
          <div  
      
          className="flex flex-row"
           >
<button onClick={handleScrollLeft} className="">scrollLeft </button>




    <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar" onMouseMove={(e)=>handleMove(e)}>

    {


         selectDataShorts&&   selectDataShorts.slice(0,7).map((card,index) => {
                return (
                 <Link to={`/shorts/${card.snippet.resourceId.videoId}`} key={card.snippet.resourceId.videoId} >   <div className="flex-shrink-0  p-2 w-64 mb-96">
                        <img
                            className="border border-black object-cover"
                            src={card.snippet.thumbnails.high.url}
                            alt={card.snippet.title}
                            style={{ width: '1300px', height: '420px' ,objectFit:"cover"}} // Ensure the image fills the container
                        />
                    </div></Link>
                );
            })
        }

</div>
<button onClick={handleScrollRight} className="">sscrollright </button>
</div>
        </>
    )









}
export default ShortsContainer