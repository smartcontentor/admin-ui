<template>
  <v-card
    v-col="12"
    md="6"
    class="ma-3"
    align="center"
    justify="center"
    outlined
    max-width="1000"
  >
    <v-list-item-avatar class="rounded-circle" tile size="82" color="grey">
      <img :src="src" alt="" />
    </v-list-item-avatar>
    <v-list-item three-line>
      <v-list-item-content class="d-flex justify-space-between">
        <div>
          <h3 class="mb-1">
            {{ name }}
          </h3>
          <v-list-item-subtitle
            >توضیحاتی در مورد این کاربر</v-list-item-subtitle
          >
        </div>
        <div class="my-2">
          <v-btn small>
            <v-icon left small>mdi-pencil</v-icon>
            ویرایش اطلاعات
          </v-btn>
          <v-btn small class="red darken-1">
            <v-icon left small>mdi-delete</v-icon>
            حذف کاربر
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ["name", "src"]
};
</script>

<style lang="scss" scoped></style>
