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
                  <i class="pe-7s-users icon-gradient bg-mean-fruit"> </i>
                </div>
                <div>
                  All Users
                  <div class="page-title-subheading">
                    Welcome to C80 electronic document management system
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Error v-if="error" :error="error" />
          <Success v-if="success" :success="success" />
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
                    <thead class="bg-dark text-light">
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
                        <td class="text-muted">{{ index + 1 }}</td>
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
                        <td>{{ userData.phone }}</td>
                        <td>{{ formatDate(userData.created_at) }}</td>
                        <td>
                          <router-link
                            v-bind:to="'/profile-edit/' + userData.id"
                            id="PopoverCustomT-1"
                            class="btn btn-primary btn-sm"
                            title="Edit users"
                            ><i class="pe-7s-edit"></i
                          ></router-link>
                          <router-link
                            v-bind:to="'/profile/' + userData.id"
                            id="PopoverCustomT-1"
                            class="btn btn-success btn-sm"
                            title="View users details"
                            ><i class="pe-7s-look"></i
                          ></router-link>
                          <button
                            @click="delteTags(userData.id)"
                            id="PopoverCustomT-1"
                            class="btn btn-danger btn-sm"
                            title="Delete users"
                          >
                            <i class="pe-7s-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
  name: "UserAll",
  data() {
    return {
      users: [],
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
  created() {
    this.getUsers();
  },
  updated() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await axios.get("users");
      this.users = response.data.data;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async delteTags(id) {
      try {
        const response = await axios.delete("users/" + id);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>


<style scoped>
</style>
