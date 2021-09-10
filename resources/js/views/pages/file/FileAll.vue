<template>
  <div
    class="
      app-container app-theme-white
      body-tabs-shadow
      fixed-sidebar fixed-header
    "
  >
    <Header />

    <div class="app-main">
      <SideBar />
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div class="page-title-icon">
                  <i class="pe-7s-home icon-gradient bg-mean-fruit"> </i>
                </div>
                <div>
                  All Files
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
                <div class="col-sm-4 col-md-4 p-3">
                  <div
                    class="card mb-3"
                    style="max-width: 540px"
                    id="showFolder"
                  >
                    <div class="row g-0">
                      <div class="col-md-2" style="font-size: 0.9rem">
                        <!-- <i class="fas fa-file-pdf text-danger fa-10x"></i> -->
                        <i class="fas fa-file-word text-primary fa-10x"></i>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body ml-5">
                          <h5 class="card-title">
                            <strong>sdhflsdhfdsf</strong>
                          </h5>
                          <p class="card-text mt-3">dslsdfdsfdsfdsfdsfdfds</p>
                          <br />
                          <p class="card-text">
                            <small class="text-muted">1</small>
                          </p>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <br />
                        <i class="fas fa-download text-danger fa-1x mt-3"></i>
                        <!-- <a href="/edit/<?php echo $file['id']; ?>/#fileEditModal" class="fas fa-edit text-danger fa-1x mt-2 mr-5"  data-userid="<?php echo $file['user_id']; ?>" data-bs-toggle="modal"></a> -->
                        <i class="fas fa-trash text-danger fa-1x mt-2"></i>
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
      success: "",
    };
  },
  components: {
    SideBar: () => import("../../../components/SideBar.vue"),
    Header: () => import("../../../components/Header.vue"),
    Footer: () => import("../../../components/Footer.vue"),
    Error: () => import("../../../components/Error.vue"),
    Success: () => import("../../../components/Success.vue"),
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
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>
#showFolder {
  border-radius: 10px;
}
</style>
