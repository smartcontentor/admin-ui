<template>
  <div class="tasks-box">
    <div :class="scrollbarTheme" class="items" style="width:100%;">
      <draggable :animation="200" class="main" :delay="100">
        <TaskListCard
          v-for="list in this.$store.state.lists"
          :key="list.id"
          :id="list.id"
          :title="list.title"
          :tasks="list.tasks"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect";

export default {
  layout: "tasks_layout",
  computed: {
    scrollbarTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  methods: {
    disableScroll() {
      setTimeout(() => {
        return false;
      }, 200);
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
.tasks-box {
  margin: 70px 0 0 0;
  height: calc(100vh - 70px);
  overflow-y: hidden;
  overflow-x: auto;
}

.main {
  display: inline-flex;
}

.light {
  overflow-x: auto;
  overflow-y: hidden;
  height: calc(100vh - 70px);
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
  overflow-x: auto;
  overflow-y: hidden;
  height: calc(100vh - 70px);
}

.dark::-webkit-scrollbar {
  height: 12px;
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
