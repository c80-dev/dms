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
          <div class="col-12">
            <div class="row">

              <div class="col-md-4 col-sm-6 col-lg-4" v-for="(file, index) in files" :index="index" :key="file.id">
                <div class="card mb-3" id="showFolder">
                  <div class="row g-0">
                    <div class="col-2" style="font-size: 1.6rem">
                      <i class="fas fa-file-pdf text-danger fa-5x" v-if="getFileExtention(file.file_path) == 'pdf'"></i>
                      <i class="fas fa-file-word text-primary fa-5x" v-else></i>
                    </div>
                    <div class="col-8">
                      <div class="card-body">
                        <h6 class="card-title" :title="file.name">
                          {{ file.name }}
                        </h6>
                         <p class="card-text" :title="file.description">
                            <small class="text-muted">
                              {{  file.description }}
                            </small>
                        </p>
                        <p class="card-text">
                            <small class="text-muted" :title="file.user.name">
                              <strong>Created : </strong>  {{  formatDate(file.created_at) }}
                            </small>
                        </p>
                      </div>
                    </div>
                    <div class="col-2"> <br><br>
                        <a v-bind:href="asset(`storage/uploads/${file.file_path}`)" download>
                            <i class="fas fa-download text-danger fa-1x"></i>
                        </a> <br>
                        <i class="fas fa-edit text-danger fa-1x"></i> <br>
                        <a @click="deleteFile(file.id)">
                            <i class="fas fa-trash text-danger fa-1x"></i>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <vue-cli-laravel-pagination :data="files" align="center" :onChange="changed_value" buttonLimit="10" v-if="files.length > 10"></vue-cli-laravel-pagination>
            </div>
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
      error: "",
      success: ""
    };
  },
  components: {
    SideBar: () => import("../../../components/SideBar.vue"),
    Header: () => import("../../../components/Header.vue"),
    Footer: () => import("../../../components/Footer.vue"),
    Error: () => import("../../../components/Error.vue"),
    Success: () => import("../../../components/Success.vue")
  },
  created() {
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
    async getTags() {
      const response = await axios.get("files");
      this.files = response.data.data;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async deleteFile(id) {
        try {
          const response = await axios.delete("files/" + id);
          this.success = response.data.message;
        } catch (e) {
          this.error = e.response.data.message;
        }
    },
    async delteTags(id) {
      try {
        const response = await axios.delete("tags/" + id);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    getFileExtention(filePath) {
       var ext =  filePath.split('.').pop();
       return ext; 
    }
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>


<style scoped>
#showFolder {
  border-radius: 10px;
}
.card-title, .card-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 3rem;
}

</style>
