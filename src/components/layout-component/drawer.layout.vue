<template>
  <q-drawer
    show-if-above
    v-model="leftDrawerState"
    side="left"
    content-class="bg-primary text-white"
  >
    <div class="text-center q-pt-xl">
      <q-chip size="18px" icon="school" color="white" text-color="primary">
        AutoBytes
      </q-chip>
    </div>
    <q-list
      padding
      class="menu-list q-pt-xl text-h6 text-weight-regular q-gutter-md"
    >
      <q-item
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.to"
        class="q-mr-md text-white"
        exact-active-class="text-white bg-blue-4"
        clickable
        v-ripple
        style="border-radius: 0px 50px 50px 0px"
      >
        <q-item-section avatar>
          <q-icon :name="menu.icon" />
        </q-item-section>

        <q-item-section class="text-weight-light">
          {{ menu.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
const itemList = [
  {
    icon: "home",
    label: "Home",
    to: "/s/home"
  },
  {
    icon: "assignment_turned_in",
    label: "Clearance",
    to: "/s/clearance"
  },
  {
    icon: "assignment_ind",
    label: "Attendance",
    to: "/s/attendance"
  },
  {
    icon: "person",
    label: "Profile",
    to: "/s/profile"
  }
];
export default {
  name: "DrawerLayout",

  data() {
    return {
      left: false,
      menus: itemList
    };
  },

  computed: {
    leftDrawerState: {
      get() {
        return this.$store.state.siteNav.leftDrawerState;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("siteNav/leftDrawerState", val);
      }
    }
  }
};
</script>

<style></style>
