<template>
  <q-page padding class="text-h4 text-weight-bolder">
   <div class="q-pa-md">
    <q-table class="text-weight-bolder text-h4"
      title="ATTENDANCE"
      :data="data"
      :columns="columns"
      row-key="name"
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:top="props">
           <div class="col-3 q-table__title text-text-weight-bolder text-h4">ATTENDANCE</div>
           <div>
             <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input></div>
           
        <q-space/>
          <q-btn
            color="primary"
            icon-right="add"
            label="IMPORT DATA"
            no-caps
          />
          <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
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
          name: 'date',
          required: true,
          label: 'Date',
          align: 'center',
          field: row => row.date,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Event Name', align: 'center', label: 'Event Name', field: 'event', sortable: true },
        { name: 'Event Place', align: 'center',label: 'Event Place', field: 'place', sortable: true }
      ],
      data: [
        {
          date: 'January 1,2021',
          event: 'College Do-Day',
          place: 'CIT Lobby',
        },
        {
          date: 'September 1,2021',
          event: "University Foundation",
          place: 'Grandstand',
        }
      ]
    }
  }
}
</script>

<style>

</style>