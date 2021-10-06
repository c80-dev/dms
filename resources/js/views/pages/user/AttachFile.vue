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
                  Users Files
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
                <label for="name"> <strong>Add File</strong></label>
                    <select v-model="selected_file" class="form-control form-control-md">
                    <option
                    v-for="(file, index) in files"
                    v-bind:value="file.id"
                    :key="index"
                    class="text-dark"
                    >
                    {{ file.name }}
                    </option>
                </select>
            </div>
            <button
              type="submit"
              @click="onSubmitFile(user.id)"
              class="btn btn-dark btn-lg"
            >
              Submit
            </button>
            <BackButton />
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
  name: "AttachFile",
  data() {
    return {
      error: "",
      success: "",
      files: [],
      selected_file: ""
      
    };
  },
  components: {
    SideBar: () => import("../../../components/SideBar.vue"),
    Header: () => import("../../../components/Header.vue"),
    Footer: () => import("../../../components/Footer.vue"),
    Error: () => import("../../../components/Error.vue"),
    Success: () => import("../../../components/Success.vue"),
    BackButton: () => import("../../../components/BackButton.vue"),
  },
  methods: {
    async getFiles() {
        const response = await axios.get("files/");
        this.files = response.data.data;
    },
    //add file to group
    async onSubmitFile() {
        
        try {
            const response = await axios.post("add-user-to-file", {
                file_id: this.selected_file,
                user_id: this.$route.params.id,
            });
            alert(response.data.message);
        } catch (e) {
            alert("Sorry select a file");
        }
    },
  },
  created() {
      this.getFiles()
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>
</style>
