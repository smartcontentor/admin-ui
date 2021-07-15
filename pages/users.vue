<template>
  <div>
    <v-row class="my-5">
      <h1 class="d-inline p-0 mx-5">کاربران</h1>
      <v-btn class="green darken-2" dark large>
        <v-icon left large>mdi-plus</v-icon>
        افزودن کاربر جدید
      </v-btn>
    </v-row>
    <v-row class="justify-center">
      <UserCard
        name="الهام عزیزی"
        src="https://randomuser.me/api/portraits/women/24.jpg"
      />
      <UserCard
        name="مجید علیزاده"
        src="https://randomuser.me/api/portraits/men/24.jpg"
      />
      <UserCard
        name="سمیه میرزایی"
        src="https://randomuser.me/api/portraits/women/26.jpg"
      />
      <UserCard
        name="هستی عظیمی"
        src="https://randomuser.me/api/portraits/women/23.jpg"
      />
      <UserCard
        name="کیوان رستمی"
        src="https://randomuser.me/api/portraits/men/27.jpg"
      />
      <UserCard
        name="محمد سلیمی"
        src="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <UserCard
        name="نوشین عرفانی"
        src="https://randomuser.me/api/portraits/women/51.jpg"
      />
      <UserCard
        name="الهه مجیدی"
        src="https://randomuser.me/api/portraits/men/33.jpg"
      />
      <UserCard
        name="شروین رمضانی"
        src="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <UserCard
        name="لیلا آبادی"
        src="https://randomuser.me/api/portraits/women/11.jpg"
      />
      <UserCard
        name="یاسمن اکبری"
        src="https://randomuser.me/api/portraits/women/10.jpg"
      />
      <UserCard
        name="مصطفی معتمدی"
        src="https://randomuser.me/api/portraits/men/15.jpg"
      />
    </v-row>
    <v-row class="justify-center">
      <Pagination />
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
