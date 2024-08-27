"use client"
import CustomizableInfoWidget from '@/components/component/anibut';
import { Navbar } from '@/components/component/navbar'
import Image from 'next/image'
import { useEffect, useRef } from "react";

type Props = {}

const Home = (props: Props) => {
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startPosition = 0;
    let movement = 0;

    const animate = () => {
      if (carRef.current) {
        movement = (movement + 2) % (window.innerHeight * .5 + carRef.current.clientHeight); // Adjust as needed
        carRef.current.style.transform = `translateY(-${movement}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);
  return (
    <>
    <Navbar />
    <div className="relative h-screen text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
            src="./1.jpg"
            fill
            style={{ objectFit: 'cover' }} alt={''}       />
      </div>

      <div className="relative z-20 flex flex-col md:flex-row h-screen">
      {/* Left section with yellow bars and car image */}
      <div className="relative w-full md:w-3/6 h-full">
        {/* Yellow Bars */}

        <div className="absolute top-0 left-20 w-14 bg-yellow-500 h-3/5"></div>
        <div className="absolute top-0 left-44 w-14 h-4/5 bg-yellow-500 "></div>
        
        {/* Car Image */}
        <div ref={carRef} className="relative inset-0 flex items-center justify-center h-full">
          <div className="relative h-[70%] w-[70%]">
            <Image
              src="./2.png"
              alt="Luxury car"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        <div className="absolute top-0 right-20 w-14 bg-yellow-500 h-3/5"></div>
        <div className="absolute top-0 right-44 w-14 h-4/5 bg-yellow-500 "></div>
        
        {/* Bottom Yellow Bar */}
        <div className="absolute bottom-0 left-1/3 w-2/6 bg-yellow-500 h-4/6 rounded-t-3xl z-[-1]"></div>

      </div>
      
        {/* Right section with text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-11 md:p-24">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-center">
            AUTO MAINTENANCE & REPAIR SERVICE
          </h1>
          <p className="text-lg md:text-4xl mb-10 text-center ">
            Connecting you with your local automotive service experts
          </p>
          <button className="bg-yellow-500 text-gray-900 font-bold py-3 px-9 rounded-full hover:bg-yellow-400 transition duration-300">
            <h1 className="text-3xl md:text-2xl font-bold mb- leading-tight">BOOK AN APPOINTMENT</h1>
          </button>
        </div>
      </div>
    </div>
    <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="./3.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20 z-10" /> {/* Overlay for better text visibility */}
      <div className="relative z-20 flex flex-col h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-1xl ml-12 mt-20">
          Explore our wide range of offerings
        </h1>
      </div>
      <div className="absolute top-80 mt-8 left-72 -ml-3 z-30">
        <CustomizableInfoWidget
          infoText="Top-left information"
          infoBoxClassName="top-full left-0 mt-2"
        />
      </div>
      <div className="absolute top-60 mt-8 left-96 ml-28 z-30">
        <CustomizableInfoWidget
          infoText="Top-left information"
          infoBoxClassName="top-full left-0 mt-2"
        />
      </div>
      
      {/* Top-right corner widget */}
      <div className="absolute top-60 right-80 mr-7 mt-3 z-30">
        <CustomizableInfoWidget
          infoText="Top-right information"
          infoBoxClassName="bottom-full left-0 mt-2"
        />
      </div>
      <div className="absolute top-96 right-96 mr-52 -mt-8 z-30">
        <CustomizableInfoWidget
          infoText="Top-right information"
          infoBoxClassName="top-full right-0 mt-2"
        />
      </div>
      
      {/* Bottom-left corner widget */}
      <div className="absolute bottom-72 ml-14 mb-14 left-96 z-30">
        <CustomizableInfoWidget
          infoText="Bottom-left information"
          infoBoxClassName="bottom-full left-0 mb-2"
        />
      </div>
      
      {/* Bottom-right corner widget */}
      <div className="absolute bottom-96 right-60 mr-7 mb-10  z-30">
        <CustomizableInfoWidget
          infoText="Bottom-right information"
          infoBoxClassName="bottom-full right-0 mb-2"
        />
      </div>
      <div className="absolute bottom-80 -mb-3 right-96 mr-40  z-30">
        <CustomizableInfoWidget
          infoText="Bottom-right information"
          infoBoxClassName="top-full left-0 mb-2"
        />
      </div>
    </div>
    <section className="relative text-white p-8 h-screen flex">
      <div className="absolute inset-0 z-0">
        <Image
          src="./5.png"
          fill
          style={{ objectFit: 'cover' }}
          alt="Background image"
        />
      </div>
      {/* Left side - "ABOUT US" text with border */}
      <div className="w-1/4 flex flex-col items-center justify-center">
        <h2 className="text-[8rem] font-bold writing-vertical-lr transform -rotate-90 leading-tight border-b-4 border-yellow-400 pb-2">
        &#160;ABOUT&#160;US&#160;
        </h2>
      </div>


      {/* Right side - content */}
      <div className="w-3/4 flex flex-col justify-between z-10">
        {/* First paragraph */}
        <div className="border-b-4 w-3/4 border-yellow-400 py-4 flex-1 flex items-center ml-auto">
          <p className="text-2xl">
            At KEPLIX, we are revolutionizing the way you connect with automotive service providers. Our platform simplifies vehicle maintenance by offering a seamless, reliable, and transparent experience.
          </p>
        </div>

        {/* Second paragraph */}
        <div className="border-b-4 border-yellow-400 py-4 flex-1 flex items-center ml-auto">
          <p className="text-2xl">
            Our founders, seasoned professionals with extensive experience in the tech and automotive industries, recognized the need for a solution that caters to the busy lives of vehicle owners. With this in mind, KEPLIX was created to offer a smarter way to connect, book, and review local automotive services.
          </p>
        </div>

        {/* Third paragraph */}
        <div className="border-b-4 border-yellow-400 w-4/6 py-4 flex-1 flex items-center ml-auto">
          <p className="text-2xl">
            Our mission is to bridge the gap between vehicle owners and local automotive service providers, making it easy to access quality services without hassle.
          </p>
        </div>
      </div>
    </section>
    <section className="h-screen bg-neutral-800 relative">
      {/* Background Image */}
      <div className="absolute h-1/2 inset-0">
        <Image
          src="./4.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Keplix background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold mb-12">WHY CHOOSE KEPLIX?</h1>
        
        <div className="grid grid-cols-4 gap-8 px-8 w-full">
          {[
            {
              number: "01",
              title: "Convenience",
              description: "Find, book, and manage your automotive services without the hassle of visiting multiple service providers."
            },
            {
              number: "02",
              title: "Transparency",
              description: "Make informed decisions with access to detailed information and customer reviews."
            },
            {
              number: "03",
              title: "Reliability",
              description: "Trust that your appointments will be managed smoothly, even in the face of unexpected delays."
            },
            {
              number: "04",
              title: "Support",
              description: "Benefit from a platform that supports both users and service providers, ensuring a high-quality experience for all."
            }
          ].map((item, index) => (
            <div key={index} className="bg-black bg-opacity-70 p-10 rounded-lg text-center">
              <h2 className="text-8xl font-bold mb-2">{item.number}</h2>
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">{item.title}</h3>
              <p className="text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Home