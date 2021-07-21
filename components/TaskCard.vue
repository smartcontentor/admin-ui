<template>
  <v-card
    outlined
    class="pa-3 my-1 d-flex align-center justify-space-between item"
    :class="hoverColor"
    elevation="0"
  >
    <span>
      <v-icon small>mdi-drag-horizontal-variant</v-icon>
      <span>{{ title }}</span>
    </span>
    <v-btn small text class="btn">
      <v-icon small>mdi-pencil</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    hoverColor() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

<style scoped>
.item {
  z-index: 9999;
  cursor: pointer;
  height: 40px;
}

.btn {
  display: none;
  min-width: 0 !important;
  width: 32px !important;
  height: 24px;
}

.item:hover .btn {
  display: inline-block !important;
}

.dark:hover {
  background-color: #424242;
}

.light:hover {
  background-color: #f5f5f5;
}
</style>
