const { createApp } = Vue;

createApp({
    data() {
        return {

            todoList: [], //creo un array vuoto che conterrà la lista visualizzata
            language: '',

        }
    }
}).mount('#app')

