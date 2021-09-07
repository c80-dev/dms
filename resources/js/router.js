import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({

    routes: [

        { path: '/', name: 'Login', component: () => import('./views/pages/auth/Login.vue') },
        { path: '/register', name: 'Register', component: () => import('./views/pages/auth/Register.vue') },
        { path: '/forgot-password', name: 'ForgotPassword', component: () => import('./views/pages/auth/ForgotPassword.vue') },
        { path: '/dashboard', name: 'Dashboard', component: () => import('./views/Dashboard.vue') },

        { path: '/group-create', name: 'GroupCreate', component: () => import('./views/pages/group/GroupCreate.vue') },
        { path: '/group-all', name: 'GroupAll', component: () => import('./views/pages/group/GroupAll.vue') },
        { path: '/group-edit/:id', name: 'GroupEdit', component: () => import('./views/pages/group/GroupEdit.vue') },
        { path: '/group-show/:id', name: 'GroupShow', component: () => import('./views/pages/group/GroupShow.vue') },

        { path: '/tag-create', name: 'TagCreate', component: () => import('./views/pages/tag/TagCreate.vue') },
        { path: '/tag-all', name: 'TagAll', component: () => import('./views/pages/tag/TagAll.vue') },
        { path: '/tag-edit/:id', name: 'TagEdit', component: () => import('./views/pages/tag/TagEdit.vue') },
        { path: '/tag-show/:id', name: 'TagShow', component: () => import('./views/pages/tag/TagShow.vue') },

        { path: '/file-create', name: 'FileCreate', component: () => import('./views/pages/file/FileCreate.vue') },
        { path: '/file-all', name: 'FileAll', component: () => import('./views/pages/file/FileAll.vue') },
        { path: '/file-edit/:id', name: 'FileEdit', component: () => import('./views/pages/file/FileEdit.vue') },
        { path: '/file-show/:id', name: 'FileShow', component: () => import('./views/pages/file/FileShow.vue') },

        { path: '/change-password', name: 'ChangePassword', component: () => import('./views/pages/user/ChangePassword.vue') }
    ]
});
