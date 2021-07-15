<template>
  <v-card :to="to" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile class="rounded-circle" size="80" color="grey">
        <v-icon large>
          {{ icon }}
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <h3>
          {{ headline }}
        </h3>
        <v-list-item-subtitle>{{ desc }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ["to", "headline", "desc", "icon"]
};
</script>

<style scoped>
h3 {
  font-size: 1.6rem !important;
}
</style>
