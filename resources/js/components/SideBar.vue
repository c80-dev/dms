<template>
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div> -->
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>
        <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
                <ul class="vertical-nav-menu">
                    <li>
                        <router-link to="/dashboard">
                            <i class="metismenu-icon pe-7s-home"></i>
                            Dashboard
                        </router-link>
                    </li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-diamond"></i>
                                Tag
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link to="/tag-create">
                                    <i class="metismenu-icon"></i>
                                    Create
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/tag-all">
                                    <i class="metismenu-icon"></i>
                                    All Tags
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-folder"></i>
                                Group
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link to="/group-create">
                                    <i class="metismenu-icon"></i>
                                    Create
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/group-all">
                                    <i class="metismenu-icon"></i>
                                    All Groups
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-file"></i>
                                Files
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link to="/file-create">
                                    <i class="metismenu-icon"></i>
                                    Create
                                </router-link>
                            </li>
                            <li>
                                <router-link to="file-all">
                                    <i class="metismenu-icon"></i>
                                    All Files
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link  to="/users">
                            <i class="metismenu-icon pe-7s-users"></i>
                            Users
                        </router-link>
                    </li>
                    <li>
                        <router-link   v-bind:to="'/profile/'+ user.id">
                            <i class="metismenu-icon pe-7s-user"></i>
                           Profile
                        </router-link>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="onLogout()" >
                            <i class="metismenu-icon pe-7s-power"></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import axios from 'axios'

    export default {
        name: 'SideBar',
        methods: {
            onLogout() {
                axios.post('logout', { token : localStorage.getItem('token') } );
                localStorage.removeItem('token');
                this.$router.push('/')
            }
        },
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>
