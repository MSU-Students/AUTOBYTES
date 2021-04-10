<template>
  <q-page padding class="text-h4 text-weight-bolder">
    ACCOUNTS
    <div class="q-pa-md">
      <q-table
        :data="accounts"
        :columns="columns"
        row-key="name"
        binary-state-sort
        :filter="filter"
        :loading="loading"
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
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
            color="primary"
            icon-right="person_add"
            label="ADD STUDENT"
            no-caps
            @click="showDialog = true"
          />
          <q-dialog :value="showDialog || editDialog" persistent @hide="students = {}"
            @input="dialogActionAccount()"
            >
            <q-card style="width: 500px">
              <q-card-section class="row items-center q-pb-none">
                <div v-if="showDialog" class="text-h6">ADD STUDENT</div>
                <div v-if="editDialog" class="text-h6">UPDATE STUDENT</div>
                <q-space />
                <q-btn icon="close" flat round dense @click="showDialog ? (showDialog = false) : (editDialog = false)" />
              </q-card-section>
              <q-card-section>
                <div class="q-gutter-md" style="max-width: 500px">
                  <q-input filled v-model="students.firstname" label="First Name" />
                  <q-input filled v-model="students.middlename" label="Middle Name" />
                  <q-input filled v-model="students.lastname" label="Last Name" />
                  <q-input filled v-model="students.date" label= "Birthdate" mask="date" :rules="['date']">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="students.date">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-select filled v-model="students.year" :options="options" label="Year"/>
                  <q-select filled v-model="students.course" :options="options2" label="Course and Major" />
                  <q-input filled v-model="students.idnumber" mask="#########" label="ID Number" />
                  <q-input filled v-model="students.password"  label="Password" />
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  class="full-width"
                  :label="editDialog ? 'UPDATE' : 'SAVE'"
                  color="primary"
                  size="lg"
                  @click="editDialog ? editStudent() : addStudents()"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
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
            </q-td>
            <q-td key="firstname" :props="props">
              {{ props.row.firstname }}
            </q-td>
            <q-td key="middlename" :props="props">
              {{ props.row.middlename }}
            </q-td>
            <q-td key="lastname" :props="props">
              {{ props.row.lastname }}
            </q-td>
            <q-td key="date" :props="props">
              <div class="text-pre-wrap">{{ props.row.date }}</div>
            </q-td>
            <q-td key="year" :props="props">
              <div class="text-pre-wrap">{{ props.row.year }}</div>
            </q-td>
            <q-td key="course" :props="props">
              {{ props.row.course }}
            </q-td>
            <q-td key="idnumber" :props="props">
              {{ props.row.idnumber }}
            </q-td>
            <q-td key="password" :props="props">
              {{ props.row.password }}
            </q-td>
            <q-td auto-width>
              <q-btn size="sm" color="red" round dense icon="edit"
              @click="getAccountsById(props.row.id)" />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { accounts } from "../../firestore/firebaseInit.js";
import accountsService from "../../services/accounts.service.js";

export default {
  data() {
    return {
      id: "",
      filter: "",
      loading: false,
      showDialog: false,
      editDialog: false,
      pagination: {
        rowsPerPage: 0
      },
      options: [
        '1st Year', '2nd Year', '3rd Year', '4th Year'
      ],
      options2: [
        'BSIT - Database','BSIT - Multimedia','BSIT - Networking','Computer Science','Informtaion System'
      ],
      students: {
        firstname: "",
        middlename: "",
        lastname: "",
        date: "",
        year: "",
        course: "",
        idnumber: "",
        password: "",
      },
    

      columns: [
        {
          name: "firstname",
          align: "center",
          label: "First Name",
          field: "firstname",
        },
        {
          name: "middlename",
          align: "center",
          label: "Middle Name",
          field: "middlename"
        },
        {
          name: "lastname",
          align: "center",
          label: "Last Name",
          field: "lastname",
          sortable: true
        },
        {
          name: "date",
          align: "center",
          label: "Birthdate",
          field: "date"
        },
        {
          name: "year",
          label: "Year",
          field: "year",
          sortable: true
        },
        {
          name: "course",
          label: "Course",
          align: "left",
        },
        {
          name: "idnumber",
          label: "ID Number",
          field: "idnumber",
        },
        {
          name: "password",
          label: "Password",
          field: "password"
        }
      ],
      accounts: []
    };
  },
  created (){
    this.getAccounts();
  },
  methods: {
    getAccounts(){
      this.loading = true;
      accounts.onSnapshot(docs => {
        docs.forEach(doc => {
          this.accounts.push({
            id: doc.id,
            firstname: doc.data().firstname,
            middlename: doc.data().middlename,
            lastname: doc.data().lastname,
            date: doc.data().date,
            year: doc.data().year,
            course: doc.data().course,
            idnumber: doc.data().idnumber,
            password: doc.data().password
          });
        });
        this.loading = false;
      });
    },

    getAccountsById(id) {
      this.id = id;
      accountsService.getAccountsById(id).then(res => {
        this.students = res.data();
        console.log(this.students);
        this.editDialog = true;
      });
    },

    editStudent() {
      this.$q.loading.show({
        message: "Please wait..."
      });
      accountsService
      .editAccounts(this.id, this.students)
      .then(() => {
        this.editDialog = false;
        this.$q.loading.hide();
      })
    },

    dialogActionAccount(val) {
      console.log(val);
    },

    addStudents() {
        this.$q.loading.show({
        message: 'Please wait...'
      })
      let studentInput = this.students;
      accounts.add(studentInput).then (res => {
          console.log("success", res);
          this.showDialog = false;
          this.$q.loading.hide();
        })
        .catch(err => {
          console.log(err.message)
         this.$q.loading.hide();
         });
    }
  }
};
</script>

<style></style>
