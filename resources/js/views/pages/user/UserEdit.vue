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
            <div class="col-md-5 offset-md-3">
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
/***
User Profile Sidebar by @keenthemes
A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: https://j.mp/metronictheme
Licensed under MIT
***/

body {
  background: #f1f3fa;
}

/* Profile container */
.profile {
  margin: 20px 0;
}

/* Profile sidebar */
.profile-sidebar {
  padding: 20px 0 10px 0;
  background: #fff;
}

.profile-userpic img {
  float: none;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.profile-usertitle-job {
  text-transform: uppercase;
  color: #5b9bd1;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.profile-userbuttons {
  text-align: center;
  margin-top: 10px;
}

.profile-userbuttons .btn {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 6px 15px;
  margin-right: 5px;
}

.profile-userbuttons .btn:last-child {
  margin-right: 0px;
}

.profile-usermenu {
  margin-top: 30px;
}

.profile-usermenu ul li {
  border-bottom: 1px solid #f0f4f7;
}

.profile-usermenu ul li:last-child {
  border-bottom: none;
}

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 14px;
  font-weight: 400;
}

.profile-usermenu ul li a i {
  margin-right: 8px;
  font-size: 14px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
}

.profile-usermenu ul li.active {
  border-bottom: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
  margin-left: -2px;
}

/* Profile Content */
.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}
a,
button,
code,
div,
img,
input,
label,
li,
p,
pre,
select,
span,
svg,
table,
td,
textarea,
th,
ul {
  -webkit-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  border-radius: 0 !important;
}
.portlet {
  margin-top: 0;
  margin-bottom: 25px;
  padding: 0;
  border-radius: 4px;
}
.portlet.bordered {
  border-left: 2px solid #e6e9ec !important;
}
.portlet.light {
  padding: 12px 20px 15px;
  background-color: #fff;
}
.portlet.light.bordered {
  border: 1px solid #e7ecf1 !important;
}
.list-separated {
  margin-top: 10px;
  margin-bottom: 15px;
}
.profile-stat {
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f4f7;
}
.profile-stat-title {
  color: #7f90a4;
  font-size: 25px;
  text-align: center;
}
.uppercase {
  text-transform: uppercase !important;
}

.profile-stat-text {
  color: #5b9bd1;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
}
.profile-desc-title {
  color: #7f90a4;
  font-size: 17px;
  font-weight: 600;
}
.profile-desc-text {
  color: #7e8c9e;
  font-size: 14px;
}
.margin-top-20 {
  margin-top: 20px !important;
}
[class*=" fa-"]:not(.fa-stack),
[class*=" glyphicon-"],
[class*=" icon-"],
[class^="fa-"]:not(.fa-stack),
[class^="glyphicon-"],
[class^="icon-"] {
  display: inline-block;
  line-height: 14px;
  -webkit-font-smoothing: antialiased;
}
.profile-desc-link i {
  width: 22px;
  font-size: 19px;
  color: #abb6c4;
  margin-right: 5px;
}
</style>
