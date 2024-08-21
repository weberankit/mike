import { Link } from "react-router-dom";
const Advertise=()=>{
    return (
      <>
        <div> <div className="mt-2 fixed"> <Link to={"/"} className="p-3 bg-red-500 text-white rounded-md mt-1">Home</Link></div></div>
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
          {/* Logo Section */}
          <div className="mb-10">
            <img 
              className="w-44 sm:w-80 rounded-full m-auto border-4 border-red-600 shadow-lg" 
              alt="logo-img" 
              src="https://ucarecdn.com/90da0f60-21e5-4b6c-affc-3879ade004fc/miked.png"
            />
          </div>
    
          {/* Intro Section */}
          <section className="text-center max-w-2xl mt-16 space-y-6">
  <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Advertise with Us</h2>
  <p className="text-lg sm:text-xl text-gray-300">
    Looking to reach a dynamic and engaged audience? At The REDMIKE, we provide reliable and truthful news, 
    keeping our viewers informed and up-to-date. Our growing following includes:
    <ul className="list-disc list-inside mt-4 mb-4 text-gray-300">
      <li>YouTube: 642,000+ subscribers</li>
      <li>Twitter: 25,000+ followers</li>
      <li>Instagram: 59,700 followers</li>
    </ul>
    Partner with us to amplify your message and connect with a diverse audience across our platforms. 
    We offer tailored advertising solutions to meet your specific needs and goals. For advertisement & Sponsorship Email us at - ads@theredmike.com 
    WhatsApp Number: +91- 9811019888 or 
  </p>
 <Link to="/contact"> <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
    Contact Us
  </button></Link>
</section>
        </div>
        </>
      );
}

export default Advertise