<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        style="height: 400px"
        title="CLEARANCE"
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
          label: "NAME",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "fees",
          align: "center",
          label: "FEES",
          field: "calories",
          sortable: true
        },
        { name: "violation", label: "VIOLATIONS", field: "fat", sortable: true },
        { name: "fines", label: "FINES", field: "carbs" }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        }
      ]
    };
  }
};
</script>

<style></style>
