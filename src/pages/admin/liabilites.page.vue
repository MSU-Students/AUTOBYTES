<template>
  <q-page padding class="text-h4 text-weight-bolder">
    LIABILITIES
    <div class="q-pa-md">
      <q-table
        :data="data"
        :columns="columns"
        row-key="name"
        binary-state-sort
      >
        <template v-slot:header="props">
          <div class="col">
          <div class="col q-pl-md">
        </q-input>
          </div>
          </div>
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
            <q-th auto-width />
          </q-tr>
        </template>

         <template v-slot:top="props">
           <div class="col-2 q-table__title">STUDENTS</div>
           
           <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space/>
          <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="desc" :props="props">
              {{ props.row.index }}
              <!-- <q-popup-edit v-model="props.row.index"> -->
                <!-- <q-input v-model="props.row.index" dense autofocus counter /> -->
              </q-popup-edit>
            </q-td>
            <q-td key="name" :props="props">
              {{ props.row.name }}
              <q-popup-edit v-model="props.row.name">
                <q-input v-model="props.row.name" dense autofocus counter />
              </q-popup-edit>
            </q-td>
            <q-td key="id" :props="props">
              {{ props.row.id }}
              <q-popup-edit
                v-model="props.row.id"
                title="Update ID NUMBER"
              >
                <q-input v-model="props.row.id" dense autofocus />
              </q-popup-edit>
            </q-td>
            <q-td key="doday" :props="props">
              <div class="text-pre-wrap">{{ props.row.doday }}</div>
              <q-popup-edit v-model="props.row.doday" title="Update">
                <q-input
                  v-model="props.row.doday"
                  dense
                  autofocus
                />
              </q-popup-edit>
            </q-td>
            <q-td key="fees" :props="props">
              <div class="text-pre-wrap">{{ props.row.fees }}</div>
              <q-popup-edit
                v-model="props.row.fees"
                title="Update"
              >
                <q-input
                  v-model="props.row.year"
                  dense
                  autofocus
                />
              </q-popup-edit>
            </q-td>
            <q-td key="violations" :props="props">
              {{ props.row.violations }}
              <q-popup-edit v-model="props.row.violations">
                <q-input v-model="props.row.violations" dense autofocus counter />
              </q-popup-edit>
            </q-td>
            <q-td key="events" :props="props">
              {{ props.row.events }}
              <q-popup-edit v-model="props.row.events">
                <q-input v-model="props.row.events" dense autofocus counter />
              </q-popup-edit>
            </q-td>
            <q-td auto-width>
              <q-btn size="sm" color="red" round dense icon="edit" />
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
      columns: [
        {
          name: "name",
          align: "left",
          label: "NAME",
          field: "name"
        },
        {
          name: "id",
          align: "left",
          label: "ID NUMBER",
          field: "id"
        },
        {
          name: "doday",
          align: "left",
          label: "Do-DAY",
          field: "doday",
        },
        {
          name: "fees",
          align: "left",
          label: "FEES",
          field: "fees",
        },
        {
          name: "violations",
          align: "left",
          label: "VIOLATIONS",
          field: "violations",
        },
        {
          name: "events",
          align: "left",
          label: "EVENTS",
          field: "events",
        },
      ],
      data: [
        {
          index: "1",
          name: "Usman, Atiya M.",
          id: 201249908,
          doday: "10",
          fees: "College Fees Php 850.00",
          violations: "Book Unreturned",
          events: "Orientation"
        },
        {
          index: "2",
          name: "Maglipac, Krystianne Suzean C.",
          id: 201300000,
          doday: "20",
          fees: "College Fees Php 850.00",
          violations: "",
          events: "Orientation"
        }
      ]
    };
  }
};
</script>

<style></style>
