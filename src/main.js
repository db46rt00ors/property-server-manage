// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import { FormModel, cascader } from 'ant-design-vue'
import aTransfer from 'ant-design-vue/es/transfer'
import 'ant-design-vue/es/transfer/style'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import './utils/public.less'
import { Dialog } from '@/components'

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.component('a-transfer', aTransfer)
Vue.use(VueAxios)
Vue.use(Dialog)
Vue.use(FormModel)
Vue.use(cascader)
new Vue({
    router,
    store,
    created: bootstrap,
    render: h => h(App)
}).$mount('#app')
