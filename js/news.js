const loadCategories = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.data.news_category);
};
const displayCategories = (categories) => {
  const categoriesCointainer = document.getElementById("categories-container");
  categories.forEach((category) => {
    const categoryList = document.createElement("li");
    //categoryList.classList.add("d-flex");
    categoryList.innerHTML = `
        <a  href="" onclick = "loadNews('${category.category_id}');">${category.category_name}</a>
        `;
    categoriesCointainer.appendChild(categoryList);
  });
};
const loadNews = async (category) => {
  const url = `
  https://openapi.programming-hero.com/api/news/category/01
  `;
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data);
};
const displayNews = async (news) => {
  const newsContainer = document.getElementById("news_container");
  for (const post of news) {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col");
    newsDiv.innerHTML = `
    <div class="card mb-4 border-0 shadow rounded-4">
          <div class="row g-0 align-items-center">
            <div class="col-md-3">
              <img
                src="${post.thumbnail_url}"
                class="img-fluid rounded-start p-3"
                alt="..."
              />
            </div>
            <div class="col-md-9 pe-4">
              <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${post.title}</h5>
                <p class="card-text fw-semibold">
                  ${post.details.slice(0, 400)}...
                </p>
                <div class="mt-4 d-flex justify-content-between align-items-center"> 
                  <div class="d-flex ">
                    <div ><img class="author rounded-circle" src=${
                      post.author.img
                    } alt="" /></div>
                    <div class="ms-3"><h6 class="fw-bold lh-1">${
                      post.author.name
                    }<h6>
                        <p class="lh-1">${post.author.published_date}</p></div>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="fa-regular fa-eye fs-4 me-4 "></i>
                    <h4 class="fw-bold ">${post.total_view}</h4>
                  </div>
              
                  <div>
                    <i class="fa-solid fa-arrow-right fs-4 pe-2 text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    newsContainer.appendChild(newsDiv);
  }
};
loadNews();
loadCategories();
