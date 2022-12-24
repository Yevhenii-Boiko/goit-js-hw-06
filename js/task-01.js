const categoriesById = document.querySelector('#categories');
const categoriesList = categoriesById.querySelectorAll('.item');
const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  const numberOfCategories = element.querySelector('ul').children.length;

  console.log(`Category: ${categoryName}; elements: ${numberOfCategories}`);
});
