<template>
  <q-drawer bordered  show-if-above v-model="left" :width="190" side="left">
    <div class="text-center text-weight-bold q-pt-xl">
      <div><q-avatar size="70px" style="border-radius: 10px 10px 10px 10px">
      <img src="~assets/MSUBYTES.jpg">
    </q-avatar></div>
      <q-chip size="25px" color="white" text-color="primary">
        AUTOBYTES
      </q-chip>
    </div>

    <div class="text-center ">
      <div class="q-pt-lg" v-for="(menu, index) in menus" :key="index">
        <q-btn
          rounded
          style="border-radius: 15px 15px 15px 15px"
          size="lg"
          :color="menu.to == $route.fullPath ? 'primary' : 'white'"
          :text-color="menu.to == $route.fullPath ? 'white' : 'primary'"
          :icon="menu.icon"
          :to="menu.to"
        />
        <p class="q-pt-sm text-primary text-weight-medium text-subtitle2">{{ menu.label }}</p>
      </div>
    </div>
    <div class="text-center q-pt-lg">
      <q-btn round style="border-radius: 10px 10px 10px 10px">
        <q-avatar size="70px" style="border-radius: 10px 10px 10px 10px">
          <img src="~assets/Yass.jpg" />
        </q-avatar>
      </q-btn>
      <div class="q-pt-md text-subtitle2 text-grey-8 text-weight-bolder q-mx-md" >Mohammad Yassier Bashier</div>
    </div>
    <div class="text-center q-pt-xl">
      <q-btn class="text-blue" color="white" icon="power_settings_new" label="Logout" to="/login"/>
    </div>
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
    label: "Liabilites",
    to: "/s/liabilites"
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
  }
};
</script>

<style scoped>
.q-item {
  border-radius: 50px 50px 50px 50px;
  margin: 60px 100px 0px 100px;
}
</style>
