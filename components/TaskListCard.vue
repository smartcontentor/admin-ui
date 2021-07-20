<template>
  <v-card class="pa-2 ma-3" style="width:300px;height:fit-content;">
    <v-card-title class="p-0 d-flex justify-space-between">
      <h4>{{ title }}</h4>
      <v-icon style="cursor:move;">mdi-drag-horizontal-variant</v-icon>
    </v-card-title>
    <v-btn block color="green darken-1 white--text no-letter-spacing mb-2">
      <v-icon>mdi-plus</v-icon>
      افزودن وظیفه
    </v-btn>
    <draggable class="list-group" :list="list1" group="items" @change="log">
      <TaskCard
        v-for="task in tasks"
        :id="task.id"
        :key="task.id"
        :title="task.title"
      />
    </draggable>
  </v-card>
</template>

<script>
export default {
  props: ["id", "title", "tasks"]
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}
</style>
