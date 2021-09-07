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
                                <div> Change User Password
                                    <div class="page-title-subheading">
                                        Welcome to C80 electronic document management system
                                        {{ user.id }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Error v-if="error" :error="error" />
                        <Success v-if="success" :success="success" />
                        <div class="form-group">
                            <label for="old_password"> <strong>Old Password</strong></label>
                            <input type="text" id="old_password" v-model="old_password" class="form-control form-control-md">
                        </div>
                        <div class="form-group">
                            <label for="password"> <strong>New Password</strong></label>
                            <input type="password" id="password" v-model="password" class="form-control form-control-md">
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation"> <strong>New Password Confirmation</strong></label>
                            <input type="password" id="password_confirmation" v-model="password_confirmation" class="form-control form-control-md">
                        </div>
                        <button type="submit" @click="onSubmit(user.id)" class="btn btn-dark btn-lg">Submit</button>
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
        name: 'ChangePassword',
        data() {
            return {
                old_password: '',
                password: '',
                password_confirmation: '',
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
        methods: {
            async onSubmit(id) {
                try {
                    const response = await axios.post('change-password/' + id, {
                        old_password: this.old_password,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                        _method: "patch"
                    });
                    console.log(response)
                    this.success = response.data.message;
                } catch (e) {
                    this.error = e.response.data.message;
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
