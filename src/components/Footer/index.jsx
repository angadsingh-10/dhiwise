import React from "react";
import { Heading, Text, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full pb-[30px] mx-auto max-w-[1320px]">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row justify-center items-center w-full pt-8 pb-[31px] gap-[498px] border-white-A700_3f border-b border-solid">
            <Text size="lg" as="p" className="w-[37%] !text-white-A700_89_01">
              <span className="text-white-A700_e5">Our vision</span>
              <span className="text-white-A700_89_01">
                is to help bring about a world that confidently makes smart financial decisions.
              </span>
            </Text>
            <div className="flex flex-col items-start justify-start w-[26%] gap-1.5">
              <Text as="p" className="!text-white-A700_e5 text-center !font-medium">
                Download the app
              </Text>
              <div className="flex flex-row justify-start gap-4">
                <Img src="images/img_download_play_store.png" alt="downloadplay" className="w-[48%] object-cover" />
                <Img src="images/img_download_app_store.png" alt="downloadapp_one" className="w-[48%] object-cover" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start w-full mt-8">
            <div className="flex flex-col items-center justify-start w-[22%] gap-8">
              <Img src="images/img_logo_white_a700.svg" alt="logo_three" className="h-12" />
              <div className="flex flex-col items-start justify-start w-[96%] gap-[15px]">
                <Text size="md" as="p" className="text-center">
                  About Us
                </Text>
                <div className="flex flex-row justify-between w-full">
                  <Img src="images/img_ic_baseline_whatsapp.svg" alt="icbaseline_one" className="h-8 w-8" />
                  <Img src="images/img_mdi_instagram.svg" alt="mdiinstagram" className="h-8 w-8" />
                  <Img src="images/img_mdi_linkedin.svg" alt="mdilinkedin_one" className="h-8 w-8" />
                  <Img src="images/img_ic_baseline_facebook.svg" alt="icbaseline" className="h-8 w-8" />
                  <Img src="images/img_mdi_youtube.svg" alt="mdiyoutube_one" className="h-8 w-8" />
                  <Img src="images/img_mdi_twitter.svg" alt="mditwitter_one" className="h-8 w-8" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start w-[65%]">
              <div className="flex flex-col items-start justify-start w-[24%] gap-1.5">
                <Text size="md" as="p" className="!text-white-A700_89">
                  Advisory
                </Text>
                <div className="flex flex-row justify-start w-full">
                  <ul className="flex flex-col items-start justify-start w-[93%]">
                    <li>
                      <a href="#">
                        <Text as="p">What is financial advisory?</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-1.5">
                        <Text as="p">Featured Products</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[9px]">
                        <Text as="p">Products Listing</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-1.5">
                        <Text as="p">Service Providers</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-2">
                        <Text as="p">Get in touch</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="flex flex-col items-start justify-start w-[21%] mt-0.5 ml-4">
                <li>
                  <Text size="md" as="p" className="!text-white-A700_89">
                    Academy
                  </Text>
                </li>
                <li>
                  <a href="#" className="mt-[5px]">
                    <Text as="p">Personal Finance Course</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[9px]">
                    <Text as="p">Explore all topics</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-2">
                    <Text as="p">Savings & Budgeting</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-1.5">
                    <Text as="p">Insurance</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-2">
                    <Text as="p">Loans</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-2">
                    <Text as="p">Investment</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[7px]">
                    <Text as="p">Taxation</Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-2.5">
                    <Text as="p">Economy</Text>
                  </a>
                </li>
              </ul>
              <div className="flex flex-col items-start justify-start w-[24%] ml-[43px] gap-[7px]">
                <Text size="md" as="p" className="!text-white-A700_89">
                  Tools
                </Text>
                <div className="flex flex-col items-start justify-start w-full gap-2">
                  <a href="#">
                    <Text as="p">Retirement Calculator</Text>
                  </a>
                  <a href="#">
                    <Text as="p">Goal Calculator</Text>
                  </a>
                  <Text as="p">Personal Loan EMI Calculator</Text>
                  <a href="#">
                    <Text as="p">Two Wheeler EMI Calculator</Text>
                  </a>
                  <a href="#">
                    <Text as="p">Car Loan EMI Calculator</Text>
                  </a>
                  <a href="#">
                    <Text as="p">Home Loan EMI Calculator</Text>
                  </a>
                  <Text as="p">Education Loan EMI Calculator</Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[24%] ml-4 gap-[7px]">
                <Text size="md" as="p" className="!text-white-A700_89">
                  Quick Links
                </Text>
                <div className="flex flex-row justify-start w-full">
                  <ul className="flex flex-col items-start justify-start w-[96%]">
                    <li>
                      <a href="#">
                        <Text as="p">Blog</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-1.5">
                        <Text as="p">Get in touch</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[9px]">
                        <Text as="p">Free Financial X-Ray Report</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-1.5">
                        <Text as="p">Personal Finance Course</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-2">
                        <Text as="p">What is SEBI ?</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-2">
                        <Text as="p">About Us</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-[37%] mt-[63px] gap-4">
            <Text size="xs" as="p" className="!text-white-A700_89 text-center !font-medium">
              © 2023 by 2AN Technologies Private Limited
            </Text>
            <div className="h-[18px] w-[18%] relative">
              <a href="#" className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Text size="xs" as="p" className="!text-white-A700_e5 text-center !font-medium">
                  <span className="text-white-A700_e5 font-semibold">Privacy Policy</span>
                  <span className="text-white-A700_e5 font-semibold"></span>
                </Text>
              </a>
            </div>
            <a href="https://spring.money/terms-of-service" target="_blank" rel="noreferrer">
              <Heading size="xs" as="p" className="!text-white-A700_e5 text-center">
                Terms of Service
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
