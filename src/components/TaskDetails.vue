<template>
    <div class="task">
        <h3>{{ props.task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(props.task.id)">delete</i>
            <i :class="{active: props.task.isFav}" class="material-icons" @click="taskStore.toggleFav(props.task.id)">favorite</i>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore"


const props = defineProps(['task'])

const taskStore = useTaskStore();

</script>
