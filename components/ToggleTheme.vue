<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon @click="toggleTheme()" v-bind="attrs" v-on="on">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </template>
    <span v-if="this.$vuetify.theme.dark">حالت روشن</span>
    <span v-else>حالت تاریک</span>
  </v-tooltip>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else this.$vuetify.theme.dark = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
