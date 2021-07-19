<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">نوشته ها</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left large>mdi-plus</v-icon>
        <span class="no-letter-spacing">افزودن نوشته</span>
      </v-btn>
    </v-row>
    <draggable
      v-model="myArray"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group class="my-items" name="item-flip" type="transition">
        <ArticleCard
          v-for="element in myArray"
          :key="element.id"
          :headline="element.name"
        />
      </transition-group>
    </draggable>
    <Pagination />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      myArray: [
        { id: 0, name: "عنوان مقاله ۱" },
        { id: 1, name: "عنوان مقاله ۲" },
        { id: 2, name: "عنوان مقاله ۳" },
        { id: 3, name: "عنوان مقاله ۴" },
        { id: 4, name: "عنوان مقاله ۵" },
        { id: 5, name: "عنوان مقاله ۶" },
        { id: 6, name: "عنوان مقاله ۷" },
        { id: 7, name: "عنوان مقاله ۸" },
        { id: 8, name: "عنوان مقاله ۹" },
        { id: 9, name: "عنوان مقاله ۱۰" }
      ]
    };
  }
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}
.item-flip-move {
  transition: transform 1s;
}
</style>
