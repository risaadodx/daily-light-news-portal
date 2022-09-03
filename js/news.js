const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};
const displayCategories = (news_category) => {
  const categoriesCointainer = document.getElementById("categories-container");
  news_category.forEach((category) => {
    const categoryList = document.createElement("ul");
    //categoryList.classList.add("d-flex");
    categoryList.innerHTML = `
        <li><a href="">${category.category_name}</a></li>
        `;
    categoriesCointainer.appendChild(categoryList);
  });
};
loadCategories();
