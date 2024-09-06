
import {  useState } from "react";
import { Link } from "react-router-dom";
const Contact=()=>{

const [msg,setMsg] =useState(null)
function handleSent(text){
  let firstInterval;
  let secondInterval;
    async function call() {
       const userText = text;
      
        firstInterval = setTimeout(() => {
          setMsg("your message sent");
          secondInterval = setTimeout(() => {
            setMsg("");
          }, 3000);
        }, 700);
      
      
     const res = await fetch('https://formsubmit.co/ajax/golugeeta12@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({data:text})
        });
      //console.log(res)
        clearInterval(firstInterval);
        clearInterval(secondInterval);
        setMsg("");
      };
  
call()
    }
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        email: '',
      });
    
      const handleChange = (e) => {
       
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
 

       // console.log(e)
        e.preventDefault();

    // console.log(e.target.value)
       


        // Form submission logic here
       // console.log(formData);
       const dataString = JSON.stringify(formData)
        handleSent(dataString)
        //console.log(dataString)
        setFormData({
            name: '',
            phone: '',
            message: '',
            email: '',
          })
      };
    return (
        <>
 <div className="mt-2 fixed"> <Link to={"/"} className="p-3 bg-red-500 text-white rounded-md mt-1">Home</Link></div>
      <p className=" w-[97%] text-center font-bold mt-5 absolute text-green-500 bg-white top-14 "> {msg && msg}</p>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            
          <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
          >
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Contact Us</h2>
    
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
    
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
    
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
        </>
      );


}


export default Contact