<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"/>

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => (val !== null && val !== '') || 'Please type your age',
            val => (val > 0 && val < 100) || 'Please type a real age']"/>
        <div>
          <q-btn label="Save" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
    name: "addstudent"
};
</script>

<style></style>
