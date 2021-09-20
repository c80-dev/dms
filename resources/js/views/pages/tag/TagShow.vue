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
                  Tag Details
                  <div class="page-title-subheading">
                    Welcome to C80 electronic document management system
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="main-card mb-3 card">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="project-info-box mt-0">
                        <h5>
                          <strong>{{ tag.name }} Details</strong>
                        </h5>
                        <p class="mb-0 text-justify">
                          <small>{{ tag.description }}</small>
                        </p>
                      </div>
                      <!-- / project-info-box -->
                      <div class="project-info-box">
                        <p>
                          <strong>Creator Name:</strong> {{ tag.user.name }}
                        </p>
                        <p>
                          <strong>Creator Email:</strong> {{ tag.user.email }}
                        </p>
                        <p>
                          <strong>Creator Phone:</strong> {{ tag.user.phone }}
                        </p>
                        <p>
                          <strong>Created Date:</strong>
                          {{ formatDate(tag.created_at) }}
                        </p>
                      </div>
                      <!-- / project-info-box -->
                    </div>
                    <!-- / column -->
                    <div class="col-md-4">
                      <div class="project-info-box">
                       <div class="form-group">
                            <label for="name"> <strong>Add User</strong></label>
                            <select v-model="selected_user" class="form-control form-control-md">
                                <option
                                v-for="(userData, index) in users"
                                v-bind:value="userData.id"
                                :key="index"
                                class="text-dark"
                                >
                                {{ userData.name }}
                                </option>
                            </select><br>
                             <button
                            type="submit"
                            @click="onSubmitUser()"
                            class="btn btn-dark btn-lg"
                            title="Add user to group"
                            >
                            <i class="pe-7s-add-user"></i>
                            </button>
                            <router-link to="/" class="btn btn-success btn-lg" title="View all users in this group"> <i class="pe-7s-look"></i
                          > </router-link>
                        </div>
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
                            </select><br>
                              <button
                            type="submit"
                            @click="onSubmitFile()"
                            class="btn btn-dark btn-lg"
                            title="Add user to group"
                            >
                            <i class="pe-7s-add-user"></i>
                            </button>
                            <router-link to="/" class="btn btn-success btn-lg" title="View all users in this group"> <i class="pe-7s-look"></i
                          > </router-link>
                        </div>
                        <div class="form-group">
                            <label for="name"> <strong>Add Group</strong></label>
                             <select v-model="selected_group" class="form-control form-control-md">
                                <option
                                v-for="(group, index) in groups"
                                v-bind:value="group.id"
                                :key="index"
                                class="text-dark"
                                >
                                {{ group.name }}
                                </option>
                            </select><br>
                            <button
                            type="submit"
                            @click="onSubmitGroup()"
                            class="btn btn-dark btn-lg"
                            title="Add user to group"
                            >
                            <i class="pe-7s-add-user"></i>
                            </button>
                            <router-link to="/" class="btn btn-success btn-lg" title="View all users in this group"> <i class="pe-7s-look"></i
                          > </router-link>
                        </div>
                      </div>
                      <!-- / project-info-box -->
                    </div>
                    <!-- / column -->
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
  name: "TagShow",
  data() {
    return {
      tag: {},
      users: [],
      files: [],
      groups: [],
      selected_group: "",
      selected_user: "",
      selected_file: "",
    };
  },
  components: {
    SideBar: () => import("../../../components/SideBar.vue"),
    Header: () => import("../../../components/Header.vue"),
    Footer: () => import("../../../components/Footer.vue"),
  },
  created() {
    this.getTag(this.$route.params.id);
    this.getMetrix();
  },
  methods: {
    async getTag(id) {
      const response = await axios.get("tags/" + id);
      this.tag = response.data.data;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    //add users to group
    async onSubmitUser() {
        try {
          const response = await axios.post("add-user-to-tag", {
            user_id: this.selected_user,
            tag_id: this.$route.params.id,
          });
          alert(response.data.message);
        } catch (e) {
          alert("Sorry select a user");
        }
    },
    //add file to group
    async onSubmitFile() {
        try {
          const response = await axios.post("add-file-to-tag", {
            file_id: this.selected_file,
            tag_id: this.$route.params.id,
          });
          alert(response.data.message);
        } catch (e) {
          alert("Sorry select a file");
        }
    },
    //add tag to group
    async onSubmitGroup() {
        try {
          const response = await axios.post("add-group-to-tag", {
            tag_id: this.$route.params.id,
            group_id: this.selected_group,
          });
          alert(response.data.message);
        } catch (e) {
          alert("Sorry select a group");
        }
    },
    async getMetrix() {
        const response = await axios.get('attachment-helper');
        this.users = response.data.users;
        this.files = response.data.files;
        this.groups = response.data.groups;
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>
body {
  background: #f5f5f5;
  margin-top: 20px;
}
/*------- portfolio -------*/
.project {
  margin: 15px 0;
}

.no-gutter .project {
  margin: 0 !important;
  padding: 0 !important;
}

.has-spacer {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

.has-spacer-extra-space {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

.has-side-spacer {
  margin-left: 30px;
  margin-right: 30px;
}

.project-title {
  font-size: 1.25rem;
}

.project-skill {
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.06rem;
}

.project-info-box {
  margin: 15px 0;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 5px;
}

.project-info-box p {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5dadb;
}

.project-info-box p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.rounded {
  border-radius: 5px !important;
}
.mr-5 {
  margin-right: 5px !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}

.project-info-box p {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5dadb;
}
p {
  font-family: "Barlow", sans-serif !important;
  font-weight: 300;
  font-size: 1rem;
  color: #686c6d;
  letter-spacing: 0.03rem;
  margin-bottom: 10px;
}
b,
strong {
  font-weight: 700 !important;
}
</style>
