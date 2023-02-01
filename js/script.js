const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'server.php',
            todoList: [], //creo un array vuoto che conterrà la lista visualizzata
            language: '',

        }
    },
    methods: {
        addElement() {
            const data = {
                item: this.language
            }
            axios.post(this.url, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((response) => {
                this.language = '';
                this.todoList = response.data;
            })
        }
    },
    mounted() {
        axios.get(this.url).then((response) => {
            /* let listObject = JSON.parse(response.data) */
            this.todoList = response.data
            console.log(this.todoList)
            console.log(response)
        })
    },
}).mount('#app')

