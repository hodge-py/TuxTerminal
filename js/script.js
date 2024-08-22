$(document).ready(function(){




    const app = Vue.createApp({
        data() {
            return {
                text: ''
            }
        },
        methods: {
            writeText() {
                this.text = 'Hello World!'
            }
        }
    })
    app.mount('#app')





})