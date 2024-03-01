import React from "react";
import { Img, Text } from "./..";

export default function LeftPanelDropdown({ toolName = "Financial X-Ray", ...props }) 

{
  return (
    <div {...props}>
      <Text as="p" className="mt-px !text-gray-900">
        {toolName}
      </Text>
      <Img src="images/img_arrow_down.svg" alt="arrowright" className="h-[18px] w-[18px]" />
    </div>
  );
}
