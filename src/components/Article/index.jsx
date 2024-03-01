import React from "react";
import { Text, Img } from "./..";

export default function Article({
  articleTitle = "The length of the short read can be up to max 80 characters",
  articleImg = "images/img_img_9906.png",
  articleType = "Short Read",
  articleTime = "2 mins",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-center w-full gap-4">
        <Text as="p" className="w-[63%] !text-gray-900 !font-medium">
          {articleTitle}
        </Text>
        <div className="flex flex-row justify-center w-[32%] bg-gray-400_04 rounded">
          <Img src={articleImg} alt="image" className="w-full object-cover rounded" />
        </div>
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-row justify-start w-[43%] gap-1">
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            {articleType}
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            •
          </Text>
          <Text size="xs" as="p" className="!text-blue_gray-400_05">
            {articleTime}
          </Text>
        </div>
      </div>
    </div>
  );
}
