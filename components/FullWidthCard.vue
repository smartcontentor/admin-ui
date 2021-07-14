<template>
  <v-card :to="to" class="mx-auto" style="width:100%;" outlined>
    <v-list-item three-line>
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
  props: ["headline"]
};
</script>

<style lang="scss" scoped></style>
