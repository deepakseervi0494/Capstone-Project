import React from "react";
import Image from "next/image";

function App() {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg">
      <div className="container mx-auto max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">About Our Website</h1>
        </header>
        <div className="description text-center mb-10">
          <p className="text-gray-700">
            Welcome to our website, where you can turn your ideas into amazing
            visuals! We make it easy to transform text into beautiful 2D images
            or realistic 3D models. Whether you're looking to create artwork or
            bring your imagination to life, our tools are simple to use and fun.
            Just type, click, and watch your ideas come alive in no time.
          </p>
        </div>
        <section className="owners text-center">
          <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
          <div className="flex flex-wrap justify-around">
            {["Chandan", "Prajwal", "Dhruva", "Deepak"].map((name, index) => (
              <div className="owner text-center m-4" key={index}>
                <Image
                  src={`/${name}.jpg`} // Dynamically set src based on the name
                  alt={name}
                  width={130} // Image size (adjust as needed)
                  height={130}
                  className="rounded-full mx-auto transition-transform duration-200 transform hover:scale-110 hover:shadow-xl"
                />
                <p className="mt-4 text-lg font-bold">{name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;