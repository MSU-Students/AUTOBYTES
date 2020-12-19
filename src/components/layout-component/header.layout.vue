<template>
  <q-header bordered class="bg-white text-black">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        color="primary"
        @click="leftDrawerState = !leftDrawerState"
      />
      <q-avatar class="q-pl-sm" size="40px" square>
        <q-img src="~assets/citlogo.png"></q-img>
      </q-avatar>

      <q-space />
      <q-btn
        class="q-mr-sm"
        dense
        round
        flat
        icon="notifications"
        color="primary"
      >
        <q-badge color="red" floating transparent>1 </q-badge>
      </q-btn>
      <q-chip clickable>
        <q-avatar size="md">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        Atiya
      </q-chip>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "HeaderLayout",

  data() {
    return {};
  },

  created() {
    console.log(this.$store);
  },

  computed: {
    leftDrawerState: {
      get() {
        return this.$store.state.siteNav.leftDrawerState;
      },
      set(val) {
        this.$store.dispatch("siteNav/leftDrawerState", val);
      }
    }
  }
};
</script>

<style></style>
