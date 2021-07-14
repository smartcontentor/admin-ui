<template>
  <v-row>
    <v-col col="12">
      <v-card class="pa-5 my-1">
        <div class="d-flex justify-space-between">
          <h3>{{ headline }}</h3>
          <h4>
            <v-icon>mdi-account</v-icon>
            محمد رضا سلیمی
          </h4>
          <h4>
            <v-icon>mdi-calendar</v-icon>
            ۴ خرداد ۱۴۰۰
          </h4>
        </div>
        <div class="d-flex justify-space-between mt-3">
          <div>
            <v-btn elevation="2" small>
              <v-icon small left>mdi-pencil</v-icon>
              ویرایش
            </v-btn>
            <v-btn elevation="2" small>
              <v-icon small left>mdi-eye</v-icon>
              نمایش
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
                حذف
              </v-btn>
            </template>
            <v-card>
              <v-card-text class="pa-5"
                >آیا از حذف این مقاله مطمئن هستید؟</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">
                  مخالفم
                </v-btn>
                <v-btn color="red darken-1" text @click="dialog = false">
                  <v-icon left>mdi-delete</v-icon>
                  بله حذف کن!
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

<style lang="scss" scoped></style>
