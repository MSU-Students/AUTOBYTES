<template>
  <q-page padding class="text-h4 text-weight-bolder">
    BULLETIN
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="EVENTS" label="EVENTS" />
        <q-tab name="NEWS&UPDATES" label="NEWS & UPDATES" />
        <q-tab name="ACHIEVEMENTS" label="ACHIEVEMENTS" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="EVENTS">
          <div>
            <q-table
              class="events"
              :data="event"
              :columns="columns"
              row-key="name"
              binary-state-sort
              :filter="filter"
              :loading="loading"
              :pagination.sync="pagination"
              :rows-per-page-options="[0]"
            >
              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                  <q-th auto-width />
                </q-tr>
              </template>

              <template v-slot:top="props">
                <div class="col-2 q-table__title">EVENTS</div>

                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-space />
                <q-btn
                  color="primary"
                  icon-right="addevent"
                  label="ADD EVENT"
                  no-caps
                  @click="showDialog = true"
                />
                <q-dialog
                  :value="showDialog || editDialog"
                  persistent
                  @hide="bulletinEvents = {}"
                  @input="dialogActionEvent()"
                >
                  <q-card style="width: 500px">
                    <q-card-section class="row items-center q-pb-none">
                      <div v-if="showDialog" class="text-h6">ADD EVENT</div>
                      <div v-if="editDialog" class="text-h6">UPDATE EVENT</div>
                      <q-space />
                      <q-btn
                        icon="close"
                        flat
                        round
                        dense
                        @click="
                          showDialog
                            ? (showDialog = false)
                            : (editDialog = false)
                        "
                      />
                    </q-card-section>
                    <q-card-section>
                      <div class="q-gutter-md" style="max-width: 500px">
                        <q-input
                          filled
                          v-model="bulletinEvents.eventName"
                          label="Event Name"
                        />
                        <q-input
                          filled
                          v-model="bulletinEvents.eventDate"
                          label="Event Date"
                          mask="date"
                          :rules="['date']"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                ref="qDateProxy"
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date v-model="bulletinEvents.eventDate">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                        <q-input
                          filled
                          v-model="bulletinEvents.eventPlace"
                          label="Event Place"
                        />
                        <q-input
                          filled
                          v-model="bulletinEvents.eventDetails"
                          label="Event Details"
                        />
                        <q-input
                          filled
                          v-model="bulletinEvents.eventStatus"
                          label="Event Status"
                        />
                      </div>
                    </q-card-section>
                    <q-card-actions align="center">
                      <q-btn
                        class="full-width"
                        :label="editDialog ? 'UPDATE' : 'SAVE'"
                        color="primary"
                        size="lg"
                        @click="editDialog ? editEvent() : addEvent()"
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
                <q-btn
                  flat
                  round
                  dense
                  :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen"
                  class="q-ml-md"
                />
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="desc" :props="props">
                    {{ props.row.index }}
                  </q-td>
                  <q-td key="eventName" :props="props">
                    {{ props.row.eventName }}
                  </q-td>
                  <q-td key="eventDate" :props="props">
                    {{ props.row.eventDate }}
                  </q-td>
                  <q-td key="eventPlace" :props="props">
                    <div class="text-pre-wrap">{{ props.row.eventPlace }}</div>
                  </q-td>
                  <q-td key="eventDetails" :props="props">
                    <div class="text-pre-wrap">
                      {{ props.row.eventDetails }}
                    </div>
                  </q-td>
                  <q-td key="eventStatus" :props="props">
                    <div class="text-pre-wrap">{{ props.row.eventStatus }}</div>
                  </q-td>
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="red"
                      round
                      dense
                      icon="edit"
                      @click="getEventById(props.row.id)"
                    />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-tab-panel>

        <q-tab-panel name="NEWS&UPDATES">
          <div class="q-pa-md">
            <q-table
              class="news&updates"
              :data="news"
              :columns="columns2"
              row-key="name"
              binary-state-sort
              :filter="filter"
              :loading="loading"
              :pagination.sync="pagination"
              :rows-per-page-options="[0]"
            >
              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                  <q-th auto-width />
                </q-tr>
              </template>

              <template v-slot:top="props">
                <div class="col-2 q-table__title">NEWS/UPDATES</div>

                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-space />
                <q-btn
                  color="primary"
                  icon-right="addevent"
                  label="ADD NEWS AND UPDATES"
                  no-caps
                  @click="showDialog = true"
                />
                <q-dialog :value="showDialog || editDialog" persistent 
                  @hide="bulletinNews = {}"
                  @input="dialogActionNews()">
                  <q-card style="width: 500px">
                    <q-card-section class="row items-center q-pb-none">
                      <div v-if="showDialog" class="text-h6">ADD NEWS&UPDATES</div>
                      <div v-if="editDialog" class="text-h6">UPDATE NEWS&UPDATES</div>
                      <q-space />
                      <q-btn icon="close" flat round dense v-close-popup />
                    </q-card-section>
                    <q-card-section>
                      <div class="q-gutter-md" style="max-width: 500px">
                        <q-input
                          filled
                          v-model="bulletinNews.newsName"
                          label="News Name"
                        />
                        <q-input
                          filled
                          v-model="bulletinNews.newsDate"
                          label="Event Date"
                          mask="date"
                          :rules="['date']"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                ref="qDateProxy"
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date v-model="bulletinNews.newsDate">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                    </q-card-section>
                    <q-card-actions align="center">
                      <q-btn
                        class="full-width"
                        label="SAVE"
                        color="primary"
                        size="lg"
                        @click="
                          editDialog ? editNews() : addNews()
                        "
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
                <q-btn
                  flat
                  round
                  dense
                  :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen"
                  class="q-ml-md"
                />
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="desc" :props="props">
                    {{ props.row.index }}
                  </q-td>
                  <q-td key="newsName" :props="props">
                    {{ props.row.newsName }}
                  </q-td>
                  <q-td key="newsDate" :props="props">
                    <div class="text-pre-wrap">{{ props.row.newsDate }}</div>
                  </q-td>
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="red"
                      round
                      dense
                      icon="edit"
                      @click="getNewsById(props.row.id)"
                    />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-tab-panel>

        <q-tab-panel name="ACHIEVEMENTS">
          <div class="q-pa-md">
            <q-table
              class="achievement"
              :data="achievement"
              :columns="columns3"
              row-key="name"
              binary-state-sort
              :filter="filter"
              :loading="loading"
              :pagination.sync="pagination"
              :rows-per-page-options="[0]"
            >
              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                  <q-th auto-width />
                </q-tr>
              </template>

              <template v-slot:top="props">
                <div class="col-2 q-table__title">ACHIEVEMENTS</div>

                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
                <q-space />
                <q-btn
                  color="primary"
                  icon-right="addevent"
                  label="ADD ACHIEVEMENTS"
                  no-caps
                  @click="showDialog = true"
                />
                <q-dialog
                  :value="showDialog || editDialog"
                  persistent
                  @hide="bulletinAchievements = {}"
                  @input="dialogActionAchievement()"
                >
                  <q-card style="width: 500px">
                    <q-card-section class="row items-center q-pb-none">
                      <div v-if="showDialog" class="text-h6">
                        ADD ACHIEVEMENTS
                      </div>
                      <div v-if="editDialog" class="text-h6">
                        UPDATE ACHIEVEMENTS
                      </div>
                      <q-space />
                      <q-btn
                        icon="close"
                        flat
                        round
                        dense
                        @click="
                          showDialog
                            ? (showDialog = false)
                            : (editDialog = false)
                        "
                      />
                    </q-card-section>
                    <q-card-section>
                      <div class="q-gutter-md" style="max-width: 500px">
                        <q-input
                          filled
                          v-model="bulletinAchievements.achievementName"
                          label="Achievement Name"
                        />
                        <q-input
                          filled
                          v-model="bulletinAchievements.achievementEvent"
                          label="Achievement Event"
                        />
                      </div>
                    </q-card-section>
                    <q-card-actions align="center">
                      <q-btn
                        class="full-width"
                        :label="editDialog ? 'UPDATE' : 'SAVE'"
                        color="primary"
                        size="lg"
                        @click="
                          editDialog ? editAchievement() : addAchievements()
                        "
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
                <q-btn
                  flat
                  round
                  dense
                  :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="props.toggleFullscreen"
                  class="q-ml-md"
                />
              </template>
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="desc" :props="props">
                    {{ props.row.index }}
                  </q-td>
                  <q-td key="achievementName" :props="props">
                    {{ props.row.achievementName }}
                  </q-td>
                  <q-td key="achievementEvent" :props="props">
                    {{ props.row.achievementEvent }}
                  </q-td>
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="red"
                      round
                      dense
                      icon="edit"
                      @click="getAchievementById(props.row.id)"
                    />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import { event, news, achievement } from "../../firestore/firebaseInit.js";
