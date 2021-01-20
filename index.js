var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!'
    },
});

var app = new Vue({
    el: '#app2',
    data: {
        seen: true
    }
});

var app = new Vue({
    el: '#app3',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var app = new Vue({
    el: '#app4',
    data: {
        firstname: [
            { name: 'Mark' },
            { name: 'Jacob' },
            { name: 'Larry' }
        ],
        lastname: [
            { name: 'Otto' },
            { name: 'Thornton' },
            { name: 'Larry the Bird' }
        ],
        handle: [
            { name: '@mdo' },
            { name: '@fat' },
            { name: '@twitter' }
        ]
    }
});

var app = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app = new Vue({
    el: '#app6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    template: '<li>This is a todo</li>',
})

var app = new Vue({
    el: '#app7'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app8',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' },
            { id: 4, text: 'This is line 4' }
        ]
    }
})