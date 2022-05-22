<template>
  <div class="background">
    <div class="toggle">
      <button @click="handleToggle">Toggle</button>

      <div v-if="!toggle">
        <p>Hi</p>
      </div>
    </div>

    <div>
      <p>
        <!-- Enter Date of Birth: <input v-model="birthdate" type="date" id="DOB" /> -->
        Year:
        <input
          v-model="birthDate"
          type="number"
          min="1900"
          max="2099"
          step="1"
        />
      </p>
      <p>Current Year :{{ currentYear }}</p>
      <p>Birth Date :{{ birthDate }}</p>
      <p>Your Age:{{ age }}</p>
      <button @click="calculateAge">calculate</button>
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

    let today = new Date();
    let currentYear = today.getFullYear();
    let birthDate = ref("");
    let age = ref("");

    const calculateAge = () => {
      return (age.value = currentYear - birthDate.value);
    };

    return {
      toggle,
      handleToggle,
      calculateAge,
      today,
      currentYear,
      birthDate,
      age,
    };
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
