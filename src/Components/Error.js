import { Link } from "react-router-dom"
const Error=()=>{
    return(
        <>
        <div className="p-10 text-center pt-40">
            <p className="text-white font-bold  ">Sorry! Something went Wrong </p>
            <Link to={"/"}> <div className="text-white text-center font-bold text-sm bg-red-600 rounded-lg p-3 py-2 inline-block ">Home</div></Link> 
        </div>
        </>
    )
}
export default Error