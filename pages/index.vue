<template>
  <div>
    <v-row class="my-5">
      <v-col cols="12" md="4">
        <LittleCard
          to="/posts"
          headline="نوشته ها"
          desc="۱۰۰۰ مقاله پر بازدید در سایت"
          icon="mdi-pin"
        />
      </v-col>
      <v-col cols="12" md="4">
        <LittleCard
          to="/products"
          headline="محصولات"
          desc="۱۵۷ محصول پر فروش در سایت"
          icon="mdi-archive"
        />
      </v-col>
      <v-col cols="12" md="4">
        <LittleCard
          to="/users"
          headline="کاربران"
          desc="۱۷۵۷ کاربر فعال در سایت"
          icon="mdi-account"
        />
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col cols="12" md="6">
        <v-card :to="to" class="mx-auto" outlined>
          <v-list-item>
            <v-list-item-content>
              <h3>
                آمار خرید محصولات
              </h3>
              <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
              ></v-sparkline>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-card elevation="0" outlined class="pa-2">
                    <h3>درصد فروش در ماه گذشته</h3>
                    <h4 class="red--text my-1">3٪-</h4>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-card elevation="0" outlined class="pa-2">
                    <h3>درصد فروش در هفته گذشته</h3>
                    <h4 class="green--text my-1">23٪+</h4>
                  </v-card>
                </v-col>
              </v-row>
              <v-card elevation="2"></v-card>
            </v-list-item-content>
          </v-list-item>
          <v-btn
            to="/products"
            class="ma-1 no-letter-spacing"
            plain
            color="primary"
            right
            >مشاهده بیشتر</v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card :to="to" class="mx-auto" style="width:100%;" outlined>
          <v-list-item>
            <v-list-item-content>
              <h3>
                آخرین کاربران سایت
              </h3>
              <v-col style="padding:20px 0;">
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/22.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/21.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/20.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/24.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/25.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/26.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/27.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/28.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/29.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/30.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/31.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/32.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/50.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/52.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/51.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/41.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/45.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/42.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/women/47.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/48.jpg"
                  />
                </v-avatar>
                <v-avatar color="teal" size="48" class="ma-2">
                  <img
                    src="https://randomuser.me/api/portraits/thumb/men/40.jpg"
                  />
                </v-avatar>
              </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-btn
            to="/users"
            class="ma-1 no-letter-spacing"
            plain
            color="primary"
            right
            >مشاهده بیشتر</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#1976d2"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[1],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10],
    gradientDirection: "top",
    gradients,
    fill: false,
    autoLineWidth: false
  })
};
</script>

<style scoped>
h3 {
  font-size: 1.2rem !important;
}

h4 {
  font-size: 2rem !important;
}

.no-letter-spacing {
  letter-spacing: 0 !important;
}
</style>
