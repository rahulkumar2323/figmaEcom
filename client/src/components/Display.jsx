import { useContext } from "react";
import { TagSortContext } from "../context/TagSort";
import SliderCom from "./Slider";
import one from "../assests/1.svg";
import two from "../assests/2.svg";
import three from "../assests/3.svg";
import four from "../assests/4.svg";
import five from "../assests/5.svg";
import six from "../assests/6.svg";
import seven from "../assests/7.svg";
import eight from "../assests/8.svg";
import displayImg from "../assests/displayImg.png";

export default function Display() {
  const { tag, setTag } = useContext(TagSortContext);
  return (
    <div>
      <SliderCom />
      <div>
        <h2 className="group md:text-5xl text-2xl lg:px-48 px-8 md:px-12 font-thin font-whyteink text-gray-900 text-center flex flex-wrap mt-32 gap-1 md:gap-2 md:leading-[3.45rem] items-center justify-center">
          <span onClick={() => setTag("")} className="grpTxtBlr">
            FIGMA&apos;S
          </span>
          &nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={one}
            alt="one"
          />
          &nbsp;
          <span onClick={() => setTag("")} className="grpTxtBlr">
            COLLECTION
          </span>
          &nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={two}
            alt="two"
          />
          &nbsp; <span className="grpTxtBlr">OF</span>&nbsp;{" "}
          <span
            onClick={() => setTag("layers")}
            className={`underline cursor-pointer ${
              tag === "layers" ? "text-[#ffc800]" : ""
            }`}
          >
            LAYERS
          </span>
          &nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={three}
            alt="three"
          />
          &nbsp;
          <span onClick={() => setTag("")} className="grpTxtBlr">
            AND
          </span>
          &nbsp;
          <img className="txt-ico" src={four} alt="four" />
          &nbsp;
          <span
            onClick={() => setTag("components")}
            className={`underline cursor-pointer ${
              tag === "components" ? "text-[#c8baff]" : ""
            }`}
          >
            COMPONENTS
          </span>
          &nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={five}
            alt="five"
          />
          &nbsp;{" "}
          <span onClick={() => setTag("")} className="grpTxtBlr">
            FOR YOU
          </span>
          &nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={six}
            alt="six"
          />
          &nbsp; <span className="grpTxtBlr">AND</span>&nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={seven}
            alt="seven"
          />
          &nbsp; <span className="grpTxtBlr">YOUR</span>&nbsp;
          <img
            onClick={() => setTag("")}
            className="txt-ico"
            src={eight}
            alt="eight"
          />
          &nbsp;
          <span onClick={() => setTag("")} className="grpTxtBlr">
            FRIENDS
          </span>
        </h2>
      </div>
      <div className="relative md:mt-20 mt-12">
        <img src={displayImg} alt="display-image" />
        <div className="absolute md:bottom-[5rem] md:left-[3rem] w-[22rem] bottom-[1rem] left-[2rem] md:w-[27rem]">
          <h3 className="font-whyteink md:text-5xl text-lg">
            FIGMA X WORK LOUDER
          </h3>
          <p className="md:text-3xl mt-3 text-sm text-gray-600">
            Meet the limited edition Figma Creator Micro Keyboard
          </p>
          <button className="text-white bg-black text-xs md:text-base md:px-5 md:py-2 py-1 px-2 rounded-full mt-3">
            PREORDER
          </button>
        </div>
      </div>
    </div>
  );
}
