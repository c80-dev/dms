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
                            <div class="profile-userpic" v-if="user.image_path">
                                <img width="40" class="rounded-circle" :src="asset(`storage/uploads/${user.image_path}`)" alt="">
                            </div>
                             <div class="profile-userpic" v-else>
                                <img width="40" class="rounded-circle" :src="asset('images/avt.png')" alt="">
                            </div>
                          <div class="profile-usertitle-name"> {{ user.name }} </div>
                          <div class="profile-usertitle-job"> {{ user.roles[0].name }}</div>
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
                          <button type="button" @click="onSubmit(user.id)" class="btn btn-success btn-sm">
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
                                v-bind:to="'/profile-edit/' + user.id"
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
                              About {{ user.name }}
                            </h4>
                            <span class="profile-desc-text">
                              Lorem ipsum dolor sit amet diam nonummy nibh
                              dolore.
                            </span>
                            <br>
                              <small> <strong>Joined : </strong> {{ user.created_at }}</small>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-twitter"></i>
                              <span
                                >@{{user.twitter}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-facebook"></i>
                              <span
                                >{{user.facebook}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-linkedin"></i>
                              <span
                                >{{user.linkedin}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-envelope"></i>
                              <span
                                >{{user.email}}</span
                              >
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                              <i class="fa fa-phone"></i>
                              <span
                                >{{user.phone}}</span
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
      user: {},
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
        this.user = response.data.data;
    },
    formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    },
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
  width: 20%;
  height: 20%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}
#file{
    border: 0px solid black;
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
