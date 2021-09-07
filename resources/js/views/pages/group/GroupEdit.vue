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
                        <div> Edit Group
                            <div class="page-title-subheading">
                                Welcome to C80 electronic document management system
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Error v-if="error" :error="error" />
                <Success v-if="success" :success="success" />
				<div class="form-group">
                    <label for="name"> <strong>Group Name</strong></label>
					<input type="text" id="name" v-model="group.name" value="group.name" class="form-control form-control-md">
				</div>
                <div class="form-group">
                    <label for="description"> <strong>Group Description</strong> </label>
                    <textarea id="description" v-model="group.description" class="form-control form-control-md" aria-label="With textarea"></textarea>
                </div>
				<button type="submit" @click="onSubmit(group.id)" class="btn btn-dark btn-lg">Submit</button>
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
    name: 'GroupEdit',
    data() {
        return {
            group: {},
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
                    const response = await axios.post('groups/' + id, {
                        name: this.group.name,
                        description: this.group.description,
                        _method: "patch"
                    });
                    this.success = response.data.message;
                } catch (error) {
                    this.error = error.response.data;
                }
        },
        async getGroupDetail(id) {
            try {
                    const response = await axios.get('groups/' + id);
                    this.group = response.data.data;
                } catch (error) {
                    this.error = error.response.data;
            }
        }
    },
    created() {
        this.getGroupDetail(this.$route.params.id);
    },
    updated() {
        this.getGroupDetail(this.$route.params.id);
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>


<style scoped>

</style>
