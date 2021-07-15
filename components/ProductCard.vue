<template>
  <v-card col="12" md="4" class="mx-auto my-2" max-width="380" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey" class="rounded-circle">
        <v-icon x-large>mdi-archive</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="mb-1">
          <h3>محصول شماره ۱</h3>
        </v-list-item-title>
        <v-list-item-subtitle>این یک محصول نمونه است</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <div class="d-flex justify-space-around mt-3">
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
              class="mx-2 red darken-1"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small left>mdi-delete</v-icon>
              حذف
            </v-btn>
          </template>
          <v-card>
            <v-card-text class="pa-5"
              >آیا از حذف این محصول مطمئن هستید؟</v-card-text
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
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
