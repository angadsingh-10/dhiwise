import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img } from "../../components";
import Article from "../../components/Article";
import Cardpack from "../../components/Cardpack";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LeftPanelDropdown from "../../components/LeftPanelDropdown";
import Promo from "../../components/Promo";
import Quiz from "../../components/Quiz";
import Tools from "../../components/Tools";
import Video from "../../components/Video";

export default function ToolspagePage() {
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
              <div className="flex flex-col items-center justify-start w-full mt-4 gap-2">
                <div className="flex flex-col items-center justify-center h-[108px] w-[107px] p-[7px]">
                  <div className="h-[90px] w-[89px] relative">
                    <div className="flex flex-row justify-center items-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <div className="flex flex-col items-center justify-start w-[96%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img src="images/img_vector.svg" alt="vector_one" className="h-[90px]" />
                          <Img
                            src="images/img_vector_white_a700_01.svg"
                            alt="vector_three"
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
                      <Img src="images/img_vector_blue_gray_900.svg" alt="vector_five" className="h-2 mt-[-4px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] pt-0.5 gap-px">
                  <Text size="2xl" as="p" className="!text-gray-900 text-center">
                    Spring Tools
                  </Text>
                  <Text size="xs" as="p" className="!text-gray-900_bf_02 text-center">
                    Introducing Spring Tools that help you keep track & calculate your finances and goals.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-px bg-gray-900_3f">
                <LeftPanelDropdown
                  toolName="Goal Calculator"
                  className="flex flex-row justify-between w-full p-[15px] bg-white-A700"
                />
                <Input
                  name="loanemicalc_one"
                  placeholder="Loan EMI Calculators"
                  suffix={<Img src="images/img_chevronright.svg" alt="chevron-right" />}
                  className="w-full h-[53px] px-4"
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
            <div className="flex flex-col items-center justify-start w-full mb-6 gap-[29px]">
              <div className="flex flex-row w-full gap-4">
                <Tools className="flex flex-col items-start justify-start gap-[17px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg" />
                <Tools
                  toolImg="images/img_image_15.png"
                  toolTitle="Income Tax Savings Maximiser"
                  toolDesc="Find out the smartest tax-saving opportunities specifically for you."
                  toolAction="Get started"
                  className="flex flex-col items-start justify-start gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                />
                <Tools
                  toolImg="images/img_goal_tracker.png"
                  toolTitle="Goal Tracker"
                  toolDesc="Set your financial goals and track your progress towards them."
                  toolAction="Get the app"
                  className="flex flex-col items-start justify-start gap-8 p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Text size="md" as="p" className="!text-gray-900_89_02 tracking-[0.16px]">
                  Calculators
                </Text>
                <div className="w-full gap-4 grid-cols-3 grid min-h-[auto]">
                  <Tools
                    toolImg="images/img_goal_calculator.png"
                    toolTitle="Goal Calculator"
                    toolDesc="Find out your required ROI and how much you’ll need to invest."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[31px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_personal_loan_emi.png"
                    toolTitle="Personal Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for a Personal Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_personal_loan_emi.png"
                    toolTitle="Personal Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for a Personal Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_two_wheeler_loan.png"
                    toolTitle="Two Wheeler EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for a Two Wheeler Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_car_loan_emi_calculator.png"
                    toolTitle="Car Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for a Car Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_home_loan_emi_calculator.png"
                    toolTitle="Home Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for a Home Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_education_loan_emi.png"
                    toolTitle="Education Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for an Education Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_education_loan_emi.png"
                    toolTitle="Education Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for an Education Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                  <Tools
                    toolImg="images/img_education_loan_emi.png"
                    toolTitle="Education Loan EMI Calculator"
                    toolDesc="Play around and find out the right EMI plan for an Education Loan."
                    toolAction="Calculate now"
                    className="flex flex-col items-start justify-start w-full gap-[7px] p-[15px] border-gray-900_3f border border-solid bg-white-A700 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[24%] gap-2 py-6">
            <Promo className="flex flex-row justify-start w-full gap-2 p-[15px] border-gray-900_3f border border-solid bg-white-A700 rounded-lg" />
            <div className="flex flex-col items-center justify-start w-full mb-6 border-gray-900_3f border border-solid bg-white-A700 rounded-lg">
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
                  <Quiz className="flex flex-col items-center justify-center w-full gap-2 py-[15px] bg-white-A700" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[259px] bg-gray-900" />
      </div>
    </>
  );
}
