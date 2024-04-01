import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../utils/useMediaQuery";
import { motion } from "framer-motion";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

export default function ProductPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(1);
  const [widthCheck, setWidthCheck] = useState(window.innerWidth);
  const [widthScroll, setWidthScroll] = useState(0);
  const carouselScroll = useRef();
  const isAboveLargeScreen = useMediaQuery("(min-width: 990px)");
  const [imgPic, setImgPic] = useState("");

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
    const widthEffect = () => {
      if (!isAboveLargeScreen && productData.images) {
        setWidthScroll(
          carouselScroll.current.scrollWidth -
            carouselScroll.current.offsetWidth
        );
      }
    };
    if (productData.images) {
      widthEffect();
    }
  }, [productData.images, isAboveLargeScreen, widthCheck]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`/api/products/find/${productId}`);
        const data = await res.json();
        if (res.ok) {
          setProductData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  useEffect(() => {
    if (productData.images && productData.images.length > 0) {
      setImgPic(productData.images[0]);
    }
  }, [productData]);

  const handleClick = () => {
    for (let i = 0; i < count; i++) {
      dispatch(
        addProduct({
          product: productData,
          quantity: 1,
          price: productData.price,
        })
      );
    }
  };

  return (
    <>
      {!isAboveLargeScreen ? (
        <div className="flex flex-col gap-5 px-4 py-11">
          <div className="">
            <p className="uppercase bg-[#10a958] w-fit px-4 py-2 rounded-full text-sm font-semibold mb-8">
              {productData.tag}
            </p>
            <div className="flex flex-col gap-5 mb-3">
              <h2 className="text-3xl font-whyteink">{productData.title}</h2>
              <p className="text-lg">{productData.para1}</p>
              <p className="text-lg italic">{productData.para2}</p>
            </div>
          </div>
          {productData.images && (
            <motion.div ref={carouselScroll} className="overflow-hidden">
              <motion.div
                drag="x"
                dragElastic={0.2}
                dragConstraints={{ right: 0, left: -widthScroll }}
                className="flex gap-6"
              >
                {productData.images.map((item) => (
                  <img className="rounded-3xl w-4/6" src={item} key={item} />
                ))}
              </motion.div>
            </motion.div>
          )}

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (count !== 1) {
                    setCount(count - 1);
                  }
                }}
                className="p-2 border-2 border-black rounded-full text-xl font-semibold hover:bg-black hover:text-white duration-200"
              >
                <AiOutlineMinus />
              </button>
              <p className="font-semibold text-sm w-[2%] text-center">
                {count}
              </p>
              <button
                onClick={() => {
                  if (count < 9) {
                    setCount(count + 1);
                  }
                }}
                className="p-2 border-2 border-black rounded-full text-xl font-semibold hover:bg-black hover:text-white duration-200"
              >
                <AiOutlinePlus />
              </button>
            </div>
            <button
              onClick={handleClick}
              className="border-2 border-black px-4 py-2 w-full rounded-full font-semibold md:py-2 hover:text-white hover:bg-black duration-300"
            >
              ADD ${productData.price}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-12 px-24 py-11">
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              {productData.images &&
                productData.images.map((item) => (
                  <div
                    key={item._id}
                    className={`w-fit border-2 rounded-3xl ${
                      item === imgPic ? "border-black" : "border-white"
                    }`}
                  >
                    <img
                      onClick={() => {
                        setImgPic(item);
                      }}
                      className="w-24 h-24 object-cover rounded-3xl cursor-pointer"
                      key={item}
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
            </div>
            {productData.images && (
              <div className="w-[46vw]">
                <img
                  className="w-full rounded-[5.5rem] object-cover"
                  src={!imgPic ? productData.images[0] : imgPic}
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="w-[75%]">
              <p className="uppercase bg-[#10a958] w-fit px-4 py-2 rounded-full text-sm font-semibold mb-8">
                {productData.tag}
              </p>
              <div className="flex flex-col gap-8 mb-3">
                <h2 className="text-5xl mb-8 font-whyteink">
                  {productData.title}
                </h2>
                <p className="text-xl">{productData.para1}</p>
                <p className="text-xl italic">{productData.para2}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (count !== 1) {
                      setCount(count - 1);
                    }
                  }}
                  className="p-2 border-2 border-black rounded-full text-xl font-semibold hover:bg-black hover:text-white duration-200"
                >
                  <AiOutlineMinus />
                </button>
                <p className="font-semibold text-sm w-[2%] text-center">
                  {count}
                </p>
                <button
                  onClick={() => {
                    if (count < 9) {
                      setCount(count + 1);
                    }
                  }}
                  className="p-2 border-2 border-black rounded-full text-xl font-semibold hover:bg-black hover:text-white duration-200"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <button
                onClick={handleClick}
                className="border-2 border-black px-4 py-2 w-[75%] rounded-full font-semibold md:py-2 hover:text-white hover:bg-black duration-300"
              >
                ADD ${productData.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
