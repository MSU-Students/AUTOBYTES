<template>
  <q-page class="q-pa-xl">
    <div class="row q-pt-xl">
      <div class="col-6 q-pt-xs q-pr-xs ">
        <q-card style="height: 600px">
          <q-img
            class="bg-img"
            src="~assets/citbldg.jpg"
            style="height: 600px"
          />
          <div class="absolute-full text-subtitle2 flex flex-center">
            <q-avatar size="200px">
              <img src="~assets/Yass.jpg" />
            </q-avatar>
          </div>
        </q-card>
      </div>
      <div class="col-6 q-pt-xs">
        <q-card class="" style="height: 600px">
          <q-tabs
            v-model="tab"
            class="text-primary q-pt-xs full-width"
            narrow-indicator
            align="justify"
          >
            <q-tab name="info" icon="person" label="Info" />
            <q-tab name="prospectus" icon="article" label="Prospectus" />
            <q-tab name="qrcode" icon="qr_code" label="QR-Code" />
          </q-tabs>
          <q-card-section>
            <q-tab-panels
              keep-alive
              v-model="tab"
              animated
              @transition="showQrCode($event)"
            >
              <q-tab-panel name="info">
                <div class="text-h6 text-center">Personal Information</div>
                <q-separator spaced inset />
                <q-list dense>
                  <q-item v-ripple>
                    <q-item-section>
                      Name: Atiya Mama Usman asdasdasdsa asdasdasd sdaasdasd
                    </q-item-section>
                  </q-item>
                  <q-separator spaced inset />
                  <q-item v-ripple>
                    <q-item-section
                      >Address: 0634 Purok 5, Bo. Marawi Marawi
                      City</q-item-section
                    >
                  </q-item>
                  <q-separator spaced inset />
                  <q-item v-ripple>
                    <q-item-section>Address: </q-item-section>
                  </q-item>
                  <q-separator spaced inset />
                </q-list>
              </q-tab-panel>

              <q-tab-panel name="prospectus">
                <div class="text-h6 text-center">Prospectus</div>
                <q-separator spaced inset />
                Picture
                <div>
                  <q-btn class="q-mt-xl" color="primary" icon="file_download" label="Download" />
                </div>
              </q-tab-panel>

              <q-tab-panel name="qrcode" class="text-center">
                <div class="text-h4 text-weight-medium">
                  Qr Code
                </div>
                <q-separator spaced inset />
                <canvas id="canvas"></canvas>
                <div>
                  <q-btn
                    class="q-mt-xl"
                    color="primary"
                    icon="check"
                    label="Download Qr Code"
                    @click="downloadQrCode()"
                  />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import QrCodeWithLogo from "qrcode-with-logos";

export default {
  data() {
    return {
      tab: "info",
      studentInfo: {
        firstName: "",
        lastName: ""
      }
    };
  },

  methods: {
    async generatedQrCode() {
      return new Promise(resolve => {
        let qrcode = new QrCodeWithLogo({
          canvas: document.getElementById("canvas"),
          content: JSON.stringify(this.studentInfo),
          width: 300,
          download: true,
          logo: {
            src: require("../../assets/citlogo.png")
          }
        });
        resolve(qrcode);
      });
    },

    async showQrCode(tab) {
      if (tab == "qrcode") {
        const qrCode = await this.generatedQrCode();
        await qrCode.toCanvas();
      }
    },

    async downloadQrCode() {
      let img = new Image();
      img.src = require("../../assets/citlogo.png");
      const qrCode = await this.generatedQrCode();
      const res = await qrCode.downloadImage("Student QR Code");
      console.log(res);
    }
  }
};
</script>

<style scoped>
.bg-img {
  filter: blur(2px);
}
</style>
