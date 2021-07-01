<template>
  <q-page class="bg">
    <div :class="$q.screen.lt.md ? '' : 'row'">
      <div class="col">
        <div
          class="text-left text-h2 text-primary text-weight-bolder q-pl-md q-pt-md"
        >
          AUTOBYTES
        </div>
      </div>
      <div>
        <q-toolbar class="q-pt-xl">
          <q-toolbar-title> </q-toolbar-title>
          <q-btn flat size="20px" label="Home" class="q-mr-md text-primary" />
          <q-btn flat size="20px" label="About" class="q-mr-md text-primary" />
          <q-btn flat size="20px" label="Team" class="q-mr-md text-primary" />
          <q-btn
            flat
            size="20px"
            label="Contact Us"
            class="q-mr-xl text-primary"
          />
          <q-btn
            class="q-ml-xl"
            color="primary"
            icon="login"
            label="Sign In"
            to="/login"
          />
        </q-toolbar>
      </div>
    </div>
    <div class="q-pa-md">
      <q-video
        :ratio="16 / 9"
        src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      />
    </div>
    <div class="row q-pa-md text-primary">
      <div class="col-6">
        <q-card class="q-mr-xs transparent" flat>
          <q-card-section>
            <div class="text-h5 text-center text-weight-bolder">CIT</div>
          </q-card-section>
          <q-card-section class="text-h6 text-weight-bold text-center">
            MISSION
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet
          </q-card-section>
          <q-card-section class="text-h6 text-weight-bold text-center">
            VISION
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card class="transparent" flat>
          <q-card-section>
            <div class="text-h5 text-center text-weight-bolder">BYTES</div>
          </q-card-section>
          <q-card-section class="text-h6 text-weight-bold text-center">
            MISSION
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet
          </q-card-section>
          <q-card-section class="text-h6 text-weight-bold text-center">
            VISION
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style>
.bg {
  background-color: rgb(181, 231, 243);
}
</style>
