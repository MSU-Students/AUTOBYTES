const routes = [
  {
    path: "/",
    component: () => import("layouts/main.layout.vue"),
    children: [
      { path: "login", component: () => import("pages/login.page.vue") }
    ]
  },
  {
    path: "/s/",
    component: () => import("layouts/student/student.layout.vue"),
    children: [
      {
        path: "bulletin",
        component: () => import("src/pages/student/bulletin.page.vue")
      },
      {
        path: "clearance",
        component: () => import("src/pages/student/clearance.page.vue")
      },
      {
        path: "profile",
        component: () => import("src/pages/student/profile.page.vue")
      }
    ]
  },
  {
    path: "/a/",
    name: "admin",
    component: () => import("../layouts/admin/admin.layout.vue"),
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
        path: "clearances",
        component: () => import("pages/admin/clearances.page.vue")
      },
      {
        path: "records",
        component: () => import("pages/admin/records.page.vue")
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
