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
            <v-list-item-content>
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
              <v-icon right large class="mx-4">mdi-account</v-icon>
              ویرایش اطلاعات کاربری
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
              <v-icon right large class="mx-4">mdi-archive</v-icon>
              مشاهده سفارشات سایت
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
              خروج از سیستم
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

<style scoped></style>
