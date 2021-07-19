<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">کاربران</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left large>mdi-plus</v-icon>
        <span class="no-letter-spacing">افزودن کاربر جدید</span>
      </v-btn>
    </v-row>
    <v-row class="justify-center">
      <draggable
        v-model="myArray"
        group="people"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group class="my-items" name="item-flip" type="transition">
          <UserCard
            v-for="element in myArray"
            :key="element.id"
            :name="element.name"
            :src="element.src"
          />
        </transition-group>
      </draggable>
    </v-row>
    <v-row class="justify-center">
      <Pagination />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myArray: [
        {
          id: 0,
          name: "الهام عزیزی",
          src: "https://randomuser.me/api/portraits/women/24.jpg"
        },
        {
          id: 1,
          name: "مصطفی معتمدی",
          src: "https://randomuser.me/api/portraits/men/15.jpg"
        },

        {
          id: 2,
          name: "لیلا آبادی",
          src: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
          id: 2,
          name: "مجید علیزاده",
          src: "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
          id: 2,
          name: "سمیه میرزایی",
          src: "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
          id: 2,
          name: "هستی عظیمی",
          src: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
          id: 2,
          name: "کیوان رستمی",
          src: "https://randomuser.me/api/portraits/men/27.jpg"
        },
        {
          id: 2,
          name: "محمد سلیمی",
          src: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          id: 2,
          name: "نوشین عرفانی",
          src: "https://randomuser.me/api/portraits/women/51.jpg"
        },
        {
          id: 2,
          name: "الهه مجیدی",
          src: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
          id: 2,
          name: "شروین رمضانی",
          src: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
          id: 2,
          name: "یاسمن اکبری",
          src: "https://randomuser.me/api/portraits/women/10.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}
.my-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.item-flip-move {
  transition: transform 1s;
}

@media (max-width: 960px) {
  .my-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .my-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
