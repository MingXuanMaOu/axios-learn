
import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import VueAxios from 'vue-axios'
import axios from 'axios';
import App from './App.vue'
import DemoOne from '@/components/DemoOne'
import DemoTwo from '@/components/DemoTwo'
import UserName from './components/UserName'
import UserSetting from '@/components/UserSetting'
import UserCategory from '@/components/UserCategory'
import UserFriends from '@/components/UserFriends'

const app = createApp(App)
const routes = [
    { path: '/demo-one',component: DemoOne},
    {   path: '/demo-two',
        component: DemoTwo,
           
    },
    {path: '/user/:username?',
    name: 'user',
    component:UserName,children:[{
        path: 'friends/:count',
        component: UserFriends,
    }] },
    {path: '/user/:id(\\d+)',component:UserSetting},
    {path: '/category/:cat*',component:UserCategory}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

app.use(router)
app.use(ElementPlus)


app.use(VueAxios, axios)
app.mount('#app')
