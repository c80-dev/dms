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
                  All Groups
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
                    <thead>
                      <tr>
                        <th>No..</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(group, index) in groups"
                        :index="index"
                        :key="group.id"
                      >
                        <td class="text-muted">{{ index + 1 }}</td>
                        <td>
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left flex2">
                                <div class="widget-heading">
                                  {{ group.name }}
                                </div>
                                <div class="widget-subheading opacity-7">
                                  Created By <small> {{ group.user.name }} </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{  shortText(group.description) }} </td>
                        <td>
                          {{ formatDate(group.created_at) }}
                        </td>
                        <td>
                          <router-link
                            v-bind:to="'/group-edit/' + group.id"
                            id="PopoverCustomT-1"
                            class="btn btn-primary btn-sm"
                            title="Edit group"
                            ><i class="pe-7s-edit"></i
                          ></router-link>
                          <router-link
                            v-bind:to="'/group-show/' + group.id"
                            id="PopoverCustomT-1"
                            class="btn btn-success btn-sm"
                            title="View group details"
                            ><i class="pe-7s-look"></i
                          ></router-link>
                          <button
                            @click="delteGroups(group.id)"
                            id="PopoverCustomT-1"
                            class="btn btn-danger btn-sm"
                            title="Delete group"
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
            <vue-cli-laravel-pagination :data="groups" align="center" :onChange="changed_value" buttonLimit="10" v-if="groups.length > 10"></vue-cli-laravel-pagination>
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
  name: "GroupAll",
  data() {
    return {
      groups: {},
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
    this.getGroups();
  },
  methods: {
    async getGroups() {
      const response = await axios.get("groups");
      this.groups = response.data.data;
    },
    mounted() {
      this.fetch();
    },
    changed_value(options){
      this.fetch(options.page)
    },
	  async fetch(page = 1) {
        const response = await axios.get('groups?page=' + page)
        this.groups = response.data.data;
	  },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async delteGroups(id) {
      try {
        const response = await axios.delete("groups/" + id);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    shortText(stringValue) {
        if (stringValue.length > 10) {
           return  stringValue = stringValue.substring(0, 70) + "...";
        }
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
    #description {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
