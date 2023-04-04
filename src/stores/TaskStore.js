import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play Gloomhaven", isFav: true}
        ],
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
    }
})