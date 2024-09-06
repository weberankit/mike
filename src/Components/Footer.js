
/*
import { TwitterX,Linkedin,Youtube,Instagram, Whatsapp ,Facebook} from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Footer=()=>{
    return(
        <>
        <div className="bg-black rounded-t-md p-2 rounded-sm h-auto mt-12 text-white relative">
            <div>
            
                <div >  <img  className=" w-20  rounded-full " alt="logo-img" src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png"></img></div>
   <div className="grid grid-cols-2 p-4">
             <div>
             <ul>
                <li>
                 <Link to={"/about"}>About us</Link>   
                </li>
                <li>
                <Link to={"/contact"}> Contact</Link> 
                </li>
                <li>
                <Link to={'termofuse'}> Term Of Use</Link>  
                </li>
             </ul>

             </div>

             <div>
             <div className="absolute top-[46px] outline outline-red-500 rounded-lg  p-1 ">our other PlayList 👇</div>
             <div className="grid grid-cols-1 sm:grid-cols-2 text-red-500">
              <div className="grid grid-col-2">
            <a className="hover:text-white" href="https://youtube.com/playlist?list=PLF_A6dNxTXaxoDfS4ILr-9byuzF-_EYu8&si=hVWUrcQZDH6L2b-t" target="_blank" rel="noopener noreferrer">TRM Podcasts</a>
            <a className="hover:text-white" href="https://youtube.com/playlist?list=PLF_A6dNxTXawzZwUgJeq5qUlawy7Ly43x&si=D8Kn6CQ3D3BTo6mk" target="_blank" rel="noopener noreferrer">TRM EXCLUSIVE</a>
            </div>

           
            <div className="grid grid-col-2">
            <a className="hover:text-white" href="https://youtube.com/playlist?list=PLF_A6dNxTXaz5swCCPCJX3HOZeugew2Z3&si=H7-yX5cVXo14eb_7" target="_blank" rel="noopener noreferrer">TRM MANCH</a>
            <a  className="hover:text-white" href="https://youtube.com/playlist?list=PLF_A6dNxTXazy0BHQe4X6sz1FuhZdRt2s&si=hdbI8aUSfzPTJUYO" target="_blank" rel="noopener noreferrer">TRM GROUND REPORTS</a>
              </div>
 </div>
               </div>

</div>
<div className=" m-auto w-full sm:w-48 p-1 space-x-6  flex flex-row  justify-around  sm:hover:text-white">
  <span><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TheRedMike." > <Youtube color="red" size={24}/></a></span> 
   <span> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/theredmike/?hl=en" >  <Instagram color="#d74672" size={24}/></a> </span>
   <span> <a target="_blank" rel="noopener noreferrer" href="https://x.com/TheRedMike" >  <TwitterX size={24}/></a></span>
   <span><a target="_blank" rel="noopener noreferrer" href="#" >    <Linkedin  size={24}/></a> </span>
   <span><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TheRedMikeMovement" >    <Facebook color="blue" size={24}/></a> </span>
   <span><a target="_blank" rel="noopener noreferrer" href="https://www.whatsapp.com/channel/0029VaGhJSNCxoB5Wfdedr0Z" >    <Whatsapp color="green" size={24}/></a> </span>
    </div>

            </div>

  <div className="text-white text-center font-serif mb-2 mt-1 text-xs"><a target="_blank" rel="noopener noreferrer" href="https://www.ankitkr.in/">meet the developer</a></div>
        </div>
        
        </>
    )
}


export default Footer*/

import { TwitterX, Linkedin, Youtube, Instagram, Whatsapp, Facebook } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4 relative">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-8">
                    <img
                        className="w-24 rounded-full mb-4"
                        alt="logo-img"
                        src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png"
                    />
                    <div className="grid grid-col-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/termofuse" className="hover:text-red-500 transition-colors">Terms of Use</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="bg-red-500 text-white p-2 rounded-lg mb-4 text-center">
                                Our  Playlist
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXaxoDfS4ILr-9byuzF-_EYu8&si=hVWUrcQZDH6L2b-t"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Podcasts
                                </a>
                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXawzZwUgJeq5qUlawy7Ly43x&si=D8Kn6CQ3D3BTo6mk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 Exclusive
                                </a>
                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXaz5swCCPCJX3HOZeugew2Z3&si=H7-yX5cVXo14eb_7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     Manch
                                </a>
                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXazy0BHQe4X6sz1FuhZdRt2s&si=hdbI8aUSfzPTJUYO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     Ground Reports
                                </a>



                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXazZTlRzFK9yDcQ7cZqE9npG&si=JF6NQ9F-WmB8fxSh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 Dialogues
                                </a>


                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXayorbRdKheFy7EmvsnwFzNH&si=1wt-wBdJQRN9h8-h"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Dil Se With Kapil Sibal
                                </a>

                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXaz0y32K7sPEXJ3dGpA-1USX&si=_fW3voVY4zK-fbRl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 Election Interviews
                                </a>
                              
                                <a
                                    className="text-red-500 hover:text-white transition-colors"
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXawTmvV2FZusjW3ZeGPHHzn3&si=DT5hYYozgvyEBr7E"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 Elections 2024
                                </a>

                                <a
                                    className="text-red-500 hover:text-white transition-colors "
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXax9CbiaNS2h4-lLAtiZN4Kf&si=5rDG-6Ry80pIKL4-"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                 Kanoon Ki Pathshala
                                </a>

                                <a
                                    className="text-red-500 hover:text-white transition-colors  "
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXaxTvtJ1-nxtQLlJjW43_3a7&si=g2F2xRW-S2MF1Ahc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Election Yatra
                                </a>
                            
                              
                                <a
                                    className="text-red-500 hover:text-white transition-colors "
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXay1t5gj4p4xgTM9_kxhOuGg&si=4aauoo8Y8gxSMeQ3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Loktantra Series
                                </a>

                             
                                <a
                                    className="text-red-500 hover:text-white transition-colors "
                                    href="https://youtube.com/playlist?list=PLF_A6dNxTXax9ZmfVZfK-s3TCtYqoKCZI&si=l7hCv9knyBYm135L"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                KuchDekhaJaaye
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="https://www.youtube.com/@TheRedMike."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Youtube color="red" size={24} />
                    </a>
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="https://www.instagram.com/theredmike/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram color="#d74672" size={24} />
                    </a>
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="https://x.com/TheRedMike"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterX size={24} />
                    </a>
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="https://www.facebook.com/TheRedMikeMovement"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook color="blue" size={24} />
                    </a>
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="https://www.whatsapp.com/channel/0029VaGhJSNCxoB5Wfdedr0Z"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Whatsapp color="green" size={24} />
                    </a>
                </div>

                <div className="text-center text-white text-sm">
                    <a
                        className="hover:text-red-500 transition-colors"
                        href="https://www.ankitkr.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Meet the Developer
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
