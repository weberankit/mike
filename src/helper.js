export function isoDurationToSeconds(duration) {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);

    const hours = parseInt(matches[1]) || 0;
    const minutes = parseInt(matches[2]) || 0;
    const seconds = parseInt(matches[3]) || 0;

    return (hours * 3600) + (minutes * 60) + seconds;
}


//helpfull if huge data is store
export function storeDataTorefreshPage(store,key){
if (store) {
    try {
        localStorage.setItem(key, JSON.stringify(store));
    } catch (e) {
       console.log("error in local")

        
    }
}
}

export function ImageLazyLoading(e,refCurrent){
    if(refCurrent){
 console.log(refCurrent.style)
    
        e.target.style.opacity=1
        e.target.style.animation="none"
    
      
       }
       if(e?.target?.complete){
            e.target.style.opacity=1
        e.target.style.animation="none"
         
       }
       
}