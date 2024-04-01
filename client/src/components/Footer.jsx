import { IoArrowUpOutline } from "react-icons/io5";

export default function Footer() {
  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="h-screen md:h-[82vh] flex flex-col justify-between px-5 py-6 bg-[#c8baff] md:px-7">
      <h2 className="text-2xl font-semibold text-center bg-[#ffc700] w-2/4 self-center leading-[4.75rem]">
        THE FIGMA STORE
      </h2>
      <div className="flex items-center gap-5 md:justify-between">
        <h2 className="text-3xl md:text-5xl md:w-1/4 font-semibold w-3/4">
          OBJECTS THAT INSPIRE.
        </h2>
        <IoArrowUpOutline
          onClick={windowScrollToTop}
          size={37}
          className="text-2xl text-cente text-[#c8baff] bg-black rounded-full cursor-pointer md:mr-14"
        />
      </div>
      <div className="flex items-start justify-between md: text-xl">
        <div className="flex flex-col gap-4 md:gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <a href="#">FIGMA</a>
          <a href="#">TWITTER</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">YOUTUBE</a>
        </div>
      </div>
    </footer>
  );
}
