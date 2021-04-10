<template>
  <q-page class="bg-image q-pa-md">
    <div class="row q-col-gutter-lg text-weight-bold">
      <div class="col-5">
        <q-card class="my-card1" flat>
          <img class="bg-profile" src="~assets/Yass.jpg" style="height: 400px; max-width: 430px"/>
          <q-btn color="primary" label="CHANGE IMAGE" @click="refresh" />
          <q-card-section>
            <div class="text-h6">Name: Mohammad Yassier Bashier</div>
            <div class="text-h6">ID NUMBER: 201300000</div>
          </q-card-section>
          <q-card-section>
            MOBILE NO.: 09987654321
          </q-card-section>
          <q-card-section>
            DATE OF BIRTH: 00/00/0000
          </q-card-section>
          <q-card-section>
            GENDER: MALE
          </q-card-section>
          <q-card-section>
            EMAIL: yass@gmail.com
          </q-card-section>
          <q-card-section>
            CITY: MARAWI CITY
          </q-card-section>
          <q-card-section>
            ZIP CODE: 9700
          </q-card-section>
        </q-card>
      </div>
      <div class="col-7">
        <q-card class="my-card2" flat>
          <div class="q-pa-md">
            <div class="q-gutter-y-md column">
              <q-input
                v-model="textareaModel"
                filled
                clearable
                type="textarea"
                color="primary"
                label="BIO"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />
            </div>
          </div>
        </q-card>
          <div class="row q-col-gutter-lg q-pt-md">
            <div class="col-6">
              <q-card class="my-card">
                <q-card-section>
                  FIRST NAME: ATIYA
                </q-card-section>
                <q-card-section>
                  FATHERS NAME: USMAN CAMAMA
                </q-card-section>
              </q-card>
            </div>
            <div class="col-6">
              <q-card class="my-card">
                <q-card-section>
                  LAST NAME: USMAN
                </q-card-section>
                <q-card-section>
                  MOTHERS NAME: ZENAIDA CAMAMA
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { event } from "quasar";

const { stopAndPrevent } = event;

export default {
  data() {
    return {
      inputModel: "",
      textareaModel: "",

      inputFillCancelled: false,
      textareaFillCancelled: false
    };
  },

  computed: {
    inputShadowText() {
      if (this.inputFillCancelled === true) {
        return "";
      }

      const t = "Text filled when you press TAB";
      const empty =
        typeof this.inputModel !== "string" || this.inputModel.length === 0;

      if (empty === true) {
        return t;
      } else if (t.indexOf(this.inputModel) !== 0) {
        return "";
      }

      return t
        .split(this.inputModel)
        .slice(1)
        .join(this.inputModel);
    },

    textareaShadowText() {
      if (this.textareaFillCancelled === true) {
        return "";
      }

      const t =
          "This text\nwill be filled\non multiple lines\nwhen you press TAB",
        empty =
          typeof this.textareaModel !== "string" ||
          this.textareaModel.length === 0;

      if (empty === true) {
        return t.split("\n")[0];
      } else if (t.indexOf(this.textareaModel) !== 0) {
        return "";
      }

      return t
        .split(this.textareaModel)
        .slice(1)
        .join(this.textareaModel)
        .split("\n")[0];
    }
  },

  methods: {
    processInputFill(e) {
      if (e === void 0) {
        return;
      }

      if (e.keyCode === 27) {
        if (this.inputFillCancelled !== true) {
          this.inputFillCancelled = true;
        }
      } else if (e.keyCode === 9) {
        if (
          this.inputFillCancelled !== true &&
          this.inputShadowText.length > 0
        ) {
          stopAndPrevent(e);
          this.inputModel =
            (typeof this.inputModel === "string" ? this.inputModel : "") +
            this.inputShadowText;
        }
      } else if (this.inputFillCancelled === true) {
        this.inputFillCancelled = false;
      }
    },

    processTextareaFill(e) {
      if (e === void 0) {
        return;
      }

      if (e.keyCode === 27) {
        if (this.textareaFillCancelled !== true) {
          this.textareaFillCancelled = true;
        }
      } else if (e.keyCode === 9) {
        if (
          this.textareaFillCancelled !== true &&
          this.textareaShadowText.length > 0
        ) {
          stopAndPrevent(e);
          this.textareaModel =
            (typeof this.textareaModel === "string" ? this.textareaModel : "") +
            this.textareaShadowText;
        }
      } else if (this.textareaFillCancelled === true) {
        this.textareaFillCancelled = false;
      }
    }
  }
};
</script>

<style scoped>
.bg-image {
  background-image: url("~assets/citlogo1.png");
  background-repeat: no-repeat;
  background-size: 70%;
  /* filter: blur(10px); */
  background-position: center;
}
/* .bg-profile {
} */
</style>
