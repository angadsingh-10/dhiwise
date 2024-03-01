import React from "react";
import { Button, Text, Img } from "./..";

export default function Navbar({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1320px]">
        <Img src="images/img_logo.svg" alt="logooneone_one" className="h-[34px]" />
        <div className="flex flex-row justify-center items-center w-[45%]">
          <a href="#">
            <Text as="p" className="!text-gray-900 !font-medium">
              Home
            </Text>
          </a>
          <a href="#" className="ml-8">
            <Text as="p" className="!text-gray-900 !font-medium">
              Advisory
            </Text>
          </a>
          <a href="#">
            <div className="flex flex-row justify-start w-[16%] ml-8 gap-1">
              <Text as="p" className="mt-px !text-gray-900 !font-medium">
                Academy
              </Text>
              <Img src="images/img_arrow_down.svg" alt="arrowdownone" className="h-[21px] w-[21px]" />
            </div>
          </a>
          <Button shape="square" className="ml-4 !text-teal-600 font-semibold min-w-[70px]">
            Tools
          </Button>
          <a href="#" className="ml-4">
            <Text as="p" className="!text-gray-900 !font-medium">
              Blog
            </Text>
          </a>
          <Button size="md" variant="fill" className="ml-8 font-semibold min-w-[134px]">
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
}
