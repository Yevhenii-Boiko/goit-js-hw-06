const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

const listOfItems = document.querySelectorAll('h2');
listOfItems.forEach(function (item) {
  console.log(
    `Category: ${item.textContent}; elements: ${item.nextElementSibling.childElementCount}`,
  );
});
