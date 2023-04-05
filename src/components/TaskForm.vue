<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to..." v-model="newTask">
        <button>Add</button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();

const newTask = ref('');

const handleSubmit = () => {
    if( newTask.value.length > 0 ) {
        taskStore.addTask({
            id: Math.floor(Math.random() * 9999),
            title: newTask.value,
            isFav: false
        })

        newTask.value = '';
    } else {
        alert("Task Name Cannot be Empty!")
    }

}


</script>

<style lang="scss" scoped>

</style>