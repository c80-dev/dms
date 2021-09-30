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
                  Dashboard
                  <div class="page-title-subheading">
                    Welcome to C80 electronic document management system
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div  v-if="user.roles[0].name == 'Admin'">
              <DashboardMetrix />
              <div class="row">
                <div class="col-md-12">
                  <div class="main-card mb-3 card">
                    <div class="table-responsive">
                      <table
                        class="
                          align-middle
                          mb-0
                          table table-borderless table-striped table-hover
                        "
                      >
                        <thead>
                          <tr>
                            <th>No..</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(userData, index) in users"
                            :index="index"
                            :key="userData.id"
                          >
                            <td class="text-center text-muted">{{ index + 1 }}</td>
                            <td>
                              <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                  <div class="widget-content-left mr-3">
                                    <div
                                      class="widget-content-left"
                                      v-if="userData.image_path"
                                    >
                                      <img
                                        width="40"
                                        class="rounded-circle"
                                        :src="
                                          asset(
                                            `storage/uploads/${userData.image_path}`
                                          )
                                        "
                                        alt=""
                                      />
                                    </div>
                                    <div class="widget-content-left" v-else>
                                      <img
                                        width="40"
                                        class="rounded-circle"
                                        :src="asset('images/avt.png')"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div class="widget-content-left flex2">
                                    <div class="widget-heading">
                                      {{ userData.name }}
                                    </div>
                                    <div class="widget-subheading opacity-7">
                                      {{ userData.roles[0].name }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{{ userData.email }}</td>
                            <td>
                              {{ userData.phone }}
                            </td>
                            <td>{{ formatDate(userData.created_at) }}</td>
                            <td>
                              <router-link
                                v-bind:to="'/profile/' + userData.id"
                                id="PopoverCustomT-1"
                                class="btn btn-primary btn-sm"
                                ><i class="pe-7s-look"></i
                              ></router-link>
                              <button
                                @click="delteUser(userData.id)"
                                id="PopoverCustomT-1"
                                class="btn btn-danger btn-sm"
                              >
                                <i class="pe-7s-delete-user"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <vue-cli-laravel-pagination :data="users" align="center" :onChange="changed_value" buttonLimit="10" v-if="users.length > 10"></vue-cli-laravel-pagination>
              </div>
          </div>
          <div class="col-12" v-else>
               <div class="col-md-12">
                <div class="row">
                 <div class="col-md-4">
                  <div class="form-group">
                    <router-link to="/file-create" type="button" class="btn btn-dark">Create File</router-link>
                </div>
              </div>
                  <div class="col-md-4 offset-md-4">
                  <div class="form-group">
                  <select v-model="selected" @change="onChange($event)" class="form-control form-control-md">
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
              </div>
                </div>
              </div>
              <div class="row">
                  <div class="col-md-4">
                     <h4>Access Files</h4> <br>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">No..</th>
                          <th scope="col">File</th>
                          <th scope="col">Type</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                                      </div>
                  <div class="col-md-8">
                    <h4>My Files</h4> <br>
                    <Files :files="files" /> <br>
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
  name: "Dashboard",
  data() {
    return {
      users: {},
      files: {},
      tags: {}
    };
  },
  components: {
    SideBar: () => import("../components/SideBar.vue"),
    Header: () => import("../components/Header.vue"),
    Footer: () => import("../components/Footer.vue"),
    DashboardMetrix: () => import("../components/DashboardMatrix.vue"),
    Files: () => import("../components/Files.vue")
  },
  created() {
    this.getEmployees();
    this.getFiles();
    this.getTags();
  },
  methods: {
    mounted() {
      this.fetch();
    },
    changed_value(options){
      this.fetch(options.page)
    },
	  async fetch(page = 1) {
        const response = await axios.get('users?page=' + page)
        this.users = response.data.data;
	  },
    async getEmployees() {
      const response = await axios.get("users");
      this.users = response.data.data;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async delteUser(id) {
      try {
        const response = await axios.delete("delete-user/" + id);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    async getTags() {
      const response = await axios.get("tags");
      this.tags = response.data.data;
    },
    async getFiles() {
        const response = await axios.get("files");
        this.files = response.data.data;
    },
    onChange(event) {
      let val = event.target.value;
      this.files = this.files.filter((item) => {
        return item.tag_id == val
      });
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
