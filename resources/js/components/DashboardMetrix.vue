<template>
    <div class="row">
        <div class="col-md-3 col-xl-3">
            <div class="card mb-3 widget-content bg-midnight-bloom">
                <div class="widget-content-wrapper text-white">
                    <div class="widget-content-left">
                        <div class="widget-heading">Total Users</div>
                        <div class="widget-subheading">Total users</div>
                    </div>
                    <div class="widget-content-right">
                        <div class="widget-numbers text-white"><span>{{ users }}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-xl-3">
            <div class="card mb-3 widget-content bg-arielle-smile">
                <div class="widget-content-wrapper text-white">
                    <div class="widget-content-left">
                        <div class="widget-heading">Total Files</div>
                        <div class="widget-subheading">Total files </div>
                    </div>
                    <div class="widget-content-right">
                        <div class="widget-numbers text-white"><span>{{ files }} </span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-xl-3">
            <div class="card mb-3 widget-content bg-info">
                <div class="widget-content-wrapper text-white">
                    <div class="widget-content-left">
                        <div class="widget-heading">Total Tags</div>
                        <div class="widget-subheading">Total files </div>
                    </div>
                    <div class="widget-content-right">
                        <div class="widget-numbers text-white"><span>{{ tags }} </span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-xl-3">
            <div class="card mb-3 widget-content bg-grow-early">
                <div class="widget-content-wrapper text-white">
                    <div class="widget-content-left">
                        <div class="widget-heading">Total Groups</div>
                        <div class="widget-subheading">Total grops</div>
                    </div>
                    <div class="widget-content-right">
                        <div class="widget-numbers text-white"><span>{{ groups }}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'DashboardMetrix',
        data() {
            return {
                users: '',
                files: '',
                groups: '',
                tags: ''
            }
        },
        methods: {
            async getMetrix() {
                const response = await axios.get('dashboard-metrix');
                this.users = response.data.users;
                this.files = response.data.files;
                this.groups = response.data.groups;
                this.tags = response.data.tags;
            }
        },
        mounted() {
            this.getMetrix();
        }
    }
</script>
