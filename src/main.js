import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Sticky, Swipe, SwipeItem,Form,Field,CellGroup  } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Sticky);
app.use(Swipe);
app.use(SwipeItem);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')
