<template>
  <q-page class="text-h4 text-weight-bolder" padding>
    ATTENDANCE
    <div class="row q-col-gutter-lg q-pt-md text-center">
      <div class="col-4">
        <q-card class="my-card1">
          <q-card-section>
            <div class="text-h6">EVENT</div>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section class="text-subtitle1">
                DO-DAY
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col-4">
          <q-card class="my-card2">
            <q-card-section>
              <div class="text-h6">DATE</div>
            </q-card-section>
            <q-list>
              <q-item>
                <q-item-section class="text-subtitle1" >
                January 3, 2021
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-2">
          <q-card class="my-card3">
            <q-card-section>
              <div class="text-h6">LOGIN</div>
            </q-card-section>
            <q-list>
              <q-item>
                <q-item-section class="text-subtitle1" >
                  PRESENT
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-2">
          <q-card class="my-card4">
            <q-card-section>
              <div class="text-h6">LOGOUT</div>
            </q-card-section>
            <q-list>
              <q-item>
                <q-item-section class="text-subtitle1" >
                  PRESENT
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
        <div class="col-1"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AttendancePage"
};
</script>

<style></style>
