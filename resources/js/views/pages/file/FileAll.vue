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
                  <i class="pe-7s-home icon-gradient bg-mean-fruit"></i>
                </div>
                <div>
                  All Files
                  <div
                    class="page-title-subheading"
                  >Welcome to C80 electronic document management system</div>
                </div>
              </div>
            </div>
          </div>
          <Error v-if="error" :error="error" />
          <Success v-if="success" :success="success" />

              <div class="col-md-12">
                <div class="row">
                 <div class="col-md-4">
                  <div class="form-group">
                    <router-link to="/file-create" type="button" class="btn btn-dark">Create File</router-link>
                </div>
              </div>
                  <div class="col-md-4 offset-md-4">
                  <div class="form-group">
                  <select v-model="selected" @change="onChange($event)" class="form-control form-control-md">
                    <option
                      v-for="(tag, index) in tags"
                      v-bind:value="tag.id"
                      :key="index"
                      class="text-dark"
                    >
                      {{ tag.name }}
                    </option>
                  </select>
                </div>
              </div>
                </div>
              </div>
          <div class="col-12">
               <Files :files="files" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "GroupAll",
  data() {
    return {
      files: {},
      tags: [],
      error: "",
      success: ""
    };
  },
  components: {
    SideBar: () => import("../../../components/SideBar.vue"),
    Header: () => import("../../../components/Header.vue"),
    Footer: () => import("../../../components/Footer.vue"),
    Error: () => import("../../../components/Error.vue"),
    Success: () => import("../../../components/Success.vue"),
    Files: () => import("../../../components/Files.vue")
  },
  created() {
    this.getFiles();
    this.getTags();
  },
  methods: {
    mounted() {
      this.fetch();
    },
    changed_value(options){
      this.fetch(options.page)
    },
	  async fetch(page = 1) {
        const response = await axios.get('files?page=' + page)
        this.files = response.data.data;
	  },
    async getFiles() {
      const response = await axios.get("files");
      this.files = response.data.data;
    },
    async getTags() {
      const response = await axios.get("tags");
      this.tags = response.data.data;
    },
    onChange(event) {
      let val = event.target.value;
      this.files = this.files.filter((item) => {
        return item.tag_id == val
      });
    }
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>


<style scoped>

</style>
