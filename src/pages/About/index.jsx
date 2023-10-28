import React, {useRef, useEffect } from "react";
import Header from "../../components/Header";
import { Img, Text } from "components";
import List from "components/List";
import AOS from "aos";
import 'aos/dist/aos.css';
import AboutFooter from "components/AboutFooter";
import '../About/about.css'
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {TimelineLite, Power2} from 'gsap'
import Gallery from "components/Gallery";

const AboutPage = () => {
  
  useEffect(() => {
    AOS.init({offset: 450,
      duration: 800,});
  }, [])


  useEffect(()=>{
        tl.to(container,0,{css:{visibility:"visible"}}).to(imageReveal,1.4,{width:"0%",ease:Power2.easeInOut})
  })

  // useEffect(()=>{
  //   tl.from(image,1.4,{scale:1.6,ease:Power2.easeInOut, delay:-1.6})
  // })

  const tl = new TimelineLite()

  let container= useRef(null)
  let image = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.img-container::after')
  return (
    
    <>
    <div className="sticky z-50">
      <Header /></div>
      <div className="bg-black-900 flex flex-col z-[-5] font-spacemono items-center justify-end mx-auto pt-[66px] w-full overflow-x-hidden">
        <div className="flex flex-col items-center justify-end w-full">
          <section className="main">
            <div ref={el=>container=el} className="container" >
              <div className="img-container">
                <>
              <Img data-aos='fade-up' ref={el=>image=el}
                  className="sm:flex-1 img  h-[962px] md:h-auto  object-cover w-[100%] sm:w-full"
                  src="images/particles.jpg"
                  alt="rectangle\"
                /></>
              </div>
            </div>
          </section>
        
                <Text data-aos='zoom-in' className=" z-100 mt-[-600px] text-[200px] text-white-A700 relative font-spacemono">About</Text>
          <div data-aos="fade-up" className="sm:h-[1450px] shadow-2xl  h-[809px] md:h-[889px] max-w-[1725px] mt-[278px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                {/* <Img
                  className="sm:flex-1 h-[562px] md:h-auto  object-cover w-[18%] sm:w-full"
                  src="images/img_rectangle112.png"
                  alt="rectangle112"
                /> */}
                <Img
                  className="sm:flex-1 h-[680px] md:h-auto mt-[125px] mr-[5%] object-cover w-[97%] sm:w-full"
                  src="https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-125.jpg?t=st=1698356771~exp=1698357371~hmac=294a273e1a04bcab4614f3daaae9d5d608af4951148e25cac9fc01fd56c79746"
                  alt="rectangle104"
                />
              </div>
            </div>
            <div className="absolute  bg-blue_gray-900_66 black_900_33_white_A700_00_border border-2 border-solid bottom-[0] flex flex-col items-center justify-start p-[137px] md:px-10 sm:px-5 right-[5%]">
              <Text
                className="mb-[104px] sm:text-4xl md:text-[38px] text-[35px] text-gray-400 tracking-[8.00px] w-[95%] sm:w-full"
                size="txtSpaceMonoRegular40"
              >
                Our mission is to create a decentralized sharing economy. Where
                the economics, infrastructure and governance are ruled by its
                builders, network participants and the community.
              </Text>
            </div>
          </div>
          <Text data-aos="fade-out"
            className="mt-[242px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-400 uppercase w-[74%] sm:w-full"
            size="txtSpaceMonoBold40"
          >
            A fair permissionless world inside the decentralized internet and
            outside the internet where users manage their own identity, data and
            destiny.
          </Text>
          <div className="flex flex-col items-start justify-start mt-[317px] md:px-5 w-[88%] md:w-full">
            <div className="h-[180px] relative w-[99%] md:w-full">
              <Text data-aos="fade-right"
                className="leading-[90.00px] m-auto md:text-5xl text-6xl text-white-A700 uppercase w-full"
                size="txtSpaceMonoBold86"
              >
                WEU foundation believes in where
              </Text>
              <Img data-aos="fade-right"
                className="absolute bottom-[70%] h-3 right-[4%]"
                src="images/img_arrow1.svg"
                alt="arrowOne"
              />
            </div>
            <div data-aos="fade-up" className="bg-blue_gray-900_66 shadow-2xl shadow-blue-400 black_900_33_white_A700_00_border2 border-2 border-solid flex flex-col items-center justify-start mt-[230px] p-[117px] md:px-10 sm:px-5 w-[81%] md:w-full">
              <div data-aos="fade-out" className="flex md:flex-col flex-row gap-[58px] items-start justify-start shadow-bs w-[98%] md:w-full">
                <div className="bg-gray-400 h-7 mb-16 md:mt-0 mt-[34px] rounded-[14px] w-[2%]"></div>
                <Text 
                  className="sm:text-[37.36px] md:text-[43.36px] text-[37.36px] text-gray-400 w-[93%] sm:w-full"
                  size="txtSpaceMonoRegular4736"
                >
                  Value has been traded without permissions
                </Text>
              </div>
              <div data-aos="fade-out" className="flex md:flex-col flex-row gap-[58px] items-start justify-start mt-[43px] shadow-bs w-[98%] md:w-full">
                <div className="bg-gray-400 h-7 mb-16 md:mt-0 mt-[34px] rounded-[14px] w-[2%]"></div>
                <Text
                  className="sm:text-[37.36px] md:text-[43.36px] text-[37.36px] text-gray-400 w-[93%] sm:w-full"
                  size="txtSpaceMonoRegular4736"
                >
                  All the technologies build are organised by community and
                  maintain by democracy.
                </Text>
              </div>
              <div data-aos="fade-out" className="flex md:flex-col flex-row gap-[57px] items-start justify-start mt-[129px] shadow-bs w-[98%] md:w-full">
                <div className="bg-gray-400 h-7 mb-16 md:mt-0 mt-[34px] rounded-[14px] w-[2%]"></div>
                <Text
                  className="sm:text-[37.36px] md:text-[43.36px] text-[37.36px] text-gray-400 w-[93%] sm:w-full"
                  size="txtSpaceMonoRegular4736"
                >
                  markets build to share & upgrade financial opportunities for
                  everyone
                </Text>
              </div>
              <div data-aos="fade-out" className="flex md:flex-col flex-row gap-[57px] items-start justify-start mb-4 mt-[129px] shadow-bs w-[98%] md:w-full">
                <div className="bg-gray-400 h-7 mb-[63px] md:mt-0 mt-[34px] rounded-[14px] w-[2%]"></div>
                <Text
                  className="sm:text-[37.36px] md:text-[43.36px] text-[37.36px] text-gray-400 w-[93%] sm:w-full"
                  size="txtSpaceMonoRegular4736"
                >
                  A self sovereign future with self-upgradable applications
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-14 items-center justify-end md:ml-[0] ml-[147px] mt-[96px] w-[92%] md:w-full">
              
              <Text data-aos="fade-right"
                className="sm:text-4xl md:text-[38px] text-[30px] text-gray-400 w-[67%] sm:w-full"
                size="txtSpaceMonoRegular40"
              >
                A decentralized ecosystem where communities organize, software
                incentivizes, technology updates, ecosystem maxi economized, and
                together everyone builds a consensus over the foundation
                movement
              </Text>
              <Img data-aos="fade-out"
                className="h-[595px] sm:h-auto  object-cover w-[55%] md:w-full"
                src="images/globe.png"
                alt="unsplash1oyxqbz"
              />
            </div>
            <div data-aos="fade-right" className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-start mt-[93px] w-[74%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text 
                  className="md:text-5xl text-[66px] text-white-A700 uppercase"
                  size="txtSpaceMonoBold86"
                >
                  MEET OUR TEAM
                </Text>
              </div>
              <Img data-aos="fade-right" className="h-3 font-bold" src="images/img_arrow1.svg" alt="arrowTwo" />
            </div>
          </div>
          <div data-aos="fade-out" className="flex justify-center items-center flex-col ml-[530px] w-[100vw]">
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[147px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1542px] mr-auto mt-[84px] md:px-5 w-full"
            orientation="horizontal"
          >
           
            <div
              className="bg-cover bg-no-repeat bg-white-A700 shadow-2xl shadow-blue-400 flex flex-1 flex-col h-[400px] sm:h-auto items-center justify-start rounded-[50%] w-full"
              style={{ backgroundImage: "url('images/pardh.png')" }}
            >
            </div>
            <div
              className="bg-cover bg-no-repeat bg-white-A700 shadow-2xl shadow-blue-400 flex flex-1 flex-col h-[400px] sm:h-auto items-center justify-start rounded-[50%] w-full"
              style={{ backgroundImage: "url('images/fard.png')" }}
            >
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1397px] mt-[18px] mx-auto md:px-5 w-full">
           
            <Text
              className="sm:ml-[0] ml-[40px] sm:text-[35.34px] md:text-[37.34px] text-[39.34px] text-center text-gray-400 tracking-[-3.15px]"
              size="txtSpaceMonoBold3934"
            >
              Pradhap M
            </Text>
            <Text
              className="sm:ml-[0] ml-[346px] sm:text-[35.34px] md:text-[37.34px] text-[39.34px] text-center text-gray-400 tracking-[-3.15px]"
              size="txtSpaceMonoBold3934"
            >
              Fardeen Khan
            </Text>
          </div>
          </div>
          <div className="flex flex-col font-inter h-full justify-start mt-[17px] md:px-5 w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[162px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[95%]"
              orientation="horizontal"
            >
             
              
              <div className="flex flex-col gap-[10.63px] items-start justify-start w-[396px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[260px] text-[17.01px] text-center text-gray-400 w-full"
                    size="txtInterMedium1701"
                  >
                    COO
                  </Text>
                </div>
               
              </div>
              <div className="flex flex-col gap-[10.63px] items-start justify-start w-[396px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[300px] text-[17.01px] text-center text-gray-400 w-full"
                    size="txtInterMedium1701"
                  >
                    CONSENSUS RESEARCHER
                  </Text>
                </div>
               
              </div>
            </List>
           
            
            <div className="flex sm:flex-col flex-row font-spacemono sm:gap-10 pb-10 items-center justify-between md:ml-[0] mt-[281px] w-[38%] md:w-full">
              <Text data-aos="fade-right"
                className="md:text-5xl ml-20 text-[66px] text-white-A700 uppercase"
                size="txtSpaceMonoBold86"
              >
                ROADMAP
              </Text>
              <Img data-aos="fade-right"
                className="h-3"
                src="images/img_arrow1.svg"
                alt="arrowFive"
              />
            </div>
            <Gallery/>
            {/* <div data-aos="fade-left" className="font-spacemono shadow-2xl shadow-white-A700 z-[1] h-[756px] md:h-[978px] md:ml-[0] ml-[425px] mt-[126px] relative w-[61%] md:w-full">
              <Img
                className="absolute h-[752px] inset-y-[0] z-1 left-[0] my-auto object-cover w-[62%]"
                src="images/img_unsplash8o9bxnht2e.png"
                alt="unsplash8o9bxnh"
              />
              <div className="absolute z-20 bg-white-A700 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[19px] top-[0] w-full">
                <Text
                  className="ml-11 md:ml-[0] mt-[18px] md:text-5xl text-[66px] text-center text-gray-700"
                  size="txtSpaceMonoBold86Gray700"
                >
                  Phase 01
                </Text>
              </div>
              <div className="absolute bg-blue_gray-900_66 black_900_33_white_A700_00_border3 border border-solid bottom-[0] flex sm:flex-col flex-row md:gap-[53px] inset-x-[0] items-start justify-between mx-auto p-[21px] sm:px-5 rounded-[14px] w-full">
                <Text
                  className="sm:mt-0 mt-[98px] ml-[45px] text-3xl w-[150%] sm:text-[32px] md:text-[34px] text-gray-400 text-right"
                  size="txtSpaceMonoRegular36"
                >
                  <>
                    WEU FOUNDATION WEBSITE
                    <br /> Partnering with like minded companies
                    <br /> Pre-Seeding funding.
                    <br /> Project building for multiple companies
                  </>
                </Text>
                <Img
                  className="h-[479px] md:h-auto  ml-[250px] z-[0] mr-[50px]  sm:mt-0 mt-[78px] w-[25%]"
                  src="https://64.media.tumblr.com/7bc12a0e6c1790209cecd987dbc5e4a4/e4659a1cc7b07204-d3/s540x810/53191da69c48b0122b56d4e15879c120078fe1cf.gifv"
                  alt="rectangle106"
                />
              </div>
            </div>
            <div data-aos="fade-right" className="flex shadow-2xl shadow-white-A700 md:flex-col flex-row font-spacemono md:gap-10 items-start justify-between ml-[11%] md:ml-[0] mt-[259px] w-[98%] md:w-full">
              <div className="md:h-[852px] h-[756px] relative w-[61%] md:w-full">
                <Img
                  className="absolute h-[752px] inset-y-[0] my-auto object-cover right-[0] w-[62%]"
                  src="images/img_unsplash8o9bxnht2e_852x693.png"
                  alt="unsplash8o9bxnh_One"
                />
                <div className="absolute z-10 bg-white-A700 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[26px] sm:px-5 top-[0] w-full">
                  <Text
                    className="ml-7 md:ml-[0] mt-1 md:text-5xl text-[66px] text-gray-700"
                    size="txtSpaceMonoBold86Gray700"
                  >
                    Phase 02
                  </Text>
                </div>
                <div className="absolute bg-blue_gray-900_66 black_900_33_white_A700_00_border4 border border-solid bottom-[0] flex sm:flex-col flex-row gap-[53px] inset-x-[0] items-start justify-end mx-auto md:pl-10 sm:pl-5 pl-[19px] py-[59px] rounded-[14px] w-full">
                  <Img
                    className="md:flex-1 h-[486px] sm:h-auto sm:mt-0 my-15 object-cover w-[35%] md:w-full"
                    src="https://necessarydisorder.files.wordpress.com/2018/07/agif5.gif"
                    alt="rectangle108"
                  />
                  <Text
                    className="sm:mt-0 mt-[51px] text-3xl sm:text-[32px] md:text-[34px] text-gray-400"
                    size="txtSpaceMonoRegular36"
                  >
                    <>
                      Building a community of Developers
                      <br />
                      Building Orchestra Infrastructure
                      <br />
                      Building critical Liquidity
                      <br />
                      Deploying Critical Liquidity in Test net
                    </>
                  </Text>
                </div>
              </div>
              <Text
                className="md:mt-0 mt-[303px] md:text-5xl text-[70px] text-black-900 uppercase"
                size="txtSpaceMonoBold70"
              >
                Stage 2
              </Text>
            </div>
            <div data-aos="fade-left" className="font-spacemono shadow-2xl shadow-white-A700 h-[693px] md:h-[955px] md:ml-[0] ml-[333px] mt-[266px] relative w-[71%] md:w-full">
              <div className="absolute md:h-[689px] h-[693px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[689px] inset-y-[0] left-[0] my-auto object-cover w-[62%]"
                  src="images/img_unsplash8o9bxnht2e.png"
                  alt="unsplash8o9bxnh_Two"
                />
                <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[26px] sm:px-5 top-[0] w-full">
                  <Text
                    className="md:ml-[0] ml-[51px] mt-1 md:text-5xl text-[66px] text-center text-gray-700"
                    size="txtSpaceMonoBold86Gray700"
                  >
                    Phase 03
                  </Text>
                </div>
                <div className="absolute bg-blue_gray-900_66 black_900_33_white_A700_00_border5 border border-solid bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto p-[86px] md:px-10 sm:px-5 rounded-[14px] w-full">
                  <Img
                    className="h-[437px] md:h-auto mr-[-70px]  mb-[-47px] mt-[16px] object-cover w-[42%] "
                    src="https://necessarydisorder.files.wordpress.com/2018/07/agif3.gif"
                    alt="rectangle107"
                  />
                </div>
              </div>
              <Text
                className="absolute bottom-[15%] left-[0] text-3xl sm:text-[32px] md:text-[34px] text-gray-400 text-right"
                size="txtSpaceMonoRegular36"
              >
                <>
                  Deploying critical liquidity in main net
                  <br />
                  Research for Prognosis.Layer and Introspect
                </>
              </Text>
            </div>
            <div data-aos="fade-right" className="font-spacemono shadow-2xl shadow-white-A700 h-[615px] ml-[10%] md:h-[892px] mt-[277px] relative w-[71%] md:w-full">
              <Img
                className="absolute h-[615px] inset-y-[0] my-auto object-cover right-[0] w-[62%]"
                src="images/img_unsplash8o9bxnht2e_852x693.png"
                alt="unsplash8o9bxnh_Three"
              />
              <div className="absolute bg-white-A700 flex mt-[-17px] rounded-[14px] flex-col inset-x-[0] items-start justify-end mx-auto p-[26px] sm:px-5 top-[0] w-full">
                <Text
                  className="ml-8 md:ml-[0] mt-1 md:text-5xl text-[66px] text-gray-700"
                  size="txtSpaceMonoBold86Gray700"
                >
                  Phase 04
                </Text>
              </div>
              <div className="absolute bg-blue_gray-900_66 black_900_33_white_A700_00_border6 border border-solid bottom-[0] flex sm:flex-col flex-row gap-[53px] inset-x-[0] items-start justify-start mx-auto p-[59px] md:px-10 sm:px-5 rounded-[14px] w-full">
                <Img
                  className="sm:flex-1 h-[440px] md:h-auto mb-[-55px] ml-[-57px] sm:mt-0 mt-32 object-cover w-[42.2%] sm:w-full"
                  src="https://necessarydisorder.files.wordpress.com/2018/03/lotslittleconnections.gif"
                  alt="rectangle115"
                />
                <Text
                  className="sm:flex-1 sm:mt-0 mt-[291px] text-4xl sm:text-[32px]  md:text-[34px] text-gray-400 w-[42%] sm:w-full"
                  size="txtSpaceMonoRegular36"
                >
                  Initial development of introspect{" "}
                </Text>
              </div>
            </div> */}
            <div className="flex md:flex-col flex-row font-spacemono md:gap-10 items-center justify-between md:ml-[0]  mt-[368px] w-[54%] md:w-full">
              <Text data-aos="fade-right"
                className="md:text-5xl ml-20 text-[66px] text-white-A700 uppercase"
                size="txtSpaceMonoBold86"
              >
                OUR PARTNERS
              </Text>
              <Img data-aos="fade-right"
                className="h-3"
                src="images/img_arrow1.svg"
                alt="arrowOne_One"
              />
            </div>
            <div data-aos="fade-up" className=" flex md:flex-col flex-row md:gap-10 gap-[290px] items-center justify-end md:ml-[0] ml-[173px] h-[40vh] mt-[146px] w-[67%] md:w-full">
              <div className="md:h-[249px] h-[273px] relative w-[28%] md:w-full">
                <Img
                  className="z-5 absolute bottom-[0] shadow-2xl shadow-blue-400 h-[237px] object-cover right-[0] w-[237px]"
                  src="images/img_image10.png"
                  alt="imageTen"
                />
                <div className=" z-3 absolute border border-solid shadow-2xl shadow-blue-400 border-white-A700 h-[249px] left-[0] top-[0] w-[92%]"></div>
              </div>
              <div className="md:h-[249px] h-[284px] relative w-[28%] md:w-full">
                <Img
                  className="z-5 absolute bottom-[0] shadow-2xl shadow-blue-400 h-[248px] object-cover right-[0] w-[81%]"
                  src="images/img_image12.png"
                  alt="imageTwelve"
                />
                <div className=" z-3 absolute border border-solid shadow-2xl shadow-blue-400 border-white-A700 h-[249px] left-[0] top-[0] w-[92%]"></div>
              </div>
            </div>
            <div className="flex flex-row font-spacemono sm:gap-10 gap-[646px] items-start justify-start md:ml-[0] ml-[237px] mt-[15px] w-[58%] md:w-full">
              <Text
                className="ml-[150px] mt-[15px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtSpaceMonoRegular50"
              >
                DVUE
              </Text>
              <Text
                className="mb-[15px] ml-[-185px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtSpaceMonoRegular50"
              >
                SOPAY
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-spacemono md:gap-10 items-start justify-between md:ml-[0] ml-[86px] w-full">
              <Text
                className="ml-[-30px] sm:ml-[0] mr-[0] sm:mt-0 mt-[0px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-400 w-1/2"
                size="txtSpaceMonoRegular36"
              >
                Social Finance Marketplace
              </Text>
              <Text
                className="mb-[18px] mr-[320px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-400 w-[450px]"
                size="txtSpaceMonoRegular36"
              >
                Pay crypto anywhere
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-900 p-10 ">
      <AboutFooter/>

      </div>
    </>
  );
};

export default AboutPage;
