<template>
<q-page padding>
  <q-header reveal elevated class="bg-primary text-white" style="height: 60px">
      <q-toolbar>
        <q-toolbar-title class="text-center text-weight-bolder text-h4">
          <q-avatar size="xl">
            <img src="~assets/MSUBYTES.jpg">
          </q-avatar>
          AUTOBYTES
        </q-toolbar-title>
        <q-btn class="text-blue"  color="white" label="LOGIN" to="/login" />
      </q-toolbar>
    </q-header>
  <div>
    <q-carousel
      style="height: 300px"
      animated
      v-model="slide"
      navigation
      elevated
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="~assets/citbldg.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/citlogo.png" />
      <q-carousel-slide :name="3" img-src="~assets/logos.png" />
      <q-carousel-slide :name="4" img-src="~assets/MSUBYTES.jpg" />
    </q-carousel>
  </div>

  <div class="row q-col-gutter-sm q-pt-sm">
    <div class="col-8">
      <q-card class="my-card1">
        <q-card-section>
          <div class="text-h5 text-center text-weight-bold">BULLETIN BOARD</div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </div>
    
    <div class="col-4">
      <q-card class="my-card4">
        <q-input color="grey-3" label-color="blue" outlined v-model="text" label="SEARCH" >
        <template v-slot:append>
          <q-icon name="search" color="blue" />
        </template>
      </q-input>
      </q-card>
      <q-card class="my-card2 q-mt-sm">
        <q-card-section>
          <div class="text-h6 text-center text-weight-bold">ACHIEVEMENTS</div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
      <q-card class="my-card3 q-mt-sm">
        <q-card-section>
          <div class="text-h6 text-center text-weight-bold">NEWS AND UPDATES</div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </div> 
  </div>
  <div>
    
  </div>
  
</q-page>
</template>

<script>
export default {
  name: "landingPage",
    data () {
    return {
      date: '2019/02/01',
      events: [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],
      slide: 1,
      autoplay: true
    }
  },
  methods: {
    eventsFn (date) {
      const parts = date.split('/')
      return parts[2] % 2 === 0
    }
  }
}
</script>
<style>
</style>
