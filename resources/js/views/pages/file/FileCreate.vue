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
                        <div> Create File
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
                    <label for="name"> <strong>File Name</strong></label>
					<input type="text" id="name" v-model="name" class="form-control form-control-md">
				</div>
                <div class="form-group">
                    <label for="description"> <strong>File Description</strong> </label>
                    <textarea id="description" v-model="description" class="form-control form-control-md" aria-label="With textarea"></textarea>
                </div>

                <div class="form-group">
                    <label for="description"> <strong>File To Upload </strong> </label>
                    <div class="flex w-full h-screen items-center justify-center text-center" id="app">
                        <div class="p-12 bg-gray-100 border border-gray-300" @dragover="dragover" @dragleave="dragleave" @drop="drop">
                            <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
                            class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />

                            <label for="assetsFieldHandle" class="block cursor-pointer">
                                <div>
                                    Explain to our users they can drop files in here
                                    or <span class="underline">click here</span> to upload their files
                                </div>
                            </label>
                            <ul class="mt-4" v-if="this.filelist.length" v-cloak>
                                <li class="text-sm p-1" v-for="(file, index) in filelist" :index="index" :key="file.index">
                                    {{ file.name }}<button class="ml-2 btn btn-danger" type="button" @click="remove(filelist.indexOf(file))" title="Remove file">X</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

				<button type="submit" @click="onSubmit()" class="btn btn-dark btn-lg">Submit</button>
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
    name: 'FileCreate',
    data() {
        return {
            name: '',
            description: '',
            error: '',
            success: '',
            filelist: []
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
        async onSubmit() {
            try {
                const response = await axios.post('files', {
                    name: this.name,
                    description: this.description
                });
                this.success = response.data.message;
                this.setDataToNull();
            } catch (e) {
                this.error = e.response.data.message;
            }
        },
        setDataToNull() {
            this.name = '';
            this.description = ''
        },
        onChange() {
            this.filelist = [...this.$refs.file.files];
        },
        remove(i) {
            this.filelist.splice(i, 1);
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop its files
            if (!event.currentTarget.classList.contains('bg-green-300')) {
                event.currentTarget.classList.remove('bg-gray-100');
                event.currentTarget.classList.add('bg-green-300');
            }
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        }
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>


<style scoped>
    [v-cloak] {
        display: none;
    }
    li {
        list-style: none;
    }
</style>
