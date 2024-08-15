import { Link } from "react-router-dom"
const TermOFUse=()=>{
    return(
        <>
        <div> <div className="mt-2 fixed"> <Link to={"/"} className="p-3 bg-red-500 text-white rounded-md mt-1">Home</Link></div></div>
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Terms of Use</h1>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to THE RED MIKE These Terms of Use govern your use of our website and services. By accessing or using our site, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text, graphics, logos, and images, is the property of The REDMIKE and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
        <p>
          You agree to use our site in accordance with all applicable laws and regulations. You must not engage in any activity that could harm or disrupt the functionality of our site or its content. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Disclaimers</h2>
        <p>
          Our site and its content are provided on an "as-is" basis. We make no representations or warranties of any kind, express or implied, regarding the operation or availability of our site or the accuracy of its content. We are not liable for any damages arising from the use of our site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to our website. Your continued use of our site after any changes constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms of Use, please contact us <Link to={"/contact"}><button className="p-1 rounded-md bg-black text-white">Contact</button></Link> 
        </p>
      </section>
      
      <footer className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} The REDMike. All rights reserved.</p>
      </footer>
    </div>

        </>
    )
}

export default TermOFUse