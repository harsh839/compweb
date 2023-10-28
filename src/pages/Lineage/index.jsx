import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Img, Text } from "components";
import Header from '../../components/Header'
import AboutFooter from "components/AboutFooter";

const LineagePage = () => {
  useEffect(() => {
    AOS.init({offset: 250,
      duration: 800,});
  }, [])
  return (
    <>  <Header/>
      <div className="bg-black-900 flex flex-col items-center h-[100vh] w-[100vw] overflow-x-hidden font-spacemono">
      
         <div className="flex flex-col justify-center items-center w-full h-[100%]">
         <video className="z-1"
           height={1000} width={3600} autoPlay muted loop preload="auto"><source src="videos/orchestra video.mp4" type="video/mp4"/></video>
            <Text className="font-spacemono text-[90px] text-white-A700"> GENERATIONS</Text>
         </div>
       <div>
       <Text className="flex justify-center items-center text-center text-[35px] mt-[200px] text-white-A700">
         Generations are project bodies representing <br /> through LINEAGE AND ENTROPY that is build <br /> under the foundation.
         </Text>
       </div>
        
      </div>
    </>
  );
};

export default LineagePage;
