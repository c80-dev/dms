<template>
    <div class="vue-tempalte">
        <Nav />
        <div class="App">
            <div class="vertical-center mt-5">
                <div class="inner-block">
                    <div>
                        <h3>Forgot Password</h3>
                          <Error v-if="error" :error="error" />
                          <Success v-if="success" :success="success" />
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" v-model="email" class="form-control form-control-lg" />
                        </div>
                        <button type="submit" @click="onSubmit()" class="btn btn-dark btn-lg btn-block">Reset password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'ForgotPassword',
        components : {
            Nav: () => import('../../../components/Nav.vue'),
            Error: () => import('../../../components/Error.vue'),
            Success: () => import('../../../components/Success.vue')
        },
        data() {
            return {
                email: '',
                error: '',
                success: ''
            }
        },
        methods: {
            async onSubmit() {
                try {
                    await axios.post('forgot-password', {
                        email: this.email
                    });
                    this.success = response.data.message;
                } catch (e) {
                    this.error = e.response.data.message;
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/app.css";
</style>