import Header from "./Components/Header";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Body from "./Components/Body"
import MainStore from "./utils/MainStore";
import { Provider } from "react-redux";
import LatestVideosPlay from "./Components/LatestVideosPlay";
import Shorts from "./Components/Shorts";
function App() {

const configPath=createBrowserRouter([

  {path:"/",
    element:<Body/>
  },
 {
  path:"/latestVideo/:id",
  element:<LatestVideosPlay/>
 },
 {
  path:"/shorts/:id",
  element:<Shorts/>
 }
  



])





  return (
    <>
    <Provider store={MainStore}>
   <RouterProvider router={configPath}>




   </RouterProvider>
</Provider>
    </>
  );
}

export default App;
