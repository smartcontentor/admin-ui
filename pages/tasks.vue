<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">وظایف</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left large>mdi-plus</v-icon>
        <span class="no-letter-spacing">افزودن لیست</span>
      </v-btn>
    </v-row>
    <div :class="scrollbarTheme" class="items" style="width:100%;">
      <draggable class="main">
        <TaskListCard
          v-for="list in lists"
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
export default {
  computed: {
    scrollbarTheme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  data() {
    return {
      lists: [
        {
          id: 0,
          title: "انجام دادن",
          tasks: [
            {
              id: 0,
              title: "عنوان وظیفه شماره ‍1"
            },
            {
              id: 1,
              title: "عنوان وظیفه شماره ‍2"
            },
            {
              id: 2,
              title: "عنوان وظیفه شماره ‍3"
            },
            {
              id: 3,
              title: "عنوان وظیفه شماره ‍4"
            },
            {
              id: 4,
              title: "عنوان وظیفه شماره ‍5"
            }
          ]
        },
        {
          id: 1,
          title: "در حال انجام",
          tasks: [
            {
              id: 0,
              title: "عنوان وظیفه شماره ‍6"
            },
            {
              id: 1,
              title: "عنوان وظیفه شماره ‍7"
            },
            {
              id: 2,
              title: "عنوان وظیفه شماره ‍8"
            },
            {
              id: 3,
              title: "عنوان وظیفه شماره ‍9"
            },
            {
              id: 4,
              title: "عنوان وظیفه شماره ‍10"
            }
          ]
        },
        {
          id: 2,
          title: "پایان یافته",
          tasks: [
            {
              id: 0,
              title: "عنوان وظیفه شماره ‍11"
            },
            {
              id: 1,
              title: "عنوان وظیفه شماره 12"
            },
            {
              id: 2,
              title: "عنوان وظیفه شماره ‍13"
            },
            {
              id: 3,
              title: "عنوان وظیفه شماره 14"
            },
            {
              id: 4,
              title: "عنوان وظیفه شماره ‍15"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.main {
  display: inline-flex;
}

.no-letter-spacing {
  letter-spacing: 0 !important;
}

.item-drag {
  opacity: 1;
}

.light {
  overflow: auto;
  height: 75vh;
}
.light::-webkit-scrollbar {
  width: 15px;
}

.light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
  background: black;
}

.dark {
  overflow: auto;
  height: 75vh;
}

.dark::-webkit-scrollbar {
  width: 15px;
}

.dark::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.dark::-webkit-scrollbar-thumb:hover {
  background: white;
}

/* @media (max-width: 768px) {
  .main {
    flex-direction: column;
  }
} */
</style>
