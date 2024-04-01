export default function RegisterPage() {
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
            className="outline-none border-b border-black text-lg"
            type="text"
            name="firstName"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="lastName">
            Last name
          </label>
          <input
            className="outline-none border-b border-black text-lg"
            type="text"
            name="lastName"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none border-b border-black text-lg"
            type="text"
            name="lastName"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <label className="font-semibold text-lg" htmlFor="password">
            Password
          </label>
          <input
            className="outline-none border-b border-black text-lg"
            type="text"
            name="password"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5  w-full h-full sm:w-[80%] md:w-2/4 lg:w-2/5">
        <button className="bg-black text-white hover:text-black font-semibold w-full rounded-full py-1 mb-6 md:py-2 border-2 border-white hover:bg-white hover:border-2 hover:border-black duration-300">
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}
