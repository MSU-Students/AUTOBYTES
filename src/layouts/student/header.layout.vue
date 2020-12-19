<template>
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="left = !left" />
      HI, WELCOME!
      <q-img class="absolute-center" src="~assets/citlogo.png" style="height: 50px; max-width: 50px"></q-img>
      <q-space/>
      <q-btn class="q-mr-sm" dense round flat icon="notifications">
        <q-badge color="red" floating transparent>1
        </q-badge>
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
  name: "HeaderLayout"
};
</script>

<style></style>
