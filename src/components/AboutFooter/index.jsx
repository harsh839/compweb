import React from "react";

import { Img,   Text } from "components";
import Line from '../Line'
import List from '../List'


const AboutFooter = (props) => {
  return (
    <>
    <div></div>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start py-10 border-2 cursor-pointer w-full">
         <a href="https://weu.foundation"> <Text
            className="text-sm text-white-A700 uppercase"
            size="txtInterRegular14"
          >
            {props?.useremail}
          </Text></a>
        </div>
        <div className="flex md:flex-col flex-row  gap-[40.07px] items-center justify-start w-auto md:w-full py-5">
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-3/4 md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-[40.07px] items-center justify-start w-auto">
              <div className="flex flex-row gap-[10.02px] items-center justify-start w-auto">
               <a href="https://www.linkedin.com/company/weu-foundation/" className="flex"> <Text
                  className="text-sm cursor-pointer text-white-A700 uppercase w-auto"
                  size="txtInterRegular14"
                >
                  {props?.linkedin}
                </Text>
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_upload.svg"
                  alt="upload"
                /></a>
              </div>
              <Line className="bg-white-A700_68 h-[30px] w-px" />
            </div>
            <div className="flex flex-row gap-[40.07px] items-center justify-start w-auto">
              <div className="flex flex-row gap-[10.02px] items-center justify-start w-auto">
               <a href="https://chat.whatsapp.com/HohkUD3Yit6JLHXqhoOKKl" className="flex"> <Text
                  className="text-sm cursor-pointer text-white-A700 uppercase w-auto"
                  size="txtInterRegular14"
                >
                  {props?.whatsapp}
                </Text>
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_upload.svg"
                  alt="upload"
                /></a>
              </div>
              <Line className="bg-white-A700_68 h-[30px] w-px" />
            </div>
            <div className="flex flex-row gap-[40.07px] items-center justify-start w-auto">
              <div className="flex flex-row gap-[10.02px] items-center justify-start w-auto">
              <a href="https://discord.gg/eZ3eqkz2"> <Text
                  className="text-sm cursor-pointer text-white-A700 uppercase w-auto"
                  size="txtInterRegular14"
                >
                  {props?.discord}
                </Text></a> 
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_upload.svg"
                  alt="upload"
                />
              </div>
              <Line className="bg-white-A700_68 h-[30px] w-px" />
            </div>
            <div className="flex flex-row gap-[40.07px] items-center justify-start w-auto">
              <div className="flex flex-row gap-[10.02px] items-center justify-start w-auto">
              <a href="http://linktr.ee/weufoundationsocial" className="flex">  <Text
                  className="text-sm cursor-pointer text-white-A700 uppercase w-auto"
                  size="txtInterRegular14"
                >
                  {props?.linktree}
                </Text>
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_upload.svg"
                  alt="upload"
                /></a>
              </div>
              <Line className="bg-white-A700_68 h-[30px] w-px" />
            </div>
          </List>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-row gap-[10.02px] items-center justify-start w-auto">
             <a href="https://twitter.com/weufoundation?t=RqHH6EVuddu0qMGBg_LxMw&s=09" className="flex"> <Text
                className="text-sm cursor-pointer text-white-A700 uppercase w-auto"
                size="txtInterRegular14"
              >
                {props?.twitter}
              </Text>
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_upload.svg"
                alt="upload"
              /></a>
            </div>
          </div>
          <Img 
            className="h-[30px] cursor-pointer w-[30px]"
            src="images/img_arrowup.svg"
            alt="arrowup"
          />
        </div>
      </div>
    </>
  );
};

AboutFooter.defaultProps = {
  useremail: "☻weu.foundation",
  linkedin: "Linkedin",
  whatsapp: "whatsapp",
  discord: "Discord",
  linktree: "linktree",
  twitter: "Twitter",
};

export default AboutFooter;
