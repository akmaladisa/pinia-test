import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        isLoading: false
    }),

    getters: {
        favs() {
            return this.tasks.filter(task => task.isFav == true)
        },

        favCount() {
            return this.tasks.reduce((accumulator, currentValue) => {
                return ( currentValue.isFav ) ? accumulator + 1 : accumulator
            }, 0)
        },

        allCount() {
            return this.tasks.length;
        }
    },

    actions: {

        async getTasks() {
            this.isLoading = !this.isLoading;

            const res = await fetch('http://localhost:3000/tasks');
            const data = await res.json();

            this.isLoading = !this.isLoading;

            this.tasks = data;
        },

        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'post',
                body: JSON.stringify(task),
                headers: { 'Content-Type': 'application/json' }
            });

            if( res.error ) {
                console.log(res.error);
            }
        },

        async deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)

            const res = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'delete'
            });

            if( res.error ) {
                console.log(res.error);
            }
        },

        async toggleFav(id) {
            const task = this.tasks.find(task => task.id === id);
            task.isFav = !task.isFav

            const res = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ isFav: task.isFav }),
                headers: { 'Content-Type': 'application/json' }
            });

            if( res.error ) {
                console.log(res.error);
            }

        }
    }
})