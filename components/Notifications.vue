<template>
  <div class="text-center mx-2">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          overlap
          content="3"
          color="primary"
          left
          offset-x="20"
          offset-y="20"
        >
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </v-badge>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title :class="item.color">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "سفارش شماره ۳۲۴۲ با موفقیت ثبت شد", color: "green--text" },
      { title: "سفارش  شماره ۴۵۳۵ لغو شد", color: "red--text" },
      {
        title: `مقاله (چطور یک وبسایت طراحی کنیم ) مورد پسند قرار گرفت`,
        color: ""
      }
    ]
  })
};
</script>

<style scoped></style>
