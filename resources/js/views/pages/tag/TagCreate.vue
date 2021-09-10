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
                  Create File Tag
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
                v-model="name"
                class="form-control form-control-md"
              />
            </div>
            <div class="form-group">
              <label for="description">
                <strong>Tag Description</strong>
              </label>
              <textarea
                id="description"
                v-model="description"
                class="form-control form-control-md"
                aria-label="With textarea"
              ></textarea>
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
  name: "TagCreate",
  data() {
    return {
      name: "",
      description: "",
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
  methods: {
    async onSubmit() {
      try {
        const response = await axios.post("tags", {
          name: this.name,
          description: this.description,
        });
        this.success = response.data.message;
        this.setDataToNull();
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    setDataToNull() {
      this.name = "";
      this.description = "";
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>
</style>
