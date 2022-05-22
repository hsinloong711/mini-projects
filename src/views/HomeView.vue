<script>
export default {
  name: "HomeView",
};
</script>

<template>
  <div class="background">
    <div class="backdrop"></div>
    <h2>Mini Projects</h2>
    <p>Hi, welcome to my page.</p>
    <p>This is where I practise my coding skills.</p>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  overflow: hidden;
}
.background {
  background-image: url("https://source.unsplash.com/9Z1KRIfpBTM");
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 825px;
}

.backdrop {
  margin: auto;
  width: 800px;
}

h2 {
  display: block;
  text-align: center;
  font: 50px/100px "D-DIN", Arial;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0;
  padding-top: 28px;
}

p {
  display: block;
  text-align: center;
  font: 20px/20px "D-DIN", Arial;
  font-weight: 400;
  max-width: 1687px;
}
</style>
