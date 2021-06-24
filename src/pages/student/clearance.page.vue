<template>
  <q-page padding>
    <div>
     <q-card class="my-card1">
          <q-card-section>
            <div class="text-h5 text-center text-weight-medium">LIABILITIES</div>
          </q-card-section>
          <q-card-section class="q-pa-none">
            <q-scroll-area style="height: 500px;">
              <q-list bordered>
                <template >
                  <q-item >
                    <q-item-section top>
                      <q-item-label class="text-h5">Fines </q-item-label>
                      <q-item-label caption lines="2">2nd Semester</q-item-label>
                    </q-item-section>
                    <q-item-section top >
                      <q-item-label class="text-h5"> Php 500</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-scroll-area>
          </q-card-section>
        </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>

<style></style>
