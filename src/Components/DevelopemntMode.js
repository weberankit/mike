const DevelopmentNotice = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          We are in Development Mode
        </h1>
        <p className=" mb-4 text-black">
          Our site is currently under construction. We'll be live soon, stay tuned!
        </p>
        
      </div>
    </div>
  );
};

export default DevelopmentNotice;