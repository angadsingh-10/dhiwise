import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input } from "../../components";
import Article from "../../components/Article";
import Cardpack from "../../components/Cardpack";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import LeftPanelDropdown from "../../components/LeftPanelDropdown";
import PreviousPage from "../../components/PreviousPage";
import Promo from "../../components/Promo";
import Quiz from "../../components/Quiz";
import RightPanelGoal from "../../components/RightPanelGoal";
import Video from "../../components/Video";
import Slider from "../../components/Slider";

export default function GoalCalculatorPage() {
  return (
    <>
      <Helmet>
        <title>Tools</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-100">
        <Header className="flex flex-row justify-center items-center w-full bg-white-A700 shadow-xs" />
        <div className="flex flex-row justify-start items-start w-full gap-5 max-w-[1320px]">
          <div className="flex flex-col items-center justify-start w-[24%] py-6">
            <div className="flex flex-col items-center justify-start w-full mb-6 gap-4 border-gray-900_3f border border-solid bg-white-A700 rounded-lg">
              <div className="flex flex-col items-start justify-start w-full mt-[15px] gap-4 px-4">
                <PreviousPage className="flex flex-row justify-start gap-1.5" />
                <div className="flex flex-col items-center justify-start w-full gap-1">
                  <div className="flex flex-col items-center justify-center h-[108px] w-[107px] p-[7px]">
                    <div className="h-[90px] w-[89px] relative">
                      <div className="flex flex-row justify-center items-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="flex flex-col items-center justify-start w-[96%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img src="images/img_vector.svg" alt="vectoroneone" className="h-[90px]" />
                            <Img
                              src="images/img_vector_white_a700_01.svg"
                              alt="vectorthreeone"
                              className="h-[90px] mt-[-90px] opacity-0.7"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_freepik_plants_inject_114.svg"
                          alt="freepikplants"
                          className="h-[39px] ml-[-26px]"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[94%] bottom-0 left-0 m-auto absolute">
                        <div className="flex flex-row justify-center items-center w-[88%]">
                          <Img
                            src="images/img_freepik_device_inject_114.svg"
                            alt="freepikdevice"
                            className="h-[76px] z-[1]"
                          />
                          <Img src="images/img_freepik_charac.svg" alt="freepikcharac" className="h-[74px] ml-[-9px]" />
                        </div>
                        <Img src="images/img_vector_blue_gray_900.svg" alt="vectorfiveone" className="h-2 mt-[-4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-px">
                    <Text size="xl" as="p" className="!text-gray-900 text-center">
                      Spring Tools
                    </Text>
                    <Text size="xs" as="p" className="!text-gray-900_bf_02 text-center">
                      Introducing Spring Tools that help you keep track & calculate your finances and goals.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-px bg-gray-900_3f">
                <LeftPanelDropdown
                  toolName="Goal Calculator"
                  className="flex flex-row justify-between w-full pl-[11px] pr-[15px] py-[15px] border-teal-600 border-l-4 border-solid bg-white-A700"
                />
                <Input
                  name="navmenuoneone"
                  placeholder="Loan EMI Calculators"
                  suffix={<Img src="images/img_chevronright.svg" alt="chevron-right" />}
                  className="w-full"
                />
                <LeftPanelDropdown className="flex flex-row justify-between w-full p-[15px] bg-white-A700" />
                <LeftPanelDropdown
                  toolName="Income Tax Savings Maximiser"
                  className="flex flex-row justify-between w-full p-3.5 bg-white-A700"
                />
                <LeftPanelDropdown
                  toolName="Retirement Calculator"
                  className="flex flex-row justify-between w-full p-[15px] bg-white-A700"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-1/2 py-6">
            <div className="flex flex-col items-start justify-start w-full mb-6 gap-4 p-[15px] border-gray-900_3f border border-solid bg-white-A700 rounded-lg">
              <div className="flex flex-row justify-start gap-1">
                <Text size="xs" as="p" className="!text-teal-600 !font-medium">
                  Tools
                </Text>
                <Text size="xs" as="p" className="!text-teal-600 !font-medium">
                  {`>`}
                </Text>
                <Text size="xs" as="p" className="!text-teal-600 !font-medium">
                  Goal Calculator
                </Text>
              </div>
              <Text size="2xl" as="p" className="!text-gray-900">
                Goal Calculator 
              </Text>
              <div className="grid grid-cols-2 self-stretch gap-2"><Slider></Slider>
              <Slider SliderName="Current Savings" SliderDesc="How much have you already saved up for this goal?"></Slider>
              <Slider SliderName="Tenure (years)" SliderDesc="How many years later do you wish to acheive this goal?"></Slider>
              <Slider SliderName="Expected ROI" SliderDesc="What is the expected ROI on your investment?"></Slider>
              </div>
              <p className=" pt-2 bg-teal-100 border rounded-md w-full">
                <h2>You have to invest 4,614/month
                <img src="" alt="" className=" h-16 w-16"/></h2> 
                <p className=" text-sm pb-5 border-b solid border-gray-900_02">with an ROI of 10% to reach your goal of 5,00,000 in 3 years.</p>
                <p className=" pt-2 text-gray-700">If you can not afford this investment, try adjusting your goal plan to see how you can arrive at an affordable result</p>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[24%] mt-6 gap-[7px]">
            <Promo className="flex flex-row justify-start w-full gap-2 p-[15px] border-gray-900_3f border border-solid bg-white-A700 rounded-lg" />
            <div className="flex flex-col items-center justify-start w-full border-gray-900_3f border border-solid bg-white-A700 rounded-lg">
              <div className="flex flex-row justify-start w-full p-[15px] border-gray-900_3f border-b border-solid">
                <Text size="md" as="p" className="!text-gray-900">
                  See also
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full bg-white-A700">
                <div className="flex flex-col items-center justify-start w-[90%]">
                  <div className="flex flex-col w-full gap-px">
                    <Article className="flex flex-col items-center justify-start w-full pt-4 pb-[15px] gap-[7px] border-gray-900_3f border-b border-solid bg-white-A700" />
                    <Article
                      articleTitle="The length of the article can be up to max 100 characters"
                      articleImg="images/img_img_9906_64x90.png"
                      articleType="Article"
                      articleTime="8 mins"
                      className="flex flex-col items-center justify-start w-full pt-4 pb-[15px] gap-[7px] border-gray-900_3f border-b border-solid bg-white-A700"
                    />
                    <Video className="flex flex-col items-center justify-start w-full pt-4 pb-[15px] gap-[7px] border-gray-900_3f border-b border-solid bg-white-A700" />
                    <Cardpack className="flex flex-col items-center justify-center w-full gap-2 py-3.5 border-gray-900_3f border-b border-solid bg-white-A700" />
                  </div>
                  <Quiz className="flex flex-col items-center justify-start w-full gap-2 py-[15px] bg-white-A700" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex justify-center items-center w-full mt-[47px] bg-gray-900" />
      </div>
    </>
  );
}
