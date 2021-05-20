const routes = [
  {
    path: "/",
    component: () => import("layouts/main.layout.vue"),
    children: [{ path: "", component: () => import("pages/login.page.vue") }]
  },
  {
    path: "/s/",
    component: () => import("layouts/student/student.layout.vue"),
    children: [
      { path: "home", component: () => import("pages/student/home.page.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
