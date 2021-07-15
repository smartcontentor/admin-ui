<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-avatar size="42">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
          </v-avatar>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content class="mx-5">
              <v-list-item-title><h3>محمد رضا سلیمی</h3></v-list-item-title>
              <v-list-item-subtitle class="mt-2"
                >مدیر سایت</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item right class="p-0 m-0">
            <v-btn
              block
              x-large
              plain
              right
              style="justify-content:flex-start;"
            >
              <v-icon right large class="mx-4 no-letter-spacing"
                >mdi-account</v-icon
              >
              <span class="no-letter-spacing">ویرایش اطلاعات کاربری</span>
            </v-btn>
          </v-list-item>

          <v-list-item right class="p-0 m-0">
            <v-btn
              block
              x-large
              plain
              right
              style="justify-content:flex-start;"
            >
              <v-icon right large class="mx-4 no-letter-spacing"
                >mdi-archive</v-icon
              >
              <span class="no-letter-spacing"> مشاهده سفارشات سایت</span>
            </v-btn>
          </v-list-item>

          <v-list-item right class="p-0 m-0">
            <v-btn
              block
              x-large
              plain
              right
              class="red--text"
              style="justify-content:flex-start;"
            >
              <v-icon right large class="mx-4">mdi-logout</v-icon>
              <span class="no-letter-spacing">خروج از سیستم</span>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  })
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}
</style>
