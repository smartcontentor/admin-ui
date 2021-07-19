<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">تنظیمات</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left>mdi-content-save</v-icon>
        <span class="no-letter-spacing">ذخیره تغییرات</span>
      </v-btn>
    </v-row>
    <v-divider></v-divider>
    <v-row class="my-5">
      <h3 class="d-inline p-0 mx-5">اطلاعات کاربری</h3>
    </v-row>
    <v-row>
      
      <v-col cols="12" md="4">
        <v-text-field
          label="نام و نام خانوادگی"
          value="محمد سلیمی"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="ایمیل"
          value="mohamad@gmail.com"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="تاریخ تولد"
          value="۱۳۷۹/۱/۱"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          no-resize
          outlined
          label="زندگی نامه"
          value="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
          style="resize:none !important;"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="my-5">
      <h3 class="d-inline p-0 mx-5">تغییر رمز عبور</h3>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          outlined
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          label="رمز عبور جدید"
          hint="حداقل هشت کاراکتر باید باشد"
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          v-model="password_repeat"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          label="تکرار رمز عبور جدید"
          hint="رمز عبور وارد شده باید یکسان باشد"
          @click:append="show2 = !show2"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      password: "",
      password_repeat: ""
    };
  }
};
</script>

<style scoped>
.no-letter-spacing {
  letter-spacing: 0 !important;
}
</style>
