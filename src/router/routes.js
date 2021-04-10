const routes = [
  {
    path: "/",
    component: () => import("layouts/landing.layout.vue"),
    children: [
      { path: "", component: () => import("pages/landing.page.vue") },
      {
        path: "login",
        component: () => import("pages/login.page.vue")
      }
    ]
  },
  {
    path: "/s/",
    name: "student",
    component: () => import("layouts/main.layout.vue"),
    children: [
      { path: "home", component: () => import("pages/student/home.page.vue") },
      {
        path: "liabilites",
        component: () => import("pages/student/liabilites.page.vue")
      },
      {
        path: "attendance",
        component: () => import("pages/student/attendance.page.vue")
      },
      {
        path: "profile",
        component: () => import("pages/student/profile.page.vue")
      }
    ]
  },
  {
    path: "/a/",
    name: "admin",
    component: () => import("layouts/main.layout.vue"),
    meta: { isAdmin: true },
    children: [
      {
        path: "accounts",
        component: () => import("pages/admin/accounts.page.vue")
      },
      {
        path: "attendance",
        component: () => import("pages/admin/attendance.page.vue")
      },
      {
        path: "bulletin",
        component: () => import("pages/admin/bulletin.page.vue")
      },
      {
        path: "liabilites",
        component: () => import("pages/admin/liabilites.page.vue")
      },
      {
        path: "records",
        component: () => import("pages/admin/records.page.vue")
      },
      {
        path: "addstudent",
        component: () => import("pages/admin/addstudent.page.vue")
      }
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
