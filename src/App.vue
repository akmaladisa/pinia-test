<template>
  <main>

    <!-- HEAD -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logi">
      <h1>Pinia Task</h1>
    </header>

    <!-- TASK LIST -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script setup>

import { useTaskStore } from "./stores/TaskStore"
import TaskDetails from "./components/TaskDetails.vue";

const taskStore = useTaskStore()

</script>


