const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'server.php',
            todoList: [], //creo un array vuoto che conterrà la lista visualizzata
            language: '',

        }
    }, mounted() {
        axios.get(this.url).then((response) => {
            /* let listObject = JSON.parse(response.data) */
            this.todoList = response.data
        })
    },
}).mount('#app')

