import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function setComponent(path_file) {
    const route_path = "./components/backend/" + path_file + "Component.vue";
    return import ("" + route_path);
}

const routes = [
    { path: "*", component: () => setComponent("error/404") },
    {
        path: "/",
        component: () => setComponent("dashboard/Home"),
        name: "Dashboard",
    },
    {
        path: "/users",
        component: () => setComponent("user/Users"),
        name: "users",
    },
    {
        path: "/roles",
        component: () => setComponent("role/Roles"),
        name: "roles",
    },
    {
        path: "/services",
        component: () => setComponent("service/Services"),
        name: "Services",
    },
    {
        path: "/projects",
        component: () => setComponent("project/Projects"),
        name: "Projects",
    },
    {
        path: "/project/invoice/:id",
        component: () => setComponent("project/Invoice"),
        name: "Project Invoice",
    },
    {
        path: "/project/update/:id",
        component: () => setComponent("project/Edit"),
        name: "Project Update",
    },
    {
        path: "/files",
        component: () => setComponent("project/Files"),
        name: "Project Source Files",
    },

];



const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active" // short for `routes: routes`
});


// router.beforeResolve((to, from, next) => {
//     // $('.page-loader-wrapper').fadeIn();

//     //
//     next()
// })

// router.afterEach((to, from) => {

//     // setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);

// })
export default router;