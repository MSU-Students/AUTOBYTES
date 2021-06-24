<template>
  <q-page>
    <div class="fullscreen" :class="$q.screen.lt.md ? '' : 'row'">
      <div class="col-4 flex flex-center">
        <q-card
          flat
          class="my-card bg-transparent"
          :class="$q.screen.lt.md ? 'absolute-center q-px-sm' : ''"
          :style="$q.screen.lt.md ? 'width: 400px' : 'width: 450px'"
        >
          <q-card-section class="text-center">
            <q-img
              src="~assets/citlogo.png"
              style="height: 170px; max-width: 190px"
            />
          </q-card-section>
          <q-card-section class="text-center">
            <div class="text-h3 text-grey-10 text-weight-bold">AutoBytes</div>
            <div class="text-h5 text-grey-7 text-weight-light q-pt-xl">
              Log in to your account
            </div>
          </q-card-section> 
          <q-card-section class="q-gutter-md">
            <q-input filled label="ID Number" mask="#########">
              <template v-slot:append>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input label="Password" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions class="q-mx-sm q-pt-md" align="center">
            <q-btn class="full-width" label="Login" color="primary" size="lg" to="/s/bulletin" />
          </q-card-actions>
        </q-card>
      </div>
      <div v-if="!$q.screen.lt.md" class="col-8">
        <q-img src="~assets/citbldg.jpg" class="full-height" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      isPwd: true,
    }
  }
};
</script>

<style></style>
