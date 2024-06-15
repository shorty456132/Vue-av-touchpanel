import { createRouter, createWebHistory } from 'vue-router';
import RoomControls from './views/RoomControls.vue';

const routes = [
  {
    path: '/',
    name: 'RoomControls',
    component: RoomControls,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
