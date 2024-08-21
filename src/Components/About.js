import { Link } from "react-router-dom";


const About = () => { 
    return (
        <div>
        <div> <div className="mt-2 fixed"> <Link to={"/"} className="p-3 bg-red-500 text-white rounded-md mt-1">Home</Link></div></div>
      <div className="min-h-screen bg-white flex flex-col items-center p-6">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img 
                  className="w-full md:w-3/4 xl:w-1/2 rounded-full border-4 border-gray-800 shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
                  src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png"
                  alt="logo-img"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              {/* About Us Section */}
              <div className="bg-gray-100 p-10 rounded-3xl shadow-2xl max-w-3xl text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About The REDMIKE</h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                
The Red Mike is a new movement in Journalism. We tell your stories. Ground reports the way they should be. To say what’s right, and not what is just popular. Stories from India & around the world that impact and affect you. Your Mike. Your Story
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              {/* Creators Photo */}
              <div className="flex justify-center mb-8">
                <img 
                  className="w-full md:w-3/4 xl:w-1/2 rounded-full border-4 border-gray-800 shadow-xl transform hover:rotate-3 transition-transform duration-500 ease-in-out"
                  src="https://ucarecdn.com/5db00fdb-a211-4d7a-8c38-e22cb561c52f/jour.jfif"
                  alt="creators-img"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              {/* Impact on Society */}
              <div className="bg-gray-100 p-10 rounded-3xl shadow-2xl max-w-3xl text-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">Impact on Society</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-extrabold">
                  The creators of The REDMIKE are not just content producers; they are advocates for change.
                  <b>Left NDTV, but not red mic,” three journalists who resigned from NDTV start THE REDMIKE channel</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    );
  };
  
  export default About;