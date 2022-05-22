<template>
  <header>
    <a href="/" id="logo">GARY</a>
    <nav>
      <!-- Router for Home / About / Shop -->
      <router-link class="router" :to="{ name: 'home' }">Home</router-link>
      <router-link class="router" :to="{ name: 'search' }">Search</router-link>
      <router-link class="router" :to="{ name: 'age' }">Age</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
template {
  overflow: hidden;
}

header {
  display: flex;
  padding-top: 20px;
  width: 100%;
  transition: 0.5 ease all;
}

nav {
  width: 100%;
  margin-left: 50px;
}

#logo {
  font-size: 45px;
  color: black;
  font-family: "Syne Mono", monospace;
  margin-left: 50px;
  padding-bottom: 12px;
}

nav a {
  font: 14px/28px "D-Din", Arial, Verdana, sans-serif;
  font-weight: 700;
  font-style: normal;
  position: relative;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding-bottom: 5px;
  margin-left: 30px;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

nav a.router-link-exact-active {
  color: black;
}

/* nav a.router-link-exact-active:hover {
  background-color: black;
} */

.router {
  position: relative;
  color: black;
}
.router::after {
  color: hsla(160, 100%, 37%, 1);
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}

.router:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
