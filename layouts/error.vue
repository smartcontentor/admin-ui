<template>
  <div>
    <h1 class="d-block">404</h1>
    <p>چیزی پیدا نشد!</p>
    <v-btn to="/">
      بازگشت به خانه
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 12rem;
  margin: 0;
  padding: 0;
  height: 50%;
}
p {
  font-size: 24px;
}
div {
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  h1 {
    font-size: 12rem;
    margin: 0;
    padding: 0;
    height: 45%;
  }
}
</style>
