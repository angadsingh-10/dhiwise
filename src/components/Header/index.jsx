import React from "react";
import { Button, Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1320px]">
        <Img src="images/img_logo.svg" alt="logo_one" className="h-[34px]" />
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
          <div className="flex flex-row justify-start w-[22%] ml-4 gap-1 p-4">
            <a href="#" className="mt-[11px] mb-[9px]">
              <Text as="p" className="!text-gray-900 !font-medium">
                Academy
              </Text>
            </a>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[21px] w-[21px]" />
          </div>
          <Button shape="square" className="!text-teal-600 font-semibold min-w-[70px]">
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
