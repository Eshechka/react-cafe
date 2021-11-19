import { API_URL } from "./config";

async function getMealByName(mealName) {
  const responce = await fetch(API_URL + `search.php?s=${mealName}`);
  return responce.json();
}

async function getAllCategories() {
  const responce = await fetch(API_URL + "categories.php");
  return await responce.json();
}

async function filterByCategory(catName) {
  const responce = await fetch(API_URL + `filter.php?c=${catName}`);
  return await responce.json();
}

async function getMealDetailsById(mealId) {
  const responce = await fetch(API_URL + `lookup.php?i=${mealId}`);
  return await responce.json();
}

export {
  getMealByName,
  getAllCategories,
  filterByCategory,
  getMealDetailsById,
};