import eventService from "../../services/event.service.js";
import achievementService from "../../services/achievements.service.js";
import newsService from "../../services/news.service.js";

export default {
  data() {
    return {
      id: "",
      filter: "",
      tab: "EVENTS",
      loading: false,
      showDialog: false,
      editDialog: false,
      pagination: {
        rowsPerPage: 0
      },
      bulletinEvents: {
        eventName: "",
        eventDate: "",
        eventPlace: "",
        eventDetails: "",
        eventStatus: ""
      },
      bulletinAchievements: {
        achievementName: "",
        achievementEvent: ""
      },
      bulletinNews: {
        newsName: "",
        newsDate: ""
      },

      columns: [
        {
          name: "eventName",
          required: true,
          align: "left",
          label: "EVENT NAME",
          field: "eventName"
        },
        {
          name: "eventDate",
          align: "center",
          label: "EVENT DATE",
          field: "event"
        },
        {
          name: "eventPlace",
          align: "center",
          label: "EVENT PLACE",
          field: "eventPlace"
        },
        {
          name: "eventDetails",
          align: "center",
          label: "EVENT DETAILS",
          field: "eventDetails"
        },
        {
          name: "eventStatus",
          align: "center",
          label: "EVENT STATUS",
          field: "eventStatus"
        }
      ],
      columns2: [
        {
          name: "newsName",
          align: "center",
          label: "Name",
          field: "newsName"
        },
        {
          name: "newsDate",
          align: "center",
          label: "Date",
          field: "newsDate"
        }
      ],
      columns3: [
        {
          name: "achievementName",
          align: "center",
          label: "Achievement Name",
          field: "achievementName"
        },
        {
          name: "achievementEvent",
          align: "center",
          label: "Achievement Event",
          field: "achievementEvent"
        }
      ],
      event: [],
      news: [],
      achievement: []
    };
  },
  created() {
    this.getEvents();
    this.getAchievements();
    this.getNews();
  },
  methods: {
    getEvents() {
      this.loading = true;
      event.onSnapshot(docs => {
        docs.forEach(doc => {
          this.event.push({
            id: doc.id,
            eventName: doc.data().eventName,
            eventDate: doc.data().eventDate,
            eventDetails: doc.data().eventDetails,
            eventStatus: doc.data().eventStatus
          });
        });
        this.loading = false;
      });
    },
    getEventById(id) {
      this.id = id;
      eventService.getEventById(id).then(res => {
        this.bulletinEvents = res.data();
        console.log(this.bulletinEvents);
        this.editDialog = true;
      });
    },

    getAchievements() {
      this.loading = true;
      achievement.onSnapshot(docs => {
        docs.forEach(doc => {
          this.achievement.push({
            id: doc.id,
            achievementName: doc.data().achievementName,
            achievementEvent: doc.data().achievementEvent
          });
        });
        this.loading = false;
      });
    },
    getAchievementById(id) {
      this.id = id;
      achievementService.getAchievementById(id).then(res => {
        this.bulletinAchievements = res.data();
        console.log(this.bulletinAchievements);
        this.editDialog = true;
      });
    },
    editAchievement() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      achievementService
        .editAchievement(this.id, this.bulletinAchievements)
        .then(() => {
          this.editDialog = false;
          this.$q.loading.hide();
        });
    },
    dialogActionAchievement(val) {
      console.log(val);
    },

    getNews() {
      this.loading = true;
      news.onSnapshot(docs => {
        docs.forEach(doc => {
          this.news.push({
            id: doc.id,
            newsName: doc.data().newsName,
            newsDate: doc.data().newsDate
          });
        });
        this.loading = false;
      });
    },
    getNewsById(id){
      this.id = id;
      newsService.getNewsById(id).then(res => {
        this.bulletinNews = res.data();
        console.log(this.bulletinNews);
        this.editDialog = true;
      })
    },
    editNews() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      newsService.editNews(this.id, this.bulletinNews)
      .then(() => {
        this.editDialog = false;
        this.$q.loading.hide();
      });
    },
    dialogActionNews(val) {
      console.log(val);
    },

    addEvent() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      let eventInput = this.bulletinEvents;
      event
        .add(eventInput)
        .then(res => {
          console.log("sucess:", res);
          this.showDialog = false;
          this.$q.loading.hide();
        })
        .catch(err => {
          console.log(err.message);
          this.$q.loading.hide();
        });
    },
    addNews() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      let newsInput = this.bulletinNews;
      news
        .add(newsInput)
        .then(res => {
          console.log("Success:", res);
          this.showDialog = false;
          this.$q.loading.hide();
        })
        .catch(err => {
          console.log(err.message);
          this.$q.loading.hide();
        });
    },
    addAchievements() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      let achievementInput = this.bulletinAchievements;
      achievement
        .add(achievementInput)
        .then(res => {
          console.log("Success:", res);
          this.showDialog = false;
          this.$q.loading.hide();
        })
        .catch(err => {
          console.log(err.message);
          this.$q.loading.hide();
        });
    },
    editEvent() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      eventService.editEvent(this.id, this.bulletinEvents).then(() => {
        this.editDialog = false;
        this.$q.loading.hide();
      });
    },
    dialogActionEvent(val) {
      console.log(val);
    }
  }
};
</script>

<style></style>
