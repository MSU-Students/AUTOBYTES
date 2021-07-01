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
          <q-btn flat size="20px" label="VMGO" class="q-mr-md text-primary" />
          <q-btn
            flat
            size="20px"
            label="CIT Faculties"
            class="q-mr-md text-primary"
          />
          <q-btn flat size="20px" label="BYTES" class="q-mr-xl text-primary" />
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
            <div class="text-h4 text-center text-weight-bolder">CIT</div>
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
            <div class="text-h4 text-center text-weight-bolder">BYTES</div>
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
    <q-card
      class="text-h4 text-center text-primary text-weight-bolder transparent"
      flat
    >
      College of Information Technology Faculties
    </q-card>
    <div class="q-pa-md">
      <q-carousel
        class="q-pa-md bg-primary shadow-10"
        style="height: 770px"
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/first_pic.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/maam_mai.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/maam_mudz.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_az.jpg"
        />
        <q-carousel-slide
          :name="5"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_al.jpg"
        /><q-carousel-slide
          :name="6"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_bob.jpg"
        />
        <q-carousel-slide
          :name="7"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_domato.jpg"
        /><q-carousel-slide
          :name="8"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_jeff.jpg"
          <q-carousel-slide
          :name="9"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_jojo.jpg"
        />
        <q-carousel-slide
          :name="10"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_jong.jpg"
        />
        <q-carousel-slide
          :name="11"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_lucs.jpg"
        />
        <q-carousel-slide
          :name="12"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_macfire.jpg"
        />
        <q-carousel-slide
          :name="13"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_mark.jpg"
        />
        <q-carousel-slide
          :name="14"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_peter.jpg"
        />
        <q-carousel-slide
          :name="15"
          img-src="~assets/AUTOBYTES PICS/MSU-CIT Faculties/sir_zac.jpg"
        />
        />
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true
    };
  }
};
</script>

<style>
.bg {
  background-color: rgb(181, 231, 243);
}
</style>
