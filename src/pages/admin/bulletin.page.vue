<template>
  <q-page padding>
    <div class="q-pa-xs">
      <q-table
        :data="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
            <q-th auto-width />
          </q-tr>
        </template>

        <te
        <template v-slot:top="props">
          <div class="col-2 q-table__title"> BULLETIN </div>
            <q-select
              v-model="multiple"
              multiple
              :options="options"
              label="TYPE"
              style="width: 250px"
            />
          <q-space />
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
          <q-btn color="primary" icon="check" label="OK" @click="onClick" />
          <q-space />
          <q-btn color="primary" icon="check" label="OK" @click="onClick" />
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
      multiple: null,
      options: ['1st Semester','2nd Semester', 'EVENTS', 'NEWS AND UPDATES', 'ACHIEVEMENTS'],
      columns: [
        {
          name: "title",
          required: true,
          label: "TITLE",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: "date", align: "center", label: "DATE", field: "date" },
        { name: "semester", label: "SEMESTER", field: "semester" },
        { name: "office", label: "OFFICE", field: "office" },
        { name: "type", label: "TYPE", field: "type" }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          date: 159,
          semester: 6.0,
          office: 24,
          type: "Achievement"
        },
        {
          name: "Frozen Yogurt2",
          date: 159,
          semester: 6.0,
          office: "OIPP",
          type: "Achievement"
        },
        {
          name: "Frozen Yogurt3",
          date: 159,
          semester: 6.0,
          office: 24,
          type: "Achievement"
        }
      ]
    };
  }
};
</script>

<style lang="sass"></style>
