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
                        <div> All Groups
                            <div class="page-title-subheading">
                                Welcome to C80 electronic document management system
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Error v-if="error" :error="error" />
            <Success v-if="success" :success="success" />
            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead class="bg-dark text-light">
                                    <tr>
                                        <th class="text-center">No..</th>
                                        <th>Name</th>
                                        <th class="text-center">Description</th>
                                        <th class="text-center">Date</th>
                                        <th class="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(group, index) in groups" :index="index" :key="group.id">
                                        <td class="text-center text-muted">{{ index + 1 }}</td>
                                        <td>
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left flex2">
                                                        <div class="widget-heading"> {{ group.name }} </div>
                                                        <div class="widget-subheading opacity-7">{{ group.user.name }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center"> {{ group.description }} </td>
                                        <td class="text-center">
                                             {{ formatDate (group.created_at)  }}
                                        </td>
                                        <td class="text-center">
                                            <router-link v-bind:to="'/group-edit/'+ group.id" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Edit</router-link>
                                            <router-link v-bind:to="'/group-show/'+ group.id" id="PopoverCustomT-1" class="btn btn-success btn-sm">View</router-link>
                                            <button @click="delteGroups(group.id)" id="PopoverCustomT-1" class="btn btn-danger btn-sm">Delete</button>
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
    name: 'GroupAll',
    data() {
        return {
            groups: [],
            error: '',
            success: ''
        }
    },
    components : {
        SideBar: () => import('../../../components/SideBar.vue'),
        Header: () => import('../../../components/Header.vue'),
        Footer: () => import('../../../components/Footer.vue'),
        Error: () => import('../../../components/Error.vue'),
        Success: () => import('../../../components/Success.vue')
    },
    created() {
        this.getGroups();
    },
    updated() {
        this.getGroups();
    },
    methods: {
        async getGroups() {
            const response = await axios.get('groups');
            this.groups = response.data.data;
        },
        formatDate (dateString){
            const options = { year: "numeric", month: "long", day: "numeric" }
            return new Date(dateString).toLocaleDateString(undefined, options)
        },
        async delteGroups(id) {
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
