<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">نوشته ها</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left large>mdi-plus</v-icon>
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
    <Pagination />
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
