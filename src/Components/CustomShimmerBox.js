const CustomShimmerBox=({value})=>{
const arr= new Array(value).fill("undefined")
//console.log(arr)

    return(
        <>
        {arr.map((item,index)=>{
            return(
        <div key={index} className={ ` border-white border rounded-3xl animate-pulse $  bg-gray-400 w-[440px] h-[248px] ` }>
          
         <span className="text-gray-500 ">{item}</span>
        </div>
            )

        })}
        </>
    )
}

export default CustomShimmerBox  