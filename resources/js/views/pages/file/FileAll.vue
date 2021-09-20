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
              <div class="col-sm-4 col-md-4 p-3" v-for="(file, index) in files" :index="index" :key="file.id">
                <div class="card mb-3" style="max-width: 540px" id="showFolder">
                  <div class="row g-0">
                    <div class="col-md-2" style="font-size: 1.1rem">
                      <i class="fas fa-file-pdf text-danger fa-10x" v-if="getFileExtention(file.file_path) == 'pdf'"></i>
                      <i class="fas fa-file-word text-primary fa-10x" v-else></i>
                    </div>
                    <div class="col-md-10 pl-5">
                      <div class="card-body ml-5">
                        <h5 class="card-title">
                          <strong>{{ file.name }} </strong>
                        </h5>
                        <p class="card-text mt-3">
                          {{ shortText(file.description) }}
                        </p>
                        <br />
                        <p class="card-text">
                          <small class="text-muted">
                            {{  formatDate(file.created_at) }}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "GroupAll",
  data() {
    return {
      files: [],
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
    async getTags() {
      const response = await axios.get("files");
      this.files = response.data.data;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async delteTags(id) {
      try {
        const response = await axios.delete("tags/" + id);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    shortText(stringValue) {
      if (stringValue.length > 10) {
          return  stringValue = stringValue.substring(0, 30) + "...";
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
</style>
