<template>
  <v-app dark id="main-body">
    <v-app-bar :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <ToggleTheme />
      <Notifications />
      <UserProfile />
    </v-app-bar>
    <Nuxt />
    <v-navigation-drawer v-model="drawer" fixed bottom temporary right>
      <v-list nav class="pa-0 ma-0 my-3">
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="(item, i) in this.$store.state.items"
            :key="i"
            :id="i"
            :to="item.to"
          >
            <v-list-item-action class="ma-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "پنل مدیریت سایت",
      drawer: false
    };
  }
};
</script>

<style scoped>
#main-body {
  font-family: "Vazir FD", sans-serif !important;
}
</style>
