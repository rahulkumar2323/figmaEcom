import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SliderCom() {
  const [widthCheck, setWidthCheck] = useState(window.innerWidth);
  const [widthScroll, setWidthScroll] = useState(0);
  const carouselScroll = useRef();
  useEffect(() => {
    const handleResize = () => {
      setWidthCheck(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setWidthScroll(
      carouselScroll.current.scrollWidth - carouselScroll.current.offsetWidth
    );
  }, [widthCheck]);
  return (
    <motion.div
      className="bg-[#ffc700] pb-6 pt-3 md:pb-2 border-b-[3.5px] border-black h-[15.3rem] md:h-[60vh] lg:h-[82vh] overflow-hidden"
      ref={carouselScroll}
    >
      <motion.div
        className="flex items-center gap-2"
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -widthScroll }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      >
        <motion.div className="relative min-w-[13.2rem] h-[13.2rem] md:min-w-[37%] md:h-[37%] cursor-pointer">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="658"
            height="658"
            fill="none"
            className="svg-cutout"
            viewBox="-2 -2 654 654"
          >
            <defs>
              <pattern
                id="d9dcd03f-4f85-4f3a-aa86-a68d7215ea0b"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_10_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#d9dcd03f-4f85-4f3a-aa86-a68d7215ea0b)"
              fillRule="evenodd"
              d="M650 0H0v125.496C0 231.179 81.97 317.718 185.802 325 81.971 332.282 0 418.821 0 524.504V650h650V524.504C650 418.82 568.029 332.282 464.198 325 568.029 317.718 650 231.179 650 125.496V0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link
            id="h4"
            to="/products/66057a039a474a40257d9783"
            className="h4Text"
          >
            Design in bloom tea
          </Link>
        </motion.div>
        <motion.div className="relative min-w-[26.2rem] h-[13.2rem] md:min-w-[62%] md:h-[39%] cursor-pointer">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1124"
            height="612"
            fill="none"
            className="svg-cutout"
            viewBox="0 0 1124 612"
          >
            <defs>
              <pattern
                id="188d1671-d29a-4af9-815d-2e775ba8a897"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_01_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#188d1671-d29a-4af9-815d-2e775ba8a897)"
              d="M302.279 498.312L300 493.256l-2.279 5.056C266.868 566.765 220.337 609.5 169 609.5c-45.34 0-86.922-33.307-117.313-88.334C21.345 466.227 2.5 390.159 2.5 306c0-84.159 18.845-160.227 49.187-215.166C82.078 35.807 123.66 2.5 169 2.5c51.337 0 97.868 42.735 128.721 111.188l2.279 5.056 2.279-5.056C333.132 45.235 379.663 2.5 431 2.5s97.868 42.735 128.721 111.188l2.279 5.056 2.279-5.056C595.132 45.235 641.663 2.5 693 2.5s97.868 42.735 128.721 111.188l2.279 5.056 2.279-5.056C857.132 45.235 903.663 2.5 955 2.5c45.34 0 86.92 33.307 117.31 88.334 30.34 54.939 49.19 131.007 49.19 215.166 0 84.159-18.85 160.227-49.19 215.166-30.39 55.027-71.97 88.334-117.31 88.334-51.337 0-97.868-42.735-128.721-111.188L824 493.256l-2.279 5.056C790.868 566.765 744.337 609.5 693 609.5s-97.868-42.735-128.721-111.188L562 493.256l-2.279 5.056C528.868 566.765 482.337 609.5 431 609.5s-97.868-42.735-128.721-111.188z"
            ></path>
          </svg>
          <Link
            id="h4"
            className="h4Text"
            to="/products/66057a039a474a40257d9785"
          >
            Version history coach jacket
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[13.6rem] h-[13.6rem] md:min-w-[37%] md:h-[37%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="658"
            height="658"
            fill="none"
            className="svg-cutout"
            viewBox="-2 -2 654 654"
          >
            <defs>
              <pattern
                id="a2fff064-d150-402f-950f-f53d970c7949"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_02_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#a2fff064-d150-402f-950f-f53d970c7949)"
              fillRule="evenodd"
              d="M650 0H0v125.496C0 231.179 81.97 317.718 185.802 325 81.971 332.282 0 418.821 0 524.504V650h650V524.504C650 418.82 568.029 332.282 464.198 325 568.029 317.718 650 231.179 650 125.496V0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link
            id="h4"
            className="h4Text"
            to="/products/66057a039a474a40257d9784"
          >
            Gridlock washi tape
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[13.8rem] h-[13.8rem] md:min-w-[37%] md:h-[37%] ">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="650"
            fill="none"
            className="svg-cutout"
            viewBox="0 0 650 650"
          >
            <defs>
              <pattern
                id="4d1b2e4d-d66c-4b87-bbad-d753c62db021"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_03_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#4d1b2e4d-d66c-4b87-bbad-d753c62db021)"
              d="M648 325c0 178.388-144.612 323-323 323S2 503.388 2 325 146.612 2 325 2s323 144.612 323 323z"
            ></path>
          </svg>
          <Link
            to="/products/66057a039a474a40257d9792"
            id="h4"
            className="h4Text"
          >
            Tidy up tee
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[26.2rem] h-[13.2rem] md:min-w-[62%] md:h-[39%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1124"
            height="612"
            fill="none"
            className="svg-cutout"
            viewBox="0 0 1124 612"
          >
            <defs>
              <pattern
                id="9ec3ec12-3d86-4315-b660-2cbee1cedb72"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_04_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#9ec3ec12-3d86-4315-b660-2cbee1cedb72)"
              d="M302.279 498.312L300 493.256l-2.279 5.056C266.868 566.765 220.337 609.5 169 609.5c-45.34 0-86.922-33.307-117.313-88.334C21.345 466.227 2.5 390.159 2.5 306c0-84.159 18.845-160.227 49.187-215.166C82.078 35.807 123.66 2.5 169 2.5c51.337 0 97.868 42.735 128.721 111.188l2.279 5.056 2.279-5.056C333.132 45.235 379.663 2.5 431 2.5s97.868 42.735 128.721 111.188l2.279 5.056 2.279-5.056C595.132 45.235 641.663 2.5 693 2.5s97.868 42.735 128.721 111.188l2.279 5.056 2.279-5.056C857.132 45.235 903.663 2.5 955 2.5c45.34 0 86.92 33.307 117.31 88.334 30.34 54.939 49.19 131.007 49.19 215.166 0 84.159-18.85 160.227-49.19 215.166-30.39 55.027-71.97 88.334-117.31 88.334-51.337 0-97.868-42.735-128.721-111.188L824 493.256l-2.279 5.056C790.868 566.765 744.337 609.5 693 609.5s-97.868-42.735-128.721-111.188L562 493.256l-2.279 5.056C528.868 566.765 482.337 609.5 431 609.5s-97.868-42.735-128.721-111.188z"
            ></path>
          </svg>
          <Link
            to="/products/66057a039a474a40257d9783"
            id="h4"
            className="h4Text"
          >
            Design in bloom tee
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[13.8rem] h-[13.8rem] md:min-w-[37%] md:h-[37%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="650"
            fill="none"
            className="svg-cutout"
            viewBox="0 0 650 650"
          >
            <defs>
              <pattern
                id="caed66ad-af6e-4a01-ae43-bde4a813b5b8"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_05_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#caed66ad-af6e-4a01-ae43-bde4a813b5b8)"
              d="M647.629 324.502l1.848-.765-1.848.765-94.144-227.283a1.3 1.3 0 00-.704-.704L325.498 2.37a1.302 1.302 0 00-.996 0l-.765-1.848.765 1.848L97.219 96.515a1.3 1.3 0 00-.704.704L2.37 324.502a1.302 1.302 0 000 .996l94.144 227.283a1.3 1.3 0 00.704.704l227.283 94.144c.319.132.677.132.996 0l227.283-94.144c.319-.132.572-.385.704-.704l94.144-227.283a1.302 1.302 0 000-.996z"
            ></path>
          </svg>
          <Link
            to="/products/66057a039a474a40257d978c"
            id="h4"
            className="h4Text"
          >
            Dress code hat
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[13.2rem] h-[13.2rem] md:min-w-[37%] md:h-[37%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="658"
            height="658"
            fill="none"
            className="svg-cutout"
            viewBox="-2 -2 654 654"
          >
            <defs>
              <pattern
                id="65fbfbbc-a231-4efe-8eb0-2632cf674770"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_06_1000x.png?v=1678222396"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#65fbfbbc-a231-4efe-8eb0-2632cf674770)"
              fillRule="evenodd"
              d="M650 0H0v125.496C0 231.179 81.97 317.718 185.802 325 81.971 332.282 0 418.821 0 524.504V650h650V524.504C650 418.82 568.029 332.282 464.198 325 568.029 317.718 650 231.179 650 125.496V0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link
            to="/products/66057a039a474a40257d978a"
            id="h4"
            className="h4Text"
          >
            Shape up tee
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[12.3rem] h-[12.3rem] md:min-w-[37%] md:h-[37%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="650"
            fill="none"
            className="svg-cutout"
            viewBox="0 0 650 650"
          >
            <defs>
              <pattern
                id="90bbe729-77e1-4102-8a5f-533992e3c942"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_07_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <rect
              width="646"
              height="646"
              x="2"
              y="2"
              fill="url(#90bbe729-77e1-4102-8a5f-533992e3c942)"
              rx="103"
            ></rect>
          </svg>
          <Link
            to="/products/66057a039a474a40257d9787"
            id="h4"
            className="h4Text"
          >
            Toolkit pin
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[12.3rem] h-[12.3rem] md:min-w-[37%] md:h-[37%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="650"
            fill="none"
            viewBox="0 0 650 650"
          >
            <defs>
              <pattern
                id="94e2a6be-8fcd-40c5-b48f-b52866f4b443"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_08_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#94e2a6be-8fcd-40c5-b48f-b52866f4b443)"
              d="M647.629 324.502l1.848-.765-1.848.765-94.144-227.283a1.3 1.3 0 00-.704-.704L325.498 2.37a1.302 1.302 0 00-.996 0l-.765-1.848.765 1.848L97.219 96.515a1.3 1.3 0 00-.704.704L2.37 324.502a1.302 1.302 0 000 .996l94.144 227.283a1.3 1.3 0 00.704.704l227.283 94.144c.319.132.677.132.996 0l227.283-94.144c.319-.132.572-.385.704-.704l94.144-227.283a1.302 1.302 0 000-.996z"
            ></path>
          </svg>
          <Link
            to="/products/66057a039a474a40257d978b"
            id="h4"
            className="h4Text"
          >
            Band together socks
          </Link>
        </motion.div>
        <motion.div className="relative cursor-pointer min-w-[12.3rem] h-[12.3rem] md:min-w-[37%] md:h-[37%]">
          <svg
            style={{
              width: "100%",
              height: "100%",
              stroke: "#000",
              strokeWidth: "5.2px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="650"
            height="650"
            fill="none"
            className="svg-cutout"
            viewBox="0 0 650 650"
          >
            <defs>
              <pattern
                id="d4d5c9a0-d644-47ad-bcd6-c6bd7f56cb16"
                width="1"
                height="1"
                patternUnits="objectBoundingBox"
              >
                <image
                  width="100%"
                  height="100%"
                  className="pattern-image"
                  href="//store.figma.com/cdn/shop/files/figma-store_homepage-hero_09_1000x.jpg?v=1678222214"
                  preserveAspectRatio="xMidYMid slice"
                ></image>
              </pattern>
            </defs>
            <path
              fill="url(#d4d5c9a0-d644-47ad-bcd6-c6bd7f56cb16)"
              d="M648 325c0 178.388-144.612 323-323 323S2 503.388 2 325 146.612 2 325 2s323 144.612 323 323z"
            ></path>
          </svg>
          <Link
            to="/products/66057a039a474a40257d978e"
            id="h4"
            className="h4Text"
          >
            Framework tee
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
