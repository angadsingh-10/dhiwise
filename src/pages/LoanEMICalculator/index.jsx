import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Article from "../../components/Article";
import Cardpack from "../../components/Cardpack";
import EMI from "../../components/EMI";
import Footer from "../../components/Footer";
import LeftPanelDropdown from "../../components/LeftPanelDropdown";
import Navbar from "../../components/Navbar";
import PreviousPage from "../../components/PreviousPage";
import Promo from "../../components/Promo";
import Quiz from "../../components/Quiz";
import ToolLinks from "../../components/ToolLinks";
import Video from "../../components/Video";
import { Link } from "react-router-dom";
import ToolspagePage from "pages/Toolspage";
import GoalCalculator from "pages/GoalCalculator";
import { withRouter } from 'react-router-dom';
import DropdownMenu from "../../components/DropdownMenu";
export default function LoanEMICalculatorPage() {
  
  return (
    <>
      <Helmet>
        <title>Tools</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-100">
        <Navbar className="flex flex-row justify-center items-center w-full bg-white-A700 shadow-xs" />
        <div className="flex flex-row justify-start items-start w-full gap-5 max-w-[1320px]">
          <div className="flex flex-col items-center justify-start w-[24%] py-6">
            <div className="flex flex-col items-center justify-start w-full mb-6 gap-4 border-gray-900_3f border border-solid bg-white-A700 rounded-lg">
              <div className="flex flex-col items-start justify-start w-full mt-[15px] gap-4 px-4">
              <Link to="/toolspage">
                <PreviousPage className="flex flex-row justify-start gap-1.5" />
                </Link> 
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
              <div className="flex flex-col justify-start w-full gap-px bg-gray-900_3f">
              <Link to="/goalcalculator"><LeftPanelDropdown
                  toolName="Goal Calculator" 
                  className="flex flex-row justify-between w-full p-[15px] bg-white-A700"
                /></Link>
                <div className="flex flex-col items-center justify-start w-full gap-px bg-gray-900_3f">
                  <LeftPanelDropdown
                    toolName="Loan EMI Calculators"
                    className="flex flex-row justify-between w-full p-[15px] bg-white-A700"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-px">
                  
                    <DropdownMenu/>

                  </div>
                </div>
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
                Personal Loan EMI Calculator
              </Text>
              <Img src="images/img_box_494x618.png" alt="boxoneone_one" className="w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[24%] mt-6 gap-[7px]">
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <EMI className="flex flex-col items-center justify-start w-full gap-4 p-[15px] border-teal-600 border border-solid bg-white-A700 rounded-lg" />
              <div className="h-px w-full bg-gray-900_3f" />
            </div>
            <Promo className="flex flex-row justify-start w-full gap-2 p-[15px] border-gray-900_3f border border-solid bg-white-A700 rounded-lg" />
            <div className="flex flex-col items-center justify-start w-full border-gray-900_3f border border-solid bg-white-A700 rounded-lg">
              <div className="flex flex-row justify-start w-full p-[15px] border-gray-900_3f border-b border-solid bg-white-A700">
                <Text size="md" as="p" className="!text-gray-900">
                  More tools
                </Text>
              </div>
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col w-[90%] gap-px">
                  <ToolLinks className="flex flex-row justify-center w-full py-4 bg-white-A700" />
                  <ToolLinks
                    toolTitle="Two-Wheeler EMI Calculator"
                    toolImg="images/img_two_wheeler_loan.png"
                    className="flex flex-row justify-center w-full py-4 border-gray-900_3f border-t border-solid bg-white-A700"
                  />
                </div>
              </div>
            </div>
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
        <Footer className="flex justify-center items-center w-full mt-[47px] bg-gray-900" />
      </div>
    </>
  );
}
