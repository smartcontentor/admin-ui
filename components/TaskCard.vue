<template>
  <v-card
    outlined
    class="pa-3 my-1 d-flex justify-space-between item"
    elevation="0"
    style="cursor:move;"
  >
    <span>
      <v-icon small>mdi-drag-horizontal-variant</v-icon>
      <span>{{ title }}</span>
    </span>
    <v-btn icon small>
      <v-icon small>mdi-pencil</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped></style>
