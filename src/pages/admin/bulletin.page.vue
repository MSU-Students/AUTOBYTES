<template>
  <q-page padding>
    <div class="q-pa-xs">
      <q-table
        style="height: 750px"
        :data="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:top="props">
          <div class="col q-table__title q-mr-lg">BULLETIN</div>
          <div class="row q-gutter-sm q-mb-md">
            <div>
              <q-select
                class="q-mr-md"
                v-model="multiple"
                multiple
                :options="options"
                label="Bulletin Type"
                style="width: 200px"
              />
            </div>

            <div class="q-search">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
                style="width: 200px"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>

            <div>
              <q-btn
                class="q-mr-md"
                color="primary"
                icon="event"
                label="ADD EVENT"
              />
            </div>
          </div>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                size="sm"
                color="primary"
                round
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'remove' : 'add'"
              />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left text-subtitle1">
                <p>Date: 05/12/2021 , 2nd Semester</p>
                <p>FROM: OIPP</p>
                <q-btn
                  :class="$q.screen.lt.md ? 'q-mr-md' : 'q-mr-xl'"
                  color="primary"
                  label="View Picture"
                />
                <q-btn
                  :class="$q.screen.lt.md ? 'q-mr-md' : 'q-mr-xl'"
                  color="primary"
                  label="Edit"
                />
                <q-btn color="primary" label="Archive" />
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      pagination: {
        rowsPerPage: 0
      },
      multiple: null,
      options: [
        "1st Semester",
        "2nd Semester",
        "EVENTS",
        "NEWS AND UPDATES",
        "ACHIEVEMENTS"
      ],
      columns: [
        {
          name: "title",
          required: true,
          label: "TITLE",
          align: "center",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: "type", label: "TYPE", field: "type", align: "center" }
      ],
      data: [
        {
          name: "Sample 1",
          type: "ACHIEVEMENTS"
        },
        {
          name: "2",
          type: "NEWS AND UPDATES"
        },
        {
          name: "3",
          type: "EVENTS"
        },
        {
          name: "4",
          type: "ACHIEVEMENTS"
        },
        {
          name: "5",
          type: "NEWS AND UPDATES"
        },
        {
          name: "6",
          type: "EVENTS"
        },
      ]
    };
  }
};
</script>

<style scoped>
</style>
