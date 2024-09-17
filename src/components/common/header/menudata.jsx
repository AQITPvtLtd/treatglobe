export const menu = [
  {
    id: 1,
    title: "navbar:home",
    newTab: true,
    path: "/",
  },
  {
    id: 2,
    title: "navbar:about",
    newTab: true,
    path: "/about",
  },
  { id: 4, title: "navbar:doctors", newTab: true, path: "/doctors" },
  {
    id: 5,
    title: "navbar:hospitals",
    newTab: false,
    path: "/hospitals",
  },
  {
    id: 6,
    title: "navbar:treatments",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "treatments:one.name",
        path: "/treatments/cardiology",
      },
      // {
      //   id: 62,
      //   title: "treatments:two",
      //   path: "/treatments/orthopedic-and-joint-replacement",
      // },
      // {
      //   id: 63,
      //   title: "treatments:three",
      //   path: "/treatments/neurology",
      // },
      // {
      //   id: 64,
      //   title: "treatments:four",
      //   path: "/treatments/haemato-oncology-and-bmt",
      // },
      // {
      //   id: 65,
      //   title: "treatments:five",
      //   path: "/treatments/oncology",
      // },
    ],
  },
  {
    id: 7,
    title: "navbar:articles",
    newTab: false,
    path: "/articles",
  },
  {
    id: 8,
    title: "navbar:contact",
    newTab: false,
    path: "/contact",
  },
];
