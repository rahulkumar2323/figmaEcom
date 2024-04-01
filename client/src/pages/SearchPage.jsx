import Products from "../components/Products";
import { useContext } from "react";
import { SearchTextContext } from "../context/SearchData";

export default function SearchPage() {
  const { searchTextSubmit, setSearchTextSubmit } =
    useContext(SearchTextContext);

  return (
    <div>
      <h1 className="md:text-5xl text-4xl font-whyteink font-semibold text-center uppercase mt-20">
        {`"${searchTextSubmit}"`}
      </h1>
      <Products
        searchText={searchTextSubmit}
        setSearchText={setSearchTextSubmit}
      />
    </div>
  );
}
