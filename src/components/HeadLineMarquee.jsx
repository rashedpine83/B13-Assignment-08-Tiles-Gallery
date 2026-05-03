"use client";

import Marquee from "react-fast-marquee";

const HeadLinesMarquee = ({ data }) => {
  return (
    <Marquee pauseOnHover={true} speed={100}>
      {data.map((item, index) => (
        <span key={index} style={{ marginRight: "40px" }} className="text-[#6D214F] font-semibold">
          {item.title}
        </span>
      ))}
    </Marquee>
  );
};

export default HeadLinesMarquee;
