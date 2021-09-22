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
                  Profile
                  <div class="page-title-subheading">
                    Welcome to C80 electronic document management system
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 offset-md-3">
              <div class="main-card mb-3 card">
                <div class="container">
                  <div class="row profile">
                    <div class="col-md-12">
                      <div class="profile-sidebar">
                        <!-- SIDEBAR USER TITLE -->
                        <div class="profile-usertitle">
                            <div class="profile-userpic" v-if="userData.image_path">
                                <img width="40" class="rounded-circle" :src="asset(`storage/uploads/${userData.image_path}`)" alt="">
                            </div>
                             <div class="profile-userpic" v-else>
                                <img width="40" class="rounded-circle" :src="asset('images/avt.png')" alt="">
                            </div>
                          <div class="profile-usertitle-name"> {{ userData.name }} </div>
                        </div>
                        <!-- END SIDEBAR USER TITLE -->
                        <!-- SIDEBAR BUTTONS -->
                        <div class="profile-userbuttons">
                            <input
                                type="file"
                                class="form-control form-control-md"
                                id="file"
                                name="file"
                                @change="selectFile"
                            /> <br>
                          <button type="button" @click="onSubmit(userData.id)" class="btn btn-success btn-sm">
                           Change Picture
                          </button>
                        </div>
                        <!-- END SIDEBAR BUTTONS -->
                        <!-- SIDEBAR MENU -->
                        <div class="profile-usermenu mb-10">
                          <ul class="nav">
                            <li class="active">
                              <a href="#">
                                <i class="glyphicon glyphicon-home"></i>
                                Overview
                              </a>
                            </li>
                            <li>
                              <router-link
                                v-bind:to="'/profile-edit/' + userData.id"
                              >
                              <i class="glyphicon glyphicon-user"></i>
                                Account Settings
                              </router-link>
                            </li>
                          </ul>
                        </div>
                        <!-- END MENU -->

                        <div class="portlet light bordered">
                          <div>
                            <h4 class="profile-desc-title">
                              About {{ userData.name }}
                            </h4>
                            <span class="profile-desc-text">
                              Lorem ipsum dolor sit amet diam nonummy nibh
                              dolore.
                            </span>
                            <br>
                              <small> <strong>Joined : </strong> {{ formatDate(userData.created_at) }}</small>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-twitter"></i>
                              <span
                                >{{userData.twitter}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-facebook"></i>
                              <span
                                >{{userData.facebook}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-linkedin"></i>
                              <span
                                >{{userData.linkedin}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-envelope"></i>
                              <span
                                >{{userData.email}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-phone"></i>
                              <span
                                >{{userData.phone}}</span
                              >
                            </div>
                          </div>
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
  name: "Profile",
  data() {
    return {
      userData: {},
      file: null,
    };
  },
  components: {
    SideBar: () => import("../../components/SideBar.vue"),
    Header: () => import("../../components/Header.vue"),
    Footer: () => import("../../components/Footer.vue"),
  },
  created() {
        this.getProfile(this.$route.params.id);
  },
  methods: {
    selectFile(event) {
      this.file = event.target.files[0];
    },
    async onSubmit(id) {
        try {
            var formData = new FormData;
            formData.append("image_path", this.file, this.name);
            const response = await axios.post("change-picture/" + id, formData, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
            alert(response.data.message);
        } catch (e) {
            alert(e.response.data.message);
        }
    },
    async getProfile(id) {
        const response = await axios.get("users/" + id);
        this.userData = response.data.data;
    },
    formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    },
  }
};
</script>


<style scoped>
   @import "../../assets/css/profile-edit.css";
</style>
