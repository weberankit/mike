const CustomShimmerBox=({value,height,bgt})=>{
const arr= new Array(value).fill("undefined")
console.log(arr)

    return(
        <>
        {arr.map((item,index)=>{
            return(
        <div className={ ` border-white border rounded-3xl animate-pulse ${bgt} w-full h-[${height}] h-[440px] bg-gray-400 ` }>
          
         <span className="text-gray-500 ">{item}</span>
        </div>
            )

        })}
        </>
    )
}

export default CustomShimmerBox  