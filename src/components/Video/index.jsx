import React from "react";
import { Text, Button, Img } from "./..";

export default function Video({
  videoTitle = "This is the title of a video and it can be maximum 120 characters",
  videoImg = "images/img_img_9906_64x90.png",
  videoImg1 = "images/img_img_9917.png",
  videoLength = "6 mins",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-center w-full gap-4">
        <Text as="p" className="w-[63%] !text-gray-900 !font-medium">
          {videoTitle}
        </Text>
        <div className="flex flex-row justify-center w-[32%] bg-gray-400_04 rounded">
          <div className="flex flex-col items-center justify-start w-full">
            <Img src={videoImg} alt="img9906_one" className="w-full object-cover rounded" />
            <div className="h-16 w-full mt-[-64px] relative rounded">
              <Img
                src={videoImg1}
                alt="img9917_one"
                className="justify-center h-16 w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded"
              />
              <Button className="h-[26px] w-[26px] left-0 bottom-0 right-0 top-0 m-auto bg-gray-900_ce_02 hidden absolute rounded-[50%]">
                <Img src="images/img_frame_1549.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-row justify-start w-[32%] gap-1">
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            Video
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            •
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            {videoLength}
          </Text>
        </div>
      </div>
    </div>
  );
}
