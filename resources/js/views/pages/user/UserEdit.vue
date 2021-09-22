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
                  <i class="pe-7s-user icon-gradient bg-mean-fruit"> </i>
                </div>
                <div>
                  Profile Edit
                  <div class="page-title-subheading">
                    Welcome to C80 electronic document management system
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="main-card mb-3 card">
                <div class="container">
                  <div class="row profile">
                    <div class="col-md-12 order-content">
                      <div class="form_main col-md-12 col-sm-5 col-xs-7">
                        <h4 class="heading">
                          <strong>Edit </strong> Profile <span></span>
                        </h4>
                        <Error v-if="error" :error="error" />
                        <Success v-if="success" :success="success" />
                        <div class="form">
                            <div class="form-group">
                              <label for="name"> <strong>Name</strong></label>
                              <input
                                type="text"
                                v-model="user.name"
                                class="form-control form-control-md"
                              />
                            </div>
                            <div class="form-group">
                              <label for="name"> <strong>Email</strong></label>
                              <input
                                type="text"
                                v-model="user.email"
                                class="form-control form-control-md"
                              />
                            </div>
                            <div class="form-group">
                              <label for="name"> <strong>Phone</strong></label>
                              <input
                                type="text"
                                v-model="user.phone"
                                class="form-control form-control-md"
                              />
                            </div>
                            <div class="form-group">
                              <label for="name">
                                <strong>Twitter</strong></label
                              >
                              <input
                                type="text"
                                v-model="user.twitter"
                                class="form-control form-control-md"
                              />
                            </div>
                            <div class="form-group">
                              <label for="name">
                                <strong>Facebook</strong></label
                              >
                              <input
                                type="text"
                                v-model="user.facebook"
                                class="form-control form-control-md"
                              />
                            </div>
                            <div class="form-group">
                              <label for="name">
                                <strong>Linkedin</strong></label
                              >
                              <input
                                type="text"
                                v-model="user.linkedin"
                                class="form-control form-control-md"
                              />
                            </div>
                            <button
                              type="submit"
                              @click="onSubmit(user.id)"
                              class="btn btn-dark btn-lg"
                            >
                              Update
                            </button>
                            <BackButton />
                        </div>
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
import axios from "axios";

export default {
  name: "UserEdit",
  data() {
    return {
      user: {},
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
    BackButton: () => import("../../../components/BackButton.vue"),
  },
  methods: {
    async onSubmit(id) {
      try {
        const response = await axios.post("update-profile/" + id, {
          name: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          facebook: this.user.facebook,
          twitter: this.user.twitter,
          linkedin: this.user.linkedin,
          _method: "patch",
        });
        console.log(response);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    async getUser(id) {
      try {
        const response = await axios.get("users/" + id);
        this.user = response.data.data;
      } catch (error) {
        this.error = error.response.data;
      }
    },
  },
  created() {
    this.getUser(this.$route.params.id);
  }
};
</script>


<style scoped>
   @import "../../../assets/css/profile-edit.css";
</style>
