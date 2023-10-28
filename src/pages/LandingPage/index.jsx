import React, { useEffect,useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Img, Text } from "components";
import Header from '../../components/Header'
import AboutFooter from '../../components/AboutFooter'
import Footer from '../../components/Footer'
import '../LandingPage/landing.css'


const LandingPagePage = () => {
  
  useEffect(() => {
    AOS.init({offset: 350,
      duration: 800,});
  }, [])

 

 
  return (
    <>
    <div className="z-200">
     <Header/>
     </div>
      <div className="bg-black-900 z-0 font-montserrat h-[2577px] mx-auto pb-[106px] md:pl-10 sm:pl-5 pl-[106px] relative w-full">

      
        <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[1630px] top-[0] w-1/5">
         

          <div data-aos="fade-in" className="flex absolute justify-center items-center gap-20 md:mb-[210%] mb-[180%]">
         
            
        <Text className="text-gray-400 text-3xl font-bold hover:text-white-A700 transition-all ease-in-out hover:shadow-xl">
          Orchestra
        </Text>
        <Text className="text-gray-400 text-3xl font-bold hover:text-white-A700 transition-all ease-in-out hover:shadow-xl">
         Introspect
        </Text>
        <Text className="text-gray-400 text-3xl font-bold hover:text-white-A700 transition-all ease-in-out hover:shadow-xl">
          Conformal
        </Text>
          
        
        </div>
          <div className="h-[145px] relative w-full">
            
           
            <Button data-aos='fade-out'
              className="absolute md:bottom-[386%] flex justify-center  items-center hover:shadow-2xl bg-gray-400 hover:shadow-blue-400 inset-x-[0] p-5 rounded-3xl mx-auto sm:text-[20.19px] md:text-[22.19px] text-[24.19px] text-black-900 text-center tracking-[1.45px] "
              size="txtMontserratRomanExtraBold2419"
            >
              <>
                EXPLORE
                <br />
                TRUTH
              </>
            </Button>
          </div>
        </div>
       
        <div className="absolute font-spacemono md:h-[1493px] h-[1523px] pb-[103px] right-[0] top-[0] md:w-full w-screen overflow-x-hidden">
          
            {/* <Img data-aos="fade-out"
              className="relative h-[1393px] items-center flex justify-center  inset-y-[0] left-[0] mb-auto mt-[100px] object-cover w-screen"
              src="https://necessarydisorder.files.wordpress.com/2017/11/agif2.gif"
              alt="imageFour"
            /> */}
           <video 
           height={1000} width={1800} autoPlay muted loop preload="auto"><source src="videos/generation.mp4" type="video/mp4"/></video>
            <Text data-aos="zoom-in"  className="absolute bottom-[60%] inset-x-[0] mx-auto sm:text-[20.19px] md:text-[22.19px] text-[44.19px] text-gray-300 text-center tracking-[1.45px] z-20"
              size="txtMontserratRomanExtraBold2419" >
              <>
              Leveraging Human- Machine coordination <br /> for building self-sovereign <br /> infrastructures
              </>
            </Text>
            
            {/* <Img data-aos="fade-left"
              className="absolute h-[727px] object-cover right-[0] top-[0]"
              src="images/img_capa1.png"
              alt="capaOne"
            /> */}
          
          {/* <Header/> */}

          <Text data-aos="fade-in"
            className="absolute bottom-[37%] flex items-center justify-center  sm:text-[45.15px] text-[35px] md:text-[21.15px] text-gray-400 uppercase w-screen"
            size="txtSpaceMonoBold5915"
          >
            “Trust can be broken, but Truth cannot be”
          </Text>
        </div>
        
      </div>
      
      <div className="bg-black-900">
      <AboutFooter/>

      </div>
     
    </>
  );
};

export default LandingPagePage;
