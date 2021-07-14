<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">نوشته ها</h1>
      <v-btn class="green darken-2" dark>
        <v-icon left>mdi-plus</v-icon>
        افزودن نوشته
      </v-btn>
    </v-row>
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
    <ArticleCard headline="عنوان مقاله" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
