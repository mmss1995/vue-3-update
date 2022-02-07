
// New method to creat the app
const app = Vue.createApp({
  data() {
    return {message: 'This works in Vue 2!'};
  },
  methods: {
    changeMessage() {
      this.message = 'Will it work in Vue 3?';
    },
  },
})

// new method to add components with the emit method
// The emit method say to us witch event we want to trigger inside the component (optional)
app.component('the-button', {
  emits: ['update'],
  template: '<button @click="updateMessage">Click me</button>',
  methods: {
    updateMessage() {
      this.$emit('update');
    },
  },
});

// New method to mout the app

app.mount('#app');
