import React from "react";
import { Text, Img } from "./..";

export default function Cardpack({
  cardpackTitle = "This is the title of a cardpack and it can be max 120 characters",
  cardpackImg = "images/img_img_9906_64x90.png",
  cardpackImg1 = "images/img_img_9920.png",
  cardpackLength = "10 pages",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-center w-full gap-4">
        <Text as="p" className="w-[63%] !text-gray-900 !font-medium">
          {cardpackTitle}
        </Text>
        <div className="flex flex-row justify-center w-[32%] bg-gray-400_04 rounded">
          <div className="flex flex-col items-center justify-start w-full">
            <Img src={cardpackImg} alt="img9906_one" className="w-full object-cover rounded" />
            <Img src={cardpackImg1} alt="img9920_one" className="w-full mt-[-64px] object-cover rounded" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-row justify-start w-[45%] gap-1">
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            Cardpack
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            •
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            {cardpackLength}
          </Text>
        </div>
      </div>
    </div>
  );
}
