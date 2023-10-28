import React,{useEffect} from "react";

import { Button, Img, Line, List, Text } from "components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header'
import AboutFooter from "components/AboutFooter";

const OrchestraPage = () => {
  useEffect(() => {
    AOS.init({offset: 250,
      duration: 800,});
  }, [])
  return (
    <>
    
    <Header/>
    
      <div className="bg-black-900 flex flex-col items-center justify-start mx-auto md:pl-10 sm:pl-5 pl-[45px] py-[45px] w-[100vw] overflow-x-hidden">
      
        <div className="flex flex-col items-start  mb-[49px] mt-[-0px] mx-auto w-[100vw] ">
          
          <div className="font-spacemono md:h-[1124px] h-[1017px] md:ml-[0] ml-[0px] relative w-[100%] md:w-full">
           
              {/* <Img data-aos="fade-in"
                className="h-[1124px] m-auto object-cover w-full"
                src="https://necessarydisorder.files.wordpress.com/2018/01/agif8.gif"
                alt="imageSeven"
              /> */}
              <video 
           height={1000} width={3600} autoPlay muted loop preload="auto"><source src="videos/orchestra video.mp4" type="video/mp4"/></video>
              <Text data-aos="zoom-in"
                className="absolute flex inset-[0] mt-[-310px] items-center justify-center mb-auto ml-auto mx-auto md:text-5xl text-[140px] text-white-A700"
                size="txtSpaceMonoBold160"
              >
                ORCHESTRA
              </Text>
           
           
            
          </div>
          <div data-aos="fade-in" className=" hover:shadow-xl  cursor-pointer flex md:flex-col mt-20 flex-row font-spacemono gap-5 md:gap-[22px] items-center justify-center md:ml-[0] ml-[34%] p-2.5 w-[29%] md:w-full">
            <Text
              className="flex items-center shadow-2xl shadow-blue-400 justify-center cursor-pointer md:text-3xl sm:text-[28px] text-[32px] text-black-900 bg-white-A700 p-3"
              size="txtSpaceMonoBold32"
            >
              GO TO ORCHESTRA
            </Text>
            <Img
              className="h-[30px] mr-[7px] w-[30px]"
              src="images\img_upload.svg"
              alt="upload"
            />
          </div>
          <div data-aos='fade-up' className="w-[100%] mt-[20%] bg-black-900 text-gray-400 text-[40px] font-bold flex font-spacemono justify-center items-center ">
            <Text className="text-center flex justify-center items-center">
            An efficient decentralised market that makes <br /> economic growth for the PARTICIPATORS,<br /> BUILDERS and LIQUIDITY PROVIDERS.</Text>
          </div>
          <div className="flex flex-col font-spacemono items-center justify-center ml-[0] mt-[301px] md:w-full w-screen">
            <Button data-aos="fade-out"
              className="bg-transparent cursor-pointer flex flex-row items-center justify-center leading-[normal] mr-[7%] relative md:text-5xl text-[50px] text-center  transition-all delay-50 ease-in-out shadow-2xl shadow-blue-400 text-white-A700 w-[90%]"
              size="md"
            >
              A middleware that builds on Proof of CODE
            </Button>
            <div className="flex md:flex-col flex-row md:gap-10 gap-x-20 items-start justify-between mr-[8%] mt-[77px] w-full">
              <div className="flex flex-col items-center justify-start">
                <Text data-aos="fade-right"
                  className="font-normal leading-[45.00px] text-2xl sm:text-4xl md:text-[38px] text-gray-400 text-right text-shadow-ts w-[70%]"
                  size="txtSpaceMonoRegular40"
                >
                  
                  Protocols can build around liquidity, leverage, lending and
                  borrowing, AMM, scalability solutions, Block space, zero
                  knowledge interoperability for the web3 infrastructure.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Text data-aos="fade-left"
                  className="flex flex-row font-normal items-end justify-end leading-[40.00px] mr-[30%] text-2xl sm:text-4xl md:text-[38px] text-gray-400 w-[95%]"
                  size="txtSpaceMonoRegular40"
                >
                  <>
                    Scales blockchain development and revenue.
                    <br />A network to restake your capital to earn additional
                    capital.
                    <br />
                    Incentivizes network of developers and validators in order
                    to generate and build a secure market to generate code for
                    protocols.
                    <br />A network to bootstrap development and capital to
                    build your own protocol.
                  </>
                </Text>
              </div>
            </div>
            <Text data-aos="fade-in"
              className="mr-[7%] mt-[202px]  shadow-2xl shadow-blue-400 md:text-5xl text-[50px] text-center text-white-A700 w-[97%] sm:w-full"
              size="txtSpaceMonoRegular88"
            >
              FRUITS & FLOWERS Grown within ORCHESTRA
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[109px] w-[98%] md:w-full">
              <div data-aos="fade-left" className="bg-white-A700 h-[30px] md:mt-0 mt-[254px] rounded-[50%] w-[40px]"></div>
              <Button data-aos="fade-left"
                className="!bg-transparent cursor-pointer flex font-bold items-center justify-center min-w-[1000px] md:min-w-full md:mt-0 mt-[214px] md:text-5xl text-[70px] text-center text-white-A700 uppercase"
                color="white_A700"
                variant="underline"
              >
                CRITICAL . LIQUIDITY
              </Button>
              <Img data-aos="fade-right"
                className="h-[259px] md:h-auto mb-[59px] md:ml-[0] ml-[50px] object-cover w-[500px] sm:w-full"
                src="images/img_vector.png"
                alt="vector"
              />
            </div>
          </div>
          <div className="md:h-[1836px] h-[1875px] sm:h-[2041px] mt-[182px] relative w-[1875px] md:w-full">
            <div className="flex md:h-[1654px] sm:h-[1859px] h-[1875px] items-center justify-center m-auto w-[1875px] md:w-full">
              <div className="absolute flex flex-col font-spacemono h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[772px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[87%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text data-aos="fade-right"
                        className="leading-[45.00px] mr-[390px] text-3xl sm:text-4xl md:text-[38px] text-gray-400 text-right w-[90%]"
                        size="txtSpaceMonoRegular40"
                      >
                        Critical. liquidity is a liquidity layer for defi
                        positions / defi pools for volatility offsets for
                        preferred blocktime{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text data-aos="fade-left"
                        className="leading-[45.00px] mr-[580px] text-3xl sm:text-4xl md:text-[38px] text-gray-400 w-3/5"
                        size="txtSpaceMonoRegular40"
                      >
                        <span className="text-gray-400 font-spacemono text-left font-normal">
                          Defi pools/protocols are let to stake a significant
                          amount of their supply in order to use
                          critical.Liquidity to maintain balance within their
                          different defi pools as a{" "}
                        </span>
                        <span className="text-gray-400 font-spacemono text-left font-bold">
                          critical market maker
                        </span>
                        <span className="text-gray-400 font-spacemono text-left font-normal">
                          {" "}
                          (cmm)
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="font-montserrat h-[600px] relative w-full">
                    <Img data-aos="fade-in"
                      className="h-[600px] m-auto object-cover w-full"
                      src="images/img_image9.png"
                      alt="imageNine"
                    />
                    <Button data-aos="fade-out" className="bg-transparent cursor-pointer flex flex-row font-extrabold items-center justify-center leading-[normal] left-[0] relative sm:text-[20.19px] mt-[-540px] md:text-[22.19px] text-[24.19px] text-center text-white-A700 tracking-[1.45px] ml-[35%]">
                      <>
                        BUILD
                        <br />
                        HERE
                      </>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[340px] inset-x-[0] justify-start mx-auto top-[23%] w-[93%]">
                <div data-aos="fade-out" className="flex flex-col font-inter gap-[17.57px] h-[212px] md:h-auto items-center justify-center max-w-[277px] text-left w-full">
                  <div className="flex flex-row gap-[17.57px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] text-[#fff] opacity-[0.4] text-[30.74px] text-left text-white-A700_7e uppercase w-auto"
                      size="txtInterRegular3074"
                    >
                      GITHUB
                    </Text>
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] text-[30.74px] text-left text-white-A700 uppercase w-auto"
                      size="txtInterRegular3074WhiteA700"
                    >
                      TEST
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17.57px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] text-[#fff] opacity-[0.4] text-[30.74px] text-white-A700_7e uppercase w-auto"
                      size="txtInterRegular3074"
                    >
                      RESEARCH
                    </Text>
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] text-[30.74px] text-white-A700 uppercase w-auto"
                      size="txtInterRegular3074WhiteA700"
                    >
                      TEST
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17.57px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] opacity-[0.4] text-[30.74px] text-[#fff] text-white-A700_7e uppercase w-auto"
                      size="txtInterRegular3074"
                    >
                      WEBSITE
                    </Text>
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] text-[30.74px] text-white-A700 uppercase w-auto"
                      size="txtInterRegular3074WhiteA700"
                    >
                      TEST
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17.57px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] opacity-[0.4] text-[30.74px] text-[#fff] text-white-A700_7e uppercase w-auto"
                      size="txtInterRegular3074"
                    >
                      FORUM
                    </Text>
                    <Text
                      className="sm:text-[26.74px] md:text-[28.74px] text-[30.74px] text-white-A700 uppercase w-auto"
                      size="txtInterRegular3074WhiteA700"
                    >
                      TEST
                    </Text>
                  </div>
                </div>
                <Text data-aos="fade-up"
                  className="block flex-row ml-[-80px] font-bold items-center justify-center md:ml-[0] sm:text-[40px] md:text-[46px] text-[40px] text-center text-white-A700 tracking-[10.00px] w-[85%]"
                  size="txtSpaceMonoBold50"
                >
                  Grow your own fruit & blossom flower on top of an
                  incentivizing and human coordination network build to
                  bootstrap your network through security of capital and
                  development.
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] flex sm:text-[40px] ml-[-95px] md:text-[46px] text-[37px]  text-white-A700 tracking-[10.00px] w-[86%] "
                size="txtInterExtraBold50"
              >
                For the nutrition to grow your own fruit and flower
              </Text>
            </div>
            <Img data-aos="fade-in"
              className="absolute h-[753px] mt-[200px] object-cover right-[0] top-[9%]"
              src="images/img_topographic1.png"
              alt="topographicOne"
            />
          </div>
          <Button  className="bg-transparent cursor-pointer font-extrabold font-montserrat leading-[normal] md:ml-[0] ml-[44%] mt-[141px] sm:text-[20.19px] md:text-[22.19px] text-[24.19px] text-center text-white-A700 tracking-[1.45px]">
            <>
              APPLY
              <br />
              HERE
            </>
          </Button>
        </div>
        
      </div>
      <div className="bg-black-900">
      <AboutFooter/>

      </div>
    </>
  );
};

export default OrchestraPage;
