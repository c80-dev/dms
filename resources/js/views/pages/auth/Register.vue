<template>
    <div class="vue-tempalte">
        <Nav />
        <div class="App">
            <div class="vertical-center mt-20">
                <div class="inner-block">
                    <div>
                        <h3>Sign Up</h3>
                        <Error v-if="error" :error="error" />
                        <Success v-if="success" :success="success" />
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" v-model="name" class="form-control form-control-lg"/>
                        </div>

                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" v-model="email" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group">
                            <label>Phone number</label>
                            <input type="email" v-model="phone" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" v-model="password" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password" v-model="password_confirmation" class="form-control form-control-lg" />
                        </div>

                        <button type="submit" @click="onSubmit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                        <p class="forgot-password text-right">
                            Already registered
                            <router-link to="/">sign in?</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        components : {
            Nav: () => import('../../../components/Nav.vue'),
            Error: () => import('../../../components/Error.vue'),
            Success: () => import('../../../components/Success.vue')
        },
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
                error: '',
                success: ''
            }
        },
        methods: {
            async onSubmit() {
               try {
                    const response = await axios.post('create-account', {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    });
                    this.success = response.data.message;
                    console.log(this.success);
                } catch (e) {
                    this.error = e.response.data.message;
                    console.log(this.error)
                }
            }
        },
    }
</script>

<style scoped>
    @import "../../../assets/css/app.css";
</style>
