import signInMainView from "./components/sign-in-view/sign-in-main-view.vue";
import signUpMainView from "./components/sign-up-view/sign-up-main-view.vue";
import dutyCheckMainView from "./components/duty-check/duty-check-main-view.vue";
import ruleSetMainView from "./components/rule-set-view/rule-set-main-view.vue";
import ruleSetCreateView from "./components/rule-set-view/rule-set-create-view.vue";
import ruleSetEditView from "./components/rule-set-view/rule-set-edit-view.vue";
import adminMainView from "./components/admin-view/admin-main-view.vue";
import basicDataMainView from "./components/basic-data-view/basic-data-main-view.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes: any = [
    {path: "/", name: "signIn",component: signInMainView},
    {path: "/sign-in", component: signInMainView},
    {path: "/sign-up", component: signUpMainView},
    {path: "/duty-check",name: "duty-check",component: dutyCheckMainView},
    {path: "/rule-set",name: "rule-set",component: ruleSetMainView},
    {path: "/rule-set/create",component: ruleSetCreateView},
    {path: "/rule-set/edit/:id",component: ruleSetEditView},
    {path: "/admin",name: "admin",component: adminMainView},
    {path: "/basic-data",name: "basic-data",component: basicDataMainView}
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;



