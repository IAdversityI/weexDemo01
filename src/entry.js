/*global Vue*/
import * as filters from '@/filters/index.js'
import mixins from '@/mixins/index.js'

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/App.vue');


Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

