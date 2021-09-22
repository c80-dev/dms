<template>
    <div class="app-header header-shadow">
            <div class="app-header__logo">
                <router-link  to="/dashboard" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="197.792" height="30" viewBox="0 0 297.792 92">
                        <g id="Group_482" data-name="Group 482" transform="translate(-1326.208 -68)">
                            <g id="Group_479" data-name="Group 479" transform="translate(1324.208 74.474)">
                            <path id="Path_518" data-name="Path 518" d="M25.758,40.517A14.758,14.758,0,1,1,40.517,25.758,14.758,14.758,0,0,1,25.758,40.517Z" transform="translate(13.137 13.137)"/>
                            <path id="Path_519" data-name="Path 519" d="M8.954,19.688c-4.277.754-7.208,4.885-5.567,8.906a36.9,36.9,0,0,0,68.782-1.2c1.5-4.076-1.574-8.1-5.874-8.706S58.134,21.213,56.01,25a21.169,21.169,0,0,1-36.555.638C17.2,21.928,13.231,18.934,8.954,19.688Z" transform="translate(1.35 24.249)" fill="#404040"/>
                            <path id="Path_520" data-name="Path 520" d="M75.506,43.507A36.9,36.9,0,1,0,2,38.9a37.163,37.163,0,0,0,.467,5.888,11.514,11.514,0,0,1,7.2-4.48A11.946,11.946,0,0,1,17.94,41.91,21.17,21.17,0,1,1,60.065,38.9a21.443,21.443,0,0,1-.122,2.282,11.945,11.945,0,0,1,8.216-1.895A11.514,11.514,0,0,1,75.506,43.507Z" transform="translate(0 0)" fill="#f7b029"/>
                            </g>
                            <text id="Kasha" transform="translate(1407 134)" font-size="69" font-family="BlaakBlackPERSONALUSE, Blaak Black PERSONAL USE"><tspan x="0" y="0">Kasha</tspan></text>
                        </g>
                    </svg>
                </router-link>
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
                            <router-link v-bind:to="'/profile-edit/'+ user.id"  href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-cog"></i>
                                Settings
                            </router-link>
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
