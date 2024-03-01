import React from "react";
import { Text, Img, Heading } from "./..";

export default function Quiz({
  quizTitle = "Very Interesting Quiz Name",
  quizType = "Personal Finance  - General",
  quizImg1 = "images/img_arrow_1.svg",
  quizImg = "images/img_image_8.png",
  quizLength = "10 questions",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-full gap-2">
        <div className="flex flex-col items-start justify-start w-[71%] gap-4">
          <div className="flex flex-col items-start justify-start w-full gap-px">
            <Text as="p" className="!text-gray-900 !font-medium">
              {quizTitle}
            </Text>
            <Text size="xs" as="p" className="!text-gray-900_89_02 !font-medium">
              {quizType}
            </Text>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <Heading as="h1">Start quiz</Heading>
            <Img src={quizImg1} alt="arrowone_one" className="h-px" />
          </div>
        </div>
        <Img src={quizImg} alt="imageeight_one" className="w-[76px] object-cover" />
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-row justify-start w-[41%] gap-1">
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            Quiz
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            •
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            {quizLength}
          </Text>
        </div>
      </div>
    </div>
  );
}
