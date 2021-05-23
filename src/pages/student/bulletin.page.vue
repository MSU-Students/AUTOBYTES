<template>
  <q-page class="bulletin" padding>
    <div>
      <q-card>
        <q-tabs
          v-model="tab"
          class="bg-primary text-white"
          active-color="white"
          indicator-color="white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="events" label="EVENTS" />
          <q-tab name="newsandupdates" label="NEWS AND UPDATES" />
          <q-tab name="achievements" label="ACHIVEMENTS" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated swipeable infinite >
          <q-tab-panel name="events">
            <div class="text-h6" style="height: 750px">
              EVENT ITEMS
            </div>
          </q-tab-panel>

          <q-tab-panel name="newsandupdates">
            <div class="text-h6" style="height: 750px">
              News and Updates
            </div>
          </q-tab-panel>

          <q-tab-panel name="achievements">
            <div class="text-h6" style="height: 750px">
              Achievements
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "events"
    };
  }
};
</script>

<style></style>
