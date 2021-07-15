<template>
  <v-card
    v-col="12"
    md="6"
    class="ma-3"
    align="flex-start"
    justify="space-between"
    outlined
    max-width="1000"
  >
    <v-list-item>
      <v-list-item-avatar class="rounded-circle" tile size="64" color="grey">
        <img :src="src" alt="" />
      </v-list-item-avatar>
      <v-list-item-content class="d-flex justify-space-between">
        <div>
          <h3 class="mb-1">
            {{ name }}
          </h3>
          <v-list-item-subtitle
            >توضیحاتی در مورد این کاربر</v-list-item-subtitle
          >
        </div>
      </v-list-item-content>
      <div class="my-2">
        <v-menu
          bottom
          offset-y="10"
          transition="slide-y-transition"
          :close-on-click="closeOnClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list max-width="200">
            <v-list-item class="pa-0">
              <v-btn block large text plain v-ripple="false">
                <v-icon left>mdi-pencil</v-icon>
                <span class="no-letter-spacing">ویرایش</span>
              </v-btn>
            </v-list-item>
            <v-list-item class="pa-0">
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    large
                    plain
                    class="mx-2 red--text"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon left>mdi-delete</v-icon>
                    <span class="no-letter-spacing">حذف</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text class="pa-5"
                    >آیا از حذف این محصول مطمئن هستید؟</v-card-text
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
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ["name", "src"],
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
