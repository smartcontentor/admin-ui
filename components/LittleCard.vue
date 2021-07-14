<template>
  <v-card :to="to" class="mx-auto" max-width="380" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile class="rounded-circle" size="80" color="grey">
        <v-icon large>
          {{ icon }}
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <h1>
          {{ headline }}
        </h1>
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
