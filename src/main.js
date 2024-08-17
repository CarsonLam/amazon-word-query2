import { createApp } from 'vue'
import App from './App.vue'



import mixpanel from 'mixpanel-browser';
mixpanel.init('5718d49cd1ca1485f0d60b53d52d88ff', {debug: false});
mixpanel.track('open');


createApp(App).mount('#app')
