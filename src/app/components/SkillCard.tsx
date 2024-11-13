/* 
bg-red-500
bg-red-300
bg-yellow-500
bg-yellow-300
bg-green-500
bg-green-300
bg-blue-500
bg-green-300
border-red-500
border-red-300
border-yellow-500
border-yellow-300
border-blue-500
border-blue-300
border-green-500
border-green-300
from-red-500
from-red-300
from-yellow-500
from-yellow-300
from-blue-500
from-blue-300
from-green-500
from-green-300
to-red-500
to-red-300
to-yellow-500
to-yellow-300
to-blue-500
to-blue-300
to-green-500
to-green-300
w-[10%]
w-[20%]
w-[30%]
w-[40%]
w-[50%]
w-[60%]
w-[70%]
w-[75%]
w-[80%]
w-[90%]
w-[100%]
*/

import Image from "next/image";

interface SkillCardProps {
  reverse: boolean;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  progressValue: number;
}

const SkillCard = (props: SkillCardProps) => {
  const { reverse, image, progressValue } = props;

  // Determine colors based on progressValue
  let colorKey: "red" | "yellow" | "blue" | "green" = "red";

  if (progressValue < 50) {
    colorKey = "red";
  } else if (progressValue >= 50 && progressValue <= 70) {
    colorKey = "yellow";
  } else if (progressValue > 70 && progressValue <= 80) {
    colorKey = "blue";
  } else {
    colorKey = "green";
  }

  const colorMap = {
    red: { dark: "red-500", light: "red-300" },
    yellow: { dark: "yellow-500", light: "yellow-300" },
    blue: { dark: "blue-500", light: "blue-300" },
    green: { dark: "green-500", light: "green-300" },
  };

  const borderColor = colorMap[colorKey].dark;
  const fillColorDark = colorMap[colorKey].dark;
  const fillColorLight = colorMap[colorKey].light;

  const imageClassName = [
    reverse ? "rounded-lg border-2" : "border-2 rounded-lg",
    "border-b-2 border-t-2 p-2",
    `border-${borderColor}`,
  ].join(" ");

  const progressBarContainerClassName = [
    "w-full",
    reverse ? "rounded-l-full border-l-2" : "border-r-2 rounded-r-full",
    "border-b-2 border-t-2",
    `border-${borderColor}`,
  ].join(" ");

  const progressBarClassName = [
    "h-full",
    `w-[${progressValue}%]`,
    reverse ? "rounded-r-full" : "rounded-l-full",
    "bg-gradient-to-r",
    `from-${fillColorDark}`,
    `to-${fillColorLight}`,
  ].join(" ");

  return (
    <div className={`flex gap-2 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            // className={`border-b-2 border-t-2 p-2 border-${borderColor} ${
            //   reverse ? "rounded-r-lg border-r-2" : "border-l-2 rounded-l-lg"
            // }`}
          />
          <div
            className={`w-full border-b-2 border-${borderColor} border-t-2 ${
              reverse ? "rounded-full border-2" : "border-2 rounded-full"
            }`}
          >
            <div
              className={`h-full w-[${progressValue}%] bg-gradient-to-r from-${fillColorDark} to-${fillColorLight} ${
                reverse ? "rounded-full" : "rounded-full"
              }`}
            ></div>
          </div>
        </>
      ) : (
        <div className="">LOGO GOES HERE</div>
      )}
    </div>
  );
};

export default SkillCard;
