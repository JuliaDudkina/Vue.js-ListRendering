const app = Vue.createApp({
    data(){
        return{
            enteredValue: '',
            tasks: [],
            visibility: true
        }
    },
    computed:{ // has to return !!!!!!!!!!
        buttonText(){
            return this.visibility ? "Hide" : "Show";
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredValue);
            this.enteredValue = '';
        },
        toggle(){
            this.visibility = !this.visibility;
        }
    }
})
app.mount('#assignment')