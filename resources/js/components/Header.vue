<template>
    <div class="app-header header-shadow">
            <div class="app-header__logo">
                <div class="">
                     <img width="50" :src="asset('images/logo.png')" alt="">
                </div>
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
            </div>    <div class="app-header__content">
                <div class="app-header-left">
                    <div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search">
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close"></button>
                    </div>
                    <ul class="header-menu nav">
                        <li class="dropdown nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-cog"></i>
                                Settings
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <router-link v-bind:to="'/change-password/'+ user.id"  class="nav-link">
                                <i class="nav-link-icon fa fa-key"></i>
                                Change Password
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="app-header-right">
                    <div class="">
                        <div class="widget-heading" v-if="user">
                           {{ user.name }}
                        </div>
                    </div>
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                    <div class="btn-group">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn" v-if="user.image_path">
                                            <img width="42" class="rounded-circle" :src="asset(`storage/uploads/${user.image_path}`)" alt="">
                                        </a>
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn" v-else>
                                            <img width="42" class="rounded-circle" :src="asset('images/avt.png')" alt="">
                                        </a>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" class="dropdown-item">Profile</button>
                                            <a href="javascript:void(0)" @click="onLogout()" type="button" tabindex="0" class="dropdown-item">Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import axios from 'axios'

    export default{
        name: 'Header',
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
