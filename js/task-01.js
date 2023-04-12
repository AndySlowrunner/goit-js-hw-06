const categoryArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryArray.length}`);

categoryArray.forEach(element => {
    const subCategories = element.lastElementChild;
    const subCategoriesCount = subCategories.children.length;
    console.log('Category:', element.firstElementChild.textContent);
    console.log(`Elements: ${subCategoriesCount}`);    
});