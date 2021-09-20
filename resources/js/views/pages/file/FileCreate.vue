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
                  Create File
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
              <label for="name"> <strong>Select File Tag</strong></label>
              <select v-model="selected" class="form-control form-control-md">
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
            <div class="form-group">
              <label for="name"> <strong>File Name</strong></label>
              <input
                type="text"
                id="name"
                v-model="name"
                class="form-control form-control-md"
              />
            </div>
            <div class="form-group">
              <label for="description">
                <strong>File Description</strong>
              </label>
              <textarea
                id="description"
                v-model="description"
                class="form-control form-control-md"
                aria-label="With textarea"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="description"> <strong>File to Upload</strong> </label>
              <input
                type="file"
                class="form-control form-control-md"
                id="file"
                name="file"
                @change="selectFile"
              />
            </div>

            <button
              type="submit"
              @click="onSubmit()"
              class="btn btn-dark btn-lg"
            >
              Submit
            </button>
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
  name: "FileCreate",
  data() {
    return {
      name: "",
      description: "",
      selected: "",
      error: "",
      success: "",
      tags: [],
      file: null,
    };
  },
  components: {
    SideBar: () => import("../../../components/SideBar.vue"),
    Header: () => import("../../../components/Header.vue"),
    Footer: () => import("../../../components/Footer.vue"),
    Error: () => import("../../../components/Error.vue"),
    Success: () => import("../../../components/Success.vue"),
  },
  methods: {
    selectFile(event) {
      this.file = event.target.files[0];
    },
    async onSubmit() {
      const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
      }
      let data = new FormData();
      data.append('file_path', this.file);
      data.append('name', this.name);
      data.append('description', this.description);
      data.append('tag_id', this.selected);
      try {
        const response = await axios.post("files", data, config );
        this.success = response.data.message;
        this.setDataToNull();
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    setDataToNull() {
      this.name = "";
      (this.description = ""), (this.selectFile = ""), (this.selected = "");
    },
    async allTags() {
      try {
        const response = await axios.get("tags");
        this.tags = response.data.data;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.allTags();
  },
};
</script>


<style scoped>
</style>
