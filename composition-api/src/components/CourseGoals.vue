<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";

export default {
  components: {
    GoalsList,
    AddGoal,
  },
  // We can pass a props to the setup
  // setup(props) {
  setup() {
    // into setup() we not can access to data with this.
    // create a variable, but with refs only when vue is loaded and can update the template.
    const goals = ref([]);

    const filteredGoals = computed(function() {
      // We need to use .value to access to the value of the refs
      return goals.value.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      );
    });

    // We can add a function inside a function
    function addGoal(text){
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      };
      goals.value.push(newGoal);
    }

    return {
      // We can use this userGolas as a data source for the GoalsList component
      // userGoals: goals

      filteredGoals: filteredGoals,
      addGoal: addGoal
    };

  }
  // data() {
  //   return {
  //     goals: [],
  //   };
  // },
  // computed: {
  //   filteredGoals() {
  //     return this.goals.filter(
  //       (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
  //     );
  //   },
  // },
  // methods: {
  //   addGoal(text) {
  //     const newGoal = {
  //       id: new Date().toISOString(),
  //       text: text,
  //     };
  //     this.goals.push(newGoal);
  //   },
  // },
};
</script>