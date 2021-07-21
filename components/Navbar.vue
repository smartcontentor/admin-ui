<template>
  <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon v-if="showNavIcon" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <ToggleTheme />
      <Notifications />
      <UserProfile />
  </v-app-bar>
</template>

<script>
export default {
  props: ["showNavIcon"],
  data() {
    return {
      title: "پنل مدیریت سایت "
    };
  }
};
</script>

<style lang="scss" scoped></style>
