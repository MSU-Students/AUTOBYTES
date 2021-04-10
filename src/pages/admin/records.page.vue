<template>
  <q-page padding class="text-h4 text-weight-bolder">
    RECORDS
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
        <q-tab name="MINUTESOFMEETINGS" label="MINUTES OF MEETINGS" />
        <q-tab name="RECEIPT" label="RECEIPT" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="MINUTESOFMEETINGS">
          <div class="q-pa-md">
            <q-table
              class="minutesofmeetings"
              :data="minutesofmeetings"
              :columns="columns1"
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
                <div class="col-3 q-table__title">MEETINGS OF MINUTES</div>

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
                  label="ADD"
                  no-caps
                  @click="showDialog = true"
                />
                <q-dialog
                  :value="showDialog || editDialog"
                  persistent
                  @hide="minutes = {}"
                  @input="dialogActionReceipt()"
                >
                  <q-card style="width: 500px">
                    <q-card-section class="row items-center q-pb-none">
                      <div v-if="showDialog" class="text-h6">
                        ADD MINUTES OF MEETINGS
                      </div>
                      <div v-if="editDialog" class="text-h6">
                        UPDATE MINUTES OF MEETINGS
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
                          v-model="minutes.date"
                          label="Date"
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
                                <q-date v-model="minutes.date">
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
                          v-model="minutes.agenda"
                          label="Agenda"
                        />
                      </div>
                    </q-card-section>
                    <q-card-actions align="center">
                      <q-btn
                        class="full-width"
                        :label="editDialog ? 'UPDATE' : 'SAVE'"
                        color="primary"
                        size="lg"
                        @click="editDialog ? editMinutes() : addMinutes()"
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
                  <q-td key="date" :props="props">
                    {{ props.row.date }}
                  </q-td>
                  <q-td key="agenda" :props="props">
                    <div class="text-pre-wrap">{{ props.row.agenda }}</div>
                  </q-td>
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="red"
                      round
                      dense
                      icon="edit"
                      @click="getMinutesById(props.row.id)"
                    />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </q-tab-panel>

        <q-tab-panel name="RECEIPT">
          <div class="q-pa-md">
            <q-table
              class="minutesofmeetings"
              :data="receipts"
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
                <div class="col-2 q-table__title">RECEIPT</div>

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
                  label="ADD"
                  no-caps
                  @click="showDialog = true"
                />
                <q-dialog :value="showDialog || editDialog" persistent @hide="receipt = {}"
                @input="dialogActionAchievement()">
                  <q-card style="width: 500px">
                    <q-card-section class="row items-center q-pb-none">
                      <div v-if="showDialog" class="text-h6">ADD RECEIPT</div>
                      <div v-if="editDialog" class="text-h6">UPDATE RECEIPT</div>
                      <q-space />
                      <q-btn icon="close" flat round dense v-close-popup />
                    </q-card-section>
                    <q-card-section>
                      <div class="q-gutter-md" style="max-width: 500px">
                        <q-input
                          filled
                          v-model="receipt.date"
                          label="Date"
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
                                <q-date v-model="receipt.date">
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
                        <q-input filled v-model="receipt.event" label="Event" />
                      </div>
                    </q-card-section>
                    <q-card-actions align="center">
                      <q-btn
                        class="full-width"
                        :label="editDialog ? 'UPDATE' : 'SAVE'"
                        color="primary"
                        size="lg"
                        @click="editDialog ? editReceipts() : addReceipts()"
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
                  <q-td key="date" :props="props">
                    {{ props.row.date }}
                  </q-td>
                  <q-td key="event" :props="props">
                    <div class="text-pre-wrap">{{ props.row.event }}</div>
                  </q-td>
                  <q-td auto-width>
                    <q-btn
                      size="sm"
                      color="red"
                      round
                      dense
                      icon="edit"
                      @click="getReceiptsById(props.row.id)"
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
import { minutesofmeetings, receipts } from "../../firestore/firebaseInit.js";
import minutesServices from "../../services/minutes.services.js";
import receiptServices from "../../services/receipts.services.js";

export default {
  data() {
    return {
      id: "",
      tab: "MINUTESOFMEETINGS",
      filter: "",
      loading: false,
      showDialog: false,
      editDialog: false,
      pagination: {
        rowsPerPage: 0
      },
      minutes: {
        date: "",
        agenda: ""
      },
      receipt: {
        date: "",
        event: ""
      },
      columns1: [
        {
          name: "date",
          align: "center",
          label: "DATE",
          field: "date"
        },
        {
          name: "agenda",
          align: "center",
          label: "AGENDA",
          field: "agenda"
        }
      ],
      columns2: [
        {
          name: "date",
          align: "center",
          label: "DATE",
          field: "date"
        },
        {
          name: "event",
          align: "center",
          label: "EVENT",
          field: "event"
        }
      ],
      minutesofmeetings: [],
      receipts: []
    };
  },
  created() {
    this.getMinutes();
    this.getReceipt();
  },
  methods: {
    getMinutes() {
      this.loading = true;
      minutesofmeetings.onSnapshot(docs => {
        docs.forEach(doc => {
          this.minutesofmeetings.push({
            id: doc.id,
            date: doc.data().date,
            agenda: doc.data().agenda
          });
        });
        this.loading = false;
      });
    },
    getReceipt() {
      this.loading = true;
      receipts.onSnapshot(docs => {
        docs.forEach(doc => {
          this.receipts.push({
            id: doc.id,
            date: doc.data().date,
            event: doc.data().event
          });
        });
        this.loading = false;
      });
    },

    addMinutes() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      let minutesInput = this.minutes;
      minutesofmeetings
        .add(minutesInput)
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

    getMinutesById(id) {
      this.id = id;
      minutesServices.getMinutesById(id).then(res => {
        this.minutes = res.data();
        console.log(this.minutes);
        this.editDialog = true;
      });
    },
    editMinutes() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      minutesServices.editMinutes(this.id, this.minutes).then(() => {
        this.editDialog = false;
        this.$q.loading.hide();
      });
    },
    dialogActionMinutes(val) {
      console.log(val);
    },

    addReceipts() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      let receiptsInput = this.receipt;
      receipts
        .add(receiptsInput)
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

    getReceiptsById(id) {
      this.id = id;
      receiptServices.getReceiptsById(id).then(res => {
        this.receipt = res.data();
        console.log(this.receipt);
        this.editDialog = true;
      });
    },
    editReceipts() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      receiptServices.editReceipts(this.id, this.receipt).then(() => {
        this.editDialog = false;
        this.$q.loading.hide();
      });
    },
    dialogActionReceipt(val) {
      console.log(val);
    }
  }
};
</script>

<style></style>
