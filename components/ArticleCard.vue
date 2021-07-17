<template>
  <v-row>
    <v-col col="12">
      <v-card class="pa-5 my-1">
        <div class="d-flex justify-space-between">
          <h3>{{ headline }}</h3>
          <h4>
            <v-icon>mdi-account</v-icon>
            <span class="np-letter-spacing">محمد رضا سلیمی</span>
          </h4>
          <h4>
            <v-icon>mdi-calendar</v-icon>
            <span class="no-letter-spacing">۴ خرداد ۱۴۰۰</span>
          </h4>
        </div>
        <div class="d-flex justify-space-between mt-3">
          <div>
            <v-btn elevation="2" small>
              <v-icon small left>mdi-pencil</v-icon>
              <span class="no-letter-spacing">ویرایش</span>
            </v-btn>
            <v-btn elevation="2" small>
              <v-icon small left>mdi-eye</v-icon>
              <span class="no-letter-spacing">نمایش</span>
            </v-btn>
          </div>
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="2"
                dark
                small
                text
                class="red darken-1"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon small left>mdi-delete</v-icon>
                <span class="no-letter-spacing">حذف</span>
              </v-btn>
            </template>
            <v-card>
              <v-card-text class="pa-5"
                >آیا از حذف این مقاله مطمئن هستید؟</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">
                  <span class="no-letter-spacing">مخالفم</span>
                </v-btn>
                <v-btn color="red darken-1" text @click="dialog = false">
                  <v-icon left>mdi-delete</v-icon>
                  <span class="no-letter-spacing">بله حذف کن!</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["headline"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}
</style>
