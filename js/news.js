const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};
const displayCategories = (news_category) => {
  const categoriesCointainer = document.getElementById("categories-container");
  news_category.forEach((category) => {
    const categoryList = document.createElement("li");
    //categoryList.classList.add("d-flex");
    categoryList.innerHTML = `
        <a href="">${category.category_name}</a>
        `;
    categoriesCointainer.appendChild(categoryList);
  });
};
const loadNews = (category_id) => {
  const url = `
  https://openapi.programming-hero.com/api/news/category/01 
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};
const displayNews = (data) => {
  const newsContainer = document.getElementById("news_container");
  data.forEach((data) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col");
    newsDiv.innerHTML = `
    <div class="card mb-4 border-0 shadow rounded-4">
          <div class="row g-0 align-items-center">
            <div class="col-md-3">
              <img
                src="${data.image_url}"
                class="img-fluid rounded-start p-3"
                alt="..."
              />
            </div>
            <div class="col-md-9 pe-4">
              <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${data.title}</h5>
                <p class="card-text fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  consequatur nulla voluptates beatae! Corporis hic voluptas,
                  reiciendis voluptatem suscipit fugiat, velit totam animi
                  ducimus magni eligendi aut quisquam inventore libero optio.
                  Velit laborum porro reiciendis deleniti dolor. Quae
                  perspiciatis, dolores quisquam, optio ut veritatis architecto
                  cupiditate ratione iure aliquid quasi? Velit laborum porro
                  reiciendis deleniti dolor. Quae perspiciatis, dolores
                  quisquam, optio ut veritatis architecto cupiditate ratione
                  iure aliquid quasi?
                </p>
                <div class="mt-4 d-flex justify-content-between align-items-center"> 
                  <div class="d-flex ">
                    <div><img src="images/Rectangle 19.png" alt="" /></div>
                    <div class="ms-3"><h6 class="fw-bold lh-1">Jane Cooper<h6>
                        <p class="lh-1">Jan 10, 2012</p></div>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="fa-regular fa-eye fs-4 me-4 "></i>
                    <h4 class="fw-bold ">1.5M</h4>
                  </div>
                  <div class=" d-flex justify-content-between w-25">
                    <i class="fa-regular fa-star-half-stroke fs-4"></i>
                    <i class="fa-regular fa-star fs-4"></i>
                    <i class="fa-regular fa-star fs-4"></i>
                    <i class="fa-regular fa-star fs-4"></i>
                    <i class="fa-regular fa-star fs-4"></i>
                  </div>
                  <div>
                    <i class="fa-solid fa-arrow-right fs-4 pe-2 text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
};

loadNews();
loadCategories();
