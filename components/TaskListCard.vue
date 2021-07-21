<template>
  <v-card class="pa-2 ma-3" style="width:300px;height:fit-content;">
    <v-card-title class="px-1 d-flex justify-space-between">
      <v-text-field
        v-if="textfield"
        v-model="title"
        @blur="showTextField()"
        @keyup.enter="showTextField()"
        placeholder="نام لیست"
        class="ma-0 pa-0"
        hide-details="auto"
        outlined
        dense
        autofocus
      ></v-text-field>
      <h4 style="cursor:pointer;" v-else @click="showTextField()">
        {{ title }}
      </h4>

      <v-icon style="cursor:move;" v-if="!textfield"
        >mdi-drag-horizontal-variant</v-icon
      >
    </v-card-title>
    <v-btn block color="green darken-1 white--text no-letter-spacing mb-2">
      <v-icon>mdi-plus</v-icon>
      افزودن وظیفه
    </v-btn>
    <draggable
      class="list-group"
      :class="scrollbarTheme"
      :list="list1"
      group="items"
      @change="log"
    >
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
  props: ["id", "title", "tasks"],
  computed: {
    scrollbarTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  data() {
    return {
      textfield: false,
      defaultTitle: this.title
    };
  },
  methods: {
    showTextField() {
      if (this.title) {
        this.textfield = !this.textfield;
        this.defaultTitle = this.title;
      } else {
        this.textfield = !this.textfield;
        this.title = this.defaultTitle;
      }
    }
  }
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}

.list-group {
  height: fit-content;
  max-height: 370px;
  overflow-x: hidden;
  overflow: auto;
  padding: 0 2px;
}

.list-group::-webkit-scrollbar {
  width: 15px;
}

.list-group::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.list-group::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.list-group::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
