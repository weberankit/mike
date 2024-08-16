//import Header from "./Components/Header";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Body from "./Components/Body"
import MainStore from "./utils/MainStore";
import { Provider } from "react-redux";
//import LatestVideosPlay from "./Components/LatestVideosPlay";
import Shorts from "./Components/Shorts";
//import Playlist from "./Components/Playlist";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import useCheckOnline from "./utils/useCheckOnline";
import { lazy ,Suspense} from "react";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Advertise from "./Components/Advertise";
import About from "./Components/About";
import TermOFUse from "./Components/TermOfUse"


const PlaylistLazy = lazy(() => import('./Components/Playlist'));
const VideoLazy=lazy(()=>import('./Components/LatestVideosPlay'))


function App() {
  const modeNetwork=useCheckOnline()



 const callBackToUnLoad=useCallback(toLoad,[])
  function toLoad() {
    document.getElementById("loading-overlay").style.display = "none";
  }
  // Hide the loading indicator when the page has fully loaded
  window.addEventListener("load", callBackToUnLoad);
 
 useEffect(()=>{
 
 // Hide the loading indicator when the page has fully loaded
 //to ensure 100% 
 document.getElementById("loading-overlay").style.display = "none";




 //removing it when unmounted --


  return(()=>window.removeEventListener("load",callBackToUnLoad))
 },[])

const configPath=createBrowserRouter([

  {path:"/",
    element:<Body/>,
    errorElement:<Error/>
  },
 {
  path:"/latestVideo/:id",
  element:<Suspense fallback="loading data please wait ....."><VideoLazy/></Suspense>
 },
 {
  path:"/shorts/:id",
  element:<Shorts/>
 },
 {
  path:"/playlist/:id",
  element: <Suspense fallback="Loading the data wait for a seconds....."><PlaylistLazy/></Suspense>
 },
 {
  path:"/contact",
  element:<Contact/>
 }
  ,
  {
    path:"/advertise",
    element:<Advertise/>
   },{
    path:"/about",
    element:<About/>
   },
   {
    path:"/termofuse",
    element:<TermOFUse/>
   }
    



])







  return (
    <>
    {!modeNetwork && <p className="bg-red-600 text-white p-1 m-1 ">please check your network</p>}
   
    <Provider store={MainStore}>
   <RouterProvider router={configPath}>



   </RouterProvider>
</Provider>
    </>
  );
}

export default App;
