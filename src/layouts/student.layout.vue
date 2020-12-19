<template>
  <q-layout view="lHh LpR fFf">
    <!-- Header -->
    <Header />
    <!-- Drawer -->
    <Drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const Header = () => import("./student/header.layout.vue");
const Drawer = () => import("./student/drawer.layout.vue");

export default {
  name: "StudentLayout",
  components: {
    Header,
    Drawer
  }
};
</script>
