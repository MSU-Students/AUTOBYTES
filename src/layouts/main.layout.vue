<template>
  <q-layout view="lHh LpR fFf">
    <Header />
    <StudentDrawer v-if="$route.matched[0].name == 'student'" />
    <AdminDrawer v-else-if="$route.matched[0].name == 'admin'" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const Header = () => import("./student/header.layout.vue");
const StudentDrawer = () => import("./student/drawer.layout.vue");
const AdminDrawer = () => import("./admin/drawer.layout.vue");

export default {
  name: "StudentLayout",
  components: {
    Header,
    StudentDrawer,
    AdminDrawer
  },
  created() {
    console.log(this.$route.matched[0].name);
  }
};
</script>
