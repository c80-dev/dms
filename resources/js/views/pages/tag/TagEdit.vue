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
                  Edit File Tag
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
              <label for="name"> <strong>Tag Name</strong></label>
              <input
                type="text"
                id="name"
                v-model="tag.name"
                class="form-control form-control-md"
              />
            </div>
            <div class="form-group">
              <label for="description">
                <strong>Tag Description</strong>
              </label>
              <textarea
                id="description"
                v-model="tag.description"
                class="form-control form-control-md"
                aria-label="With textarea"
              ></textarea>
            </div>
            <button
              type="submit"
              @click="onSubmit(tag.id)"
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
  name: "TagEdit",
  data() {
    return {
      error: "",
      success: "",
      tag: {},
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
    async onSubmit(id) {
      try {
        const response = await axios.post("tags/" + id, {
          name: this.tag.name,
          description: this.tag.description,
          _method: "patch",
        });
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },

    async findTag(id) {
      try {
        const response = await axios.get("tags/" + id);
        this.tag = response.data.data;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
  created() {
    this.findTag(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
</style>
