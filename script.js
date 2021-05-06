const app = new Vue({

    el: "#app",

    data:{

        alertInputActive: false,
        alertContainerActive: false,
        todos: [
            {todo:'ripassare HTML', checked: false},
            {todo:'ripassare CSS', checked: true},
            {todo:'ripassare JS', checked: true},
            {todo:'ripassare JQUERY', checked: false},
            {todo:'ripassare VUE', checked: false}
        ],
        strTodo: ""

    },
    
    methods:{

        removeTodo(index){

            

            if(this.todos[index].checked === true){
                this.todos.splice(index,1)
            }else{
                this.alertContainerActive = true;
                setTimeout(() => {
                    this.alertContainerActive = false;
                }, 2000);
            }

            
        },

        addTodo(){
            if(this.strTodo.length > 2){
                this.todos.push({todo: this.strTodo, checked: false})
                this.strTodo = "";
            }else{
                this.alertInputActive = true;
                setTimeout(() => {
                    this.alertInputActive = false;
                }, 2000);
            }
            
        }

    }

})