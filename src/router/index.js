import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import MyStory from '../views/MyStory.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/story', name: 'MyStory', component: MyStory }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
