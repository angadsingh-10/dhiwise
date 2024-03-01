import React from "react";
import { Img, Button, Text } from "./..";

export default function Promo({
  promoTitle = "Get your free Financial X-Ray Report!",
  promoDesc = "Get a detailed assessment report of your financial life.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-[68%] gap-4">
        <div className="flex flex-col items-center justify-start gap-2">
          <Text size="md" as="p" className="!text-gray-900">
            {promoTitle}
          </Text>
          <Text size="xs" as="p" className="!text-gray-900_e5 leading-[140%]">
            {promoDesc}
          </Text>
        </div>
        <Button
          rightIcon={<Img src="images/img_arrow_1.svg" alt="Arrow 1" />}
          className="h-[33px] gap-1.5 px-[15px] text-teal-600 text-xs font-semibold border-teal-600 border border-solid min-w-[108px] rounded"
        >
          Scan now
        </Button>
      </div>
      <Img src="images/img_x_ray_1_blue_gray_800.svg" alt="xrayone_one" className="h-[83px] w-[83px]" />
    </div>
  );
}
