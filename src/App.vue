<template>
  <main>

    <!-- HEAD -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logi">
      <h1>Pinia Task</h1>
    </header>

    <!-- NEW TASK FORM -->
    <div class="new-task-form">
      <TaskForm/>
    </div>

    <!-- FILTER NAVIGATION -->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'fav'">Favorite Tasks</button>
    </nav>

    <!-- TASK LIST -->
    <div v-if="filter == 'all'" class="task-list">
      <p>All Task{{ taskStore.tasks.length > 1 ? 's' : '' }} ({{ taskStore.allCount }})</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div v-if="filter == 'fav'" class="task-list">
      <p>Favorite Task{{ taskStore.favs.length > 1 ? 's' : '' }} ({{ taskStore.favCount }})</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script setup>

import { useTaskStore } from "./stores/TaskStore"
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";

const taskStore = useTaskStore()

const filter = ref('all');

</script>


