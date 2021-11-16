import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { CategoriesList } from "../components/CategoriesList";

export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  return <CategoriesList categories={categories} />;
}
