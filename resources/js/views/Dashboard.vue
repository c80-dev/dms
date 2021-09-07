<template>
<div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

    <Header />

    <div class="app-main">
          <SideBar />
        <div class="app-main__outer">
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="pe-7s-home icon-gradient bg-mean-fruit">
                            </i>
                        </div>
                        <div> Dashboard
                            <div class="page-title-subheading">
                                Welcome to C80 electronic document management system
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-midnight-bloom">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Users</div>
                                <div class="widget-subheading">Total users of the system</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span>{{ users.length }}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-arielle-smile">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Files</div>
                                <div class="widget-subheading">Total files stored in the system</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span> 0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-grow-early">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Groups</div>
                                <div class="widget-subheading">Total Groups created</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-white"><span>0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div class="card mb-3 widget-content bg-premium-dark">
                        <div class="widget-content-wrapper text-white">
                            <div class="widget-content-left">
                                <div class="widget-heading">Total Files</div>
                                <div class="widget-subheading">Total files uploaded</div>
                            </div>
                            <div class="widget-content-right">
                                <div class="widget-numbers text-warning"><span>4</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th class="text-center">No..</th>
                                    <th>Name</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Phone</th>
                                     <th class="text-center">Date</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(userData, index) in users" :index="index" :key="userData.id">
                                        <td class="text-center text-muted">{{ index + 1 }}</td>
                                        <td>
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left mr-3">
                                                        <div class="widget-content-left">
                                                            <img width="40" class="rounded-circle" :src="asset('images/avt.png')" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="widget-content-left flex2">
                                                        <div class="widget-heading"> {{ userData.name }} </div>
                                                        <div class="widget-subheading opacity-7">{{userData.roles[0].name }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center"> {{ userData.email }} </td>
                                        <td class="text-center">
                                            {{ userData.phone }}
                                        </td>
                                        <td class="text-center">
                                            {{ userData.created_at }}
                                        </td>
                                        <td class="text-center">
                                            <router-link to="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Proifle</router-link>
                                            <button @click="delteUser(userData.id)" id="PopoverCustomT-1" class="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </div>
    </div>

</div>
</template>

<script>

import {mapGetters} from 'vuex'
import axios from 'axios'

export default {
    name: 'Dashboard',
    data() {
        return {
            users: []
        }
    },
    components : {
        SideBar: () => import('../components/SideBar.vue'),
        Header: () => import('../components/Header.vue'),
        Footer: () => import('../components/Footer.vue')
    },
    created() {
        this.getEmployees();
    },
    methods: {
        async getEmployees() {
            const response = await axios.get('users');
            this.users = response.data.data;
        },
        async delteUser(id) {
            alert(id)
            try {
                const response = await axios.delete('groups/' + id);
                this.success = response.data.message;
            } catch (e) {
                this.error = e.response.data.message
            }
        }
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>


<style scoped>

</style>
