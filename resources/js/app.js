/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import router from "./router";
import Swal from 'sweetalert2'
import multiselect from 'vue-multiselect'
import VueProgressBar from 'vue-progressbar'

import moment from "moment";
// register globally
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

Vue.use(VueToast);

window.Swal = Swal;
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('multiselect', multiselect);
Vue.use(VueProgressBar, {
    color: 'rgb(51, 216, 141)',
    failedColor: 'red',
    height: '4px'
})



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


Vue.filter("timeformat", function(value) {
    if (value) {
        return moment
            .utc(String(value))
            .local()
            .fromNow();
    }
});

Vue.filter("projectstatus", function(value) {
    switch (value) {
        case 1:
            return "<span class='btn btn-info btn-round mr-1'>inprocess </span>";
            break;
        case 0:
            return "<span class='btn btn-warning btn-round   mr-1'>pending </span>";
            break;
        case 2:
            return "<span class='btn btn-success btn-round   mr-1'>completed </span>";
            break;
        case 3:
            return "<span class='btn btn-danger btn-round   mr-1'>cancel </span>";
            break;

        default:
            return "<span class='btn btn-warning btn-round  mr-1'>pending </span>";
            break;
    }

});
Vue.prototype.$base_url = window.location.origin;

const app = new Vue({
    el: '#app',
    router,

    created() {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start()
            //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
                //  does the page we want to go to have a meta.progress object
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress
                        // parse meta tags
                    this.$Progress.parseMeta(meta)
                }
                //  start the progress bar
                this.$Progress.start()
                    //  continue to next page
                next()
            })
            //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
        })
    }
});