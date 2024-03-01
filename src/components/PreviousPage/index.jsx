import React from "react";
import { Heading, Img } from "./..";

export default function PreviousPage({ prevPageName = "Back", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_arrow_left.svg" alt="arrowleftone" className="h-[18px] w-[18px]" />
      <Heading as="h1">{prevPageName}</Heading>
    </div>
  );
}
