<template>
  <div class="card">
    <div class="header">
      <div class="header-content"></div>
    </div>
    <div class="content">
      <p>How to make this material card ?</p>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  width: 200px;
  height: 300px;
  background-color: aqua;
}

.content {
  margin: 0 auto;
  width: 10rem;
}

.header-content {
  width: 10rem;
  height: 2rem;
  background-color: brown;
  margin: 1.5rem auto 1.5rem auto;
  border-radius: 0.5rem;
}

.content > b {
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.25rem;
}
</style>