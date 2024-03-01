import React from "react";
import { Img, Heading, Text } from "./..";

export default function Tools({
  toolImg = "images/img_x_ray_1.svg",
  toolTitle = "Financial X-Ray",
  toolDesc = "Get a customised snapshot of your financial health, strengths and areas of improvement.",
  toolAction = "Scan now",
  actionImg = "images/img_arrow_1.svg",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-2 mx-auto max-w-[174px]">
        <Img src={toolImg} alt="financial_xray" className="h-16 w-16" />
        <div className="flex flex-col items-start justify-start w-full gap-0.5">
          <Text size="md" as="p" className="!text-gray-900">
            {toolTitle}
          </Text>
          <Text size="xs" as="p" className="!text-gray-900_e5 leading-[140%]">
            {toolDesc}
          </Text>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <Heading as="h1">{toolAction}</Heading>
        <Img src={actionImg} alt="scan_now_one" className="h-px" />
      </div>
    </div>
  );
}
