export const menuData = [
  {
    id: 1,
    title: "Home",
    newTab: true,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "Who Are We",
        newTab: true,
        path: "/about/who-are-we",
      },
      {
        id: 22,
        title: "Why Choose Us",
        newTab: true,
        path: "/about/why-choose-us",
      },
    ],
  },
  {
    id: 3,
    title: "Find Tests",
    newTab: true,
    path: "/tests",
  },
  {
    id: 4,
    title: "Article",
    newTab: false,
    path: "/article",
  },
  {
    id: 8,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
  {
    id: 9,
    title: "Book Test",
    newTab: false,
    path: "https://wa.link/z7ub10",
  },
];
