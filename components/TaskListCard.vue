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
    <draggable
      :animation="300"
      :fallback-tolerance="1"
      :scroll-sensitivity="1"
      :force-fallback="true"
      :class="scrollbarTheme"
      :list="list1"
      group="items"
      :delay="200"
    >
      <TaskCard
        @drag="dragM"
        v-for="task in tasks"
        :id="task.id"
        :key="task.id"
        :title="task.title"
      />
    </draggable>
    <div>
      <v-btn
        text
        block
        color="green darken-1 white--text no-letter-spacing mb-2"
      >
        <v-icon>mdi-plus</v-icon>
        <span class="no-letter-spacing">افزودن وظیفه</span>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect";

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
      defaultTitle: this.title,
      drag: false,
      disabled: true
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
    },
    isdisable() {
      if (isMobile || isTablet) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}

.light {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: fit-content;
  max-height: 68vh;
  padding: 0 2px;
  margin: 0 4px;
}

.light::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

.light::-webkit-scrollbar-track {
  background: none;
}

.light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 1px #b0b0b0;
  border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
  background: black;
}

.dark {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: fit-content;
  max-height: 68vh;
  padding: 0 2px;
  margin: 0 4px;
}

.dark::-webkit-scrollbar {
  width: 15px;
}

.dark::-webkit-scrollbar-track {
  background: none;
}

.dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.dark::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
