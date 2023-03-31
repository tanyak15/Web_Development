export const CategoriesData = [
  {
    id: 1,
    name: "women",
    image:
      "https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg",
    desc: `"Upgrade your style game with our on-trend collection."`,
  },
  {
    id: 2,
    name: "men",
    image:
      "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: `"Elevate your style game with our men's collection."`,
  },
  {
    id: 3,
    name: "kids",
    image:
      "https://images.unsplash.com/photo-1617464629340-d727a73d4f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    desc: `"From playtime to special occasions, we have everything your kids need."`,
  },
  {
    id: 4,
    name: "beauty",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: `"Radiant skin, luscious hair, and flawless makeup - we have it all."`,
  },
  {
    id: 5,
    name: "teens",
    image:
      "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    desc: `"Keep up with the latest trends with our cool teen collection."`,
  },
  {
    id: 6,
    name: "accessories",
    image:
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: `"Elevate your look with our stylish and trendy accessories."`,
  },
  {
    id: 7,
    name: "home decor",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: `"From cozy blankets to elegant accents, we have everything you need to create your dream home."`,
  },
  {
    id: 8,
    name: "baby products",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
    desc: `"Safe and gentle products for your precious little one."`,
  },
];

export const fetchSpecificCategoryData = (category) => {
  return CategoriesData.find((item) => {
    if (item.name === category) {
      return true;
    }
    return false;
  });
};
