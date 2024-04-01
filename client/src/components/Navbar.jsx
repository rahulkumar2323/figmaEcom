import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchTextContext } from "../context/SearchData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { setSearchTextSubmit } = useContext(SearchTextContext);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  const cart = useSelector((state) => state.cart);
  // const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  return (
    <>
      {searchToggle && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchTextSubmit(searchText);
              navigate("/search");
            }}
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className={`text-[1.75rem] font-semibold text-gray-900 w-full py-2 px-5 border-b-[2.38px] placeholder-black border-black transition-transform duration-300 transform ${
                searchToggle ? "translate-y-0" : "-translate-y-full"
              }`}
              type="text"
              placeholder="Search"
            />
            <button type="submit" className="hidden"></button>
          </form>
        </div>
      )}
      <nav
        className={
          location.pathname === "/" && window.scrollY === 0
            ? `flex justify-between py-3 px-[0.275rem] sticky z-50 lg:py-5 lg:px-24 items-center bg-[#ffc700] transition-transform duration-300 transform ${
                visible ? "top-0 translate-y-0" : "-translate-y-full"
              }`
            : `flex justify-between py-3 px-[0.275rem] sticky z-50 lg:py-5 lg:px-24 items-center bg-white transition-transform duration-300 transform ${
                visible ? "top-0 translate-y-0" : "-translate-y-full"
              }`
        }
      >
        {isAboveMediumScreen ? (
          <div className="flex gap-2 items-center">
            <a className="btn" href="">
              Shop
            </a>
            <a className="btn" href="">
              About
            </a>
            <RiSearchLine
              className="icon"
              onClick={() => setSearchToggle(!searchToggle)}
            />
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <div className="border-2 border-black p-2 rounded-full">
              <RxHamburgerMenu
                className="icon"
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <RiSearchLine
              className="icon"
              onClick={() => setSearchToggle(!searchToggle)}
            />
          </div>
        )}
        <Link to="/">
          <h1 className="font-semibold text-[0.95rem] md:text-[1.45rem] tracking-wide uppercase">
            The Figma Store
          </h1>
        </Link>
        <div className="flex gap-2 md:text-base">
          <Link to="/login" className="btn">
            sign up
          </Link>
          {isAboveMediumScreen ? (
            <Link to="/cart" className="btn">
              cart
            </Link>
          ) : (
            <div className="border-2 border-black px-4 rounded-full flex items-center">
              <Link to="/cart">{cart.quantity}</Link>
            </div>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="flex flex-col gap-14 pl-7 pt-10 h-full fixed z-40 w-full bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-3">
              <a className="font-whyteink text-[2.85rem]">Shop</a>
              <a className="font-whyteink text-[2.85rem]">About</a>
            </div>
            <div className="flex flex-col gap-4">
              <a className="text-lg" href="">
                Privacy Policy
              </a>
              <a className="text-lg" href="">
                Terms of Sale
              </a>
              <a className="text-lg" href="">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
