<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        style="height: 400px"
        title="ATTENDANCE"
        :data="data"
        :columns="columns"
        row-key="index"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "TITLE",
          align: "center",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "date",
          label: "DATE",
          align: "center",
          field: "date",
          sortable: true
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          date: "05/12/2021"
        }
      ]
    };
  }
};
</script>

<style></style>
