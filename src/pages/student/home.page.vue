<template>
  <q-page padding>
    <div class="row q-col-gutter-lg">
      <div class="col-4">
        <q-card class="my-card1 bg-transparent" flat>
          <q-card-section>
            <div class="text-h4 text-center text-weight-bolder">
              BULLETIN BOARD
            </div>
          </q-card-section>
          <q-card-section>
            <!-- <q-btn-dropdown
              class="full-width"
              size="18px"
              color="primary"
              icon="alarm"
              label="Dropdown Button"
              align="center"
            />
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            </q-btn-dropdown> -->
            <q-btn-dropdown
              color="primary"
              label="DO-DAY"
              class="full-width"
              size="18px"
              icon="alarm"
              align="center"
              rounded
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick" style="bg-blue">
                  <q-item-section>
                    <q-item-label
                      ><p>WHAT: Do-DAY</p>
                      <p>WHEN: January 1, 2021 (8-10AM and 1-4PM)</p>
                      <p>WHERE: CIT College</p></q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-8 ">
        <div class="row q-col-gutter-xl">
          <div class="col-5">
            <q-date class="shadow-5" v-model="model" range />
          </div>
          <div class="col-7">
            <q-card class="my-card2 shadow-2" bordered>
              <img
                src="https://www.animatedimages.org/data/media/118/animated-robot-image-0029.gif"
              />
              <q-card-section>
                <div class="text-h6 text-weight-bolder">Hello, Dummy!</div>
              </q-card-section>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="col-12">
            <q-card class="my-card3" bordered>
              <q-card-section>
                <div class="text-h6 text-weight-bolder text-center">
                  ACHIEVEMENTS
                </div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      model: { from: "2020/07/08", to: "2020/07/17" }
    };
  },
  onItemClick() {
    //asd
  }
};
</script>

<style scoped></style>
