<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">محصولات</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left large>mdi-plus</v-icon>
        افزودن محصول
      </v-btn>
    </v-row>
    <v-row>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </v-row>
    <div class="text--center">
      <Pagination />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
