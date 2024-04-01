import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      return toast.error("Please fill out all fields");
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return toast.error(data.message);
      }
      setLoading(false);
      if (res.ok) {
        toast.success("New user created successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="px-8 py-12 flex flex-col items-center gap-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-whyteink md:mb-6 lg:mb-10 text-center">
        CREATE AN ACCOUNT
      </h2>
      <div className="flex flex-col gap-4 w-full h-full sm:w-[80%] md:w-2/4 lg:w-2/5 sm:gap-14 lg:gap-16">
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="firstName">
            First name
          </label>
          <input
            onChange={handleChange}
            className="outline-none border-b border-black text-lg"
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="lastName">
            Last name
          </label>
          <input
            onChange={handleChange}
            className="outline-none border-b border-black text-lg"
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="outline-none border-b border-black text-lg"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="outline-none border-b border-black text-lg"
            type="password"
            name="password"
            id="password"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5  w-full h-full sm:w-[80%] md:w-2/4 lg:w-2/5">
        <button
          disabled={loading}
          type="submit"
          onClick={handleClick}
          className={`bg-black text-white hover:text-black font-semibold w-full rounded-full py-1 mb-6 md:py-2 border-2 border-white hover:bg-white hover:border-2 hover:border-black duration-300 ${
            loading && "cursor-not-allowed bg-gray-500"
          }`}
        >
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}
