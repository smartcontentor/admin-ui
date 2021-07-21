<template>
  <div>
    <div v-if="!showCard" class="edit-box">
      <v-btn large icon color="white" class="btn-close">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
      <div>
        <v-textarea
          dark
          outlined
          ref="textarea"
          v-model="title"
          @keyup.enter="toggleCard"
          @blur="toggleCard"
          v-if="!showCard"
          :rules="rules"
          class="my-1 textarea"
          hide-details="auto"
          autofocus
        ></v-textarea>
        <v-btn
          v-if="!showCard"
          class="green darken-1 btn-save white--text"
          @click="toggleCard"
        >
          <v-icon>mdi-floppy</v-icon>
          <span class="no-letter-spacing">ذخیره</span>
        </v-btn>
      </div>
    </div>
    <v-card
      @contextmenu.prevent="toggleCard"
      v-if="showCard"
      outlined
      class="pa-3 my-1 d-flex align-center justify-space-between item"
      :class="hoverColor"
      elevation="0"
    >
      <span>
        <span truncate>{{ title }}</span>
      </span>
      <v-btn small text class="btn" @click="toggleCard">
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    hoverColor() {
      return this.$vuetify.theme.dark ? "darkBtn" : "lightBtn";
    }
  },
  data() {
    return {
      showCard: true,
      defaultTitle: this.title
    };
  },
  methods: {
    toggleCard: function() {
      if (this.title) {
        this.showCard = !this.showCard;
        this.defaultTitle = this.title;
      } else {
        this.showCard = !this.showCard;
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
.item {
  cursor: pointer;
}

.edit-box::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99998;
}

.textarea {
  width: 275px;
  z-index: 99999;
}

.edit-box .btn-save {
  position: fixed;
  z-index: 99999 !important;
}

.btn-close {
  position: fixed;
  top: 70px;
  left: 20px;
  z-index: 99999;
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

.darkBtn:hover {
  background-color: #424242;
}

.lightBtn:hover {
  background-color: #f5f5f5;
}
</style>
