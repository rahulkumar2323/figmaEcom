import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userRedux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill out all fields");
    }
    dispatch(loginStart());
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data === "Wrong credentials!") {
        toast.error("Wrong credentials!");
      }
      if (res.ok) {
        toast.success("log in successful!");
        dispatch(loginSuccess(data));
        navigate("/");
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      toast.error(error);
      dispatch(loginFailure());
    }
  };
  return (
    <div className="px-8 py-12 flex flex-col items-center gap-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-whyteink md:mb-6 lg:mb-10">
        WELCOME BACK
      </h2>
      <div className="flex flex-col gap-4 w-full h-full sm:w-[80%] md:w-2/4 lg:w-2/5 sm:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="email">
            Your email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-b border-black text-lg"
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-2 mb-8 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="password">
            Your Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none border-b border-black text-lg"
            type="password"
            name="password"
            placeholder="Enter your email password"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={handleClick}
            disabled={isFetching}
            className={`bg-black text-white hover:text-black font-semibold w-full rounded-full py-1 mb-6 md:py-2 border-2 border-white hover:bg-white hover:border-2 hover:border-black duration-300 ${
              isFetching && "bg-gray-500 cursor-not-allowed"
            }`}
          >
            SIGN IN
          </button>
          <p>New to The Figma Store?</p>
          <Link
            to="/register"
            className="border-2 border-black px-3 py-1 rounded-full font-semibold md:py-2 hover:text-white hover:bg-black duration-300"
          >
            CREATE AN ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}
