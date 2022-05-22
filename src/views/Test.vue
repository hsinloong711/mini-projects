<template>
  <div class="background">
    <div class="toggle">
      <button @click="handleToggle">Toggle</button>
      <div v-if="!toggle">
        <p>Hi</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const toggle = ref("false");

    const handleToggle = () => {
      toggle.value = !toggle.value;
    };

    return { toggle, handleToggle };
  },
};
</script>

<style scoped>
.background {
  margin: auto;
  text-align: center;
  margin-left: 500px;
  margin-right: 500px;
}

.toggle {
  margin: 30px;
}
</style>
