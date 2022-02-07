import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import WelcomeScreen from './pages/WelcomeScreen.vue';
import UsersList from './pages/UsersList.vue';

import App from './App.vue';

// As the same as the store, we use the store with the createRouter part of VueRouter
const router = createRouter({
    // also the history part of VueRouter
    history: createWebHistory(),
    routes: [
      { path: '/', component: WelcomeScreen },
      { path: '/users', component: UsersList },
    ],
});

const app = createApp(App)

app.use(router);

router.isReady().then(() => {
    app.mount('#app');
});
