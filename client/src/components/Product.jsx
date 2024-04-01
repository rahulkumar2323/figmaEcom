import { Link } from "react-router-dom";

export default function Product({ item }) {
  return (
    <Link to={`/products/${item._id}`} className="md:w-fit md:h-fit">
      <div className="xl:w-[287.5px] xl:h-[463.38px] md:w-[187px] md:h-[319px] sm:w-[123px] sm:h-[200px] flex flex-col gap-4 cursor-pointer relative">
        <div className="imgOnHover">
          <img
            className="absolute top-4 rounded-3xl object-cover h-[85%] md:h-[90%] border-2 border-black"
            src={item.imgbg}
            alt=""
          />
          <img
            className="absolute top-4 rounded-3xl object-cover h-[90%]"
            src={item.imgShow}
            alt=""
          />
        </div>

        <img
          className="rounded-3xl object-cover h-[90%] border-2 border-white hover:border-black transition-colors duration-200"
          src={item.images[0]}
          alt=""
        />
        <div className="flex justify-between gap-5">
          <p className="md:text-xl text-sm font-semibold truncate flex-1">
            {item.title}
          </p>
          <p className="md:text-xl text-sm">${item.price}</p>
        </div>
      </div>
    </Link>
  );
}
