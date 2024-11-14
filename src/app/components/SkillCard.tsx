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
import { useInView } from "react-intersection-observer";

interface SkillCardProps {
  reverse: boolean;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  progressValue: number;
  delay: number; // Add delay prop for staggered animation
}

const SkillCard: React.FC<SkillCardProps> = ({
  reverse,
  image,
  progressValue,
  delay,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.4, // Trigger when 10% of the component is in view
  });

  // Tailwind-based animation classes with dynamic delay
  const animationClass = inView
    ? `opacity-100 translate-y-0 transition duration-500 ease-out delay-${delay}`
    : "opacity-0 translate-y-10";

  return (
    <div
      ref={ref}
      className={`flex gap-2 align-middle items-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${animationClass}`}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`border-2 p-2 border-${
              reverse ? "r" : "l"
            }-2 rounded-lg`}
          />
          <div
            className={`w-full h-4 border-2 rounded-full ${
              reverse ? "rounded-l-full" : "rounded-r-full"
            }`}
          >
            <div
              className={`h-full ${
                reverse ? "rounded-r-full" : "rounded-l-full"
              } bg-gradient-to-r from-green-500 to-green-300`}
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
        </>
      ) : (
        <div>LOGO GOES HERE</div>
      )}
    </div>
  );
};

export default SkillCard;
