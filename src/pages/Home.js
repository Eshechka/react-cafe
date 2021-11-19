import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getAllCategories } from "../api";
import { CategoriesList } from "../components/CategoriesList";
import { Search } from "../components/Search";

export function Home() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  useEffect(() => {
    const searchedWord = search ? search.split("=")[1] : "";
    if (searchedWord) {
      updateFilteredCategories(searchedWord);
    } else {
      setFilteredCategories(categories);
    }
  }, [categories]);

  function updateFilteredCategories(searchedWord) {
    setFilteredCategories(
      categories.filter((category) =>
        category.strCategory.toLowerCase().includes(searchedWord.toLowerCase())
      )
    );
  }

  function getSearched(searchedWord) {
    if (searchedWord !== "") {
      updateFilteredCategories(searchedWord);
      navigate({
        pathname,
        search: `?category=${searchedWord}`,
      });
    } else {
      setFilteredCategories(categories);
      navigate(pathname);
    }
  }

  return (
    <>
      <Search cb={getSearched} />
      <CategoriesList categories={filteredCategories} />
    </>
  );
}
