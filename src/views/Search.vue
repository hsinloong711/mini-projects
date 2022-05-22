<template>
  <div class="background">
    <div class="toggle">
      <button @click="handleToggle">Toggle</button>
      <div v-if="!toggle">
        <p>
          This is a case-senstiive search bar created using computed properties.
        </p>
        <p>
          First, we can create an array of skills and display it using a for
          loop, v-for="skill in skills"
        </p>
        <p>
          Now this is where the search function comes in, create a reactive
          search variable and data-bind it to the input bar.
        </p>
        <p>
          Then, create a function searchedSkills with the filter method to cycle
          through each skill to see if the skill exists.
        </p>
        <p>
          Lastly, we can pass in the argument in the for loop, v-for="skill in
          searchedSkills"
        </p>
      </div>
    </div>

    <div>
      <input type="text" v-model="search" />
      <div v-for="skill in searchedSkills" :key="skill.id">
        <p>{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const toggle = ref("false");

    const handleToggle = () => {
      toggle.value = !toggle.value;
    };

    const search = ref("");

    const skills = [
      "HTML",
      "CSS",
      "Javascript",
      "Vue 3",
      "Firebase 9",
      "Tailwind CSS",
    ];

    const searchedSkills = computed(() => {
      return skills.filter((skill) => skill.includes(search.value));
    });

    return { toggle, handleToggle, search, skills, searchedSkills };
  },
};
</script>

<style scoped>
.background {
  margin: auto;
  text-align: center;
  margin-left: 400px;
  margin-right: 400px;
}

.toggle {
  margin: 30px;
}
</style>
