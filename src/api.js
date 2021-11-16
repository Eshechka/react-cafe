import { API_URL } from "./config";

async function getAllByFirstLetter(firstLetter) {
  const responce = await fetch(API_URL + `search.php?f=${firstLetter}`);
  return responce.json();
}

async function fullMealDetailsById(id) {
  const responce = await fetch(API_URL + `lookup.php?i=${id}`);
  return responce.json();
}

async function getRandomMeal() {
  const responce = await fetch(API_URL + `random.php`);
  return responce.json();
}
async function getAllCategories() {
  const responce = await fetch(API_URL + "categories.php");
  return await responce.json();
}

export {
  getAllByFirstLetter,
  fullMealDetailsById,
  getRandomMeal,
  getAllCategories,
};
