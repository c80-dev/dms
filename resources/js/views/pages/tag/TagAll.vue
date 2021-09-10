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
                  All Tags
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
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(tag, index) in tags"
                        :index="index"
                        :key="tag.id"
                      >
                        <td class="text-muted">{{ index + 1 }}</td>
                        <td>
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left flex2">
                                <div class="widget-heading">{{ tag.name }}</div>
                                <div class="widget-subheading opacity-7">
                                  Created By <small>{{ tag.user.name }}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td id="description">{{  shortText(tag.description) }}</td>
                        <td>
                          {{ formatDate(tag.created_at) }}
                        </td>
                        <td>
                          <router-link
                            v-bind:to="'/tag-edit/' + tag.id"
                            id="PopoverCustomT-1"
                            class="btn btn-primary btn-sm"
                            title="Edit tag"
                            ><i class="pe-7s-edit"></i
                          ></router-link>
                          <router-link
                            v-bind:to="'/tag-show/' + tag.id"
                            id="PopoverCustomT-1"
                            class="btn btn-success btn-sm"
                            title="View tag details"
                            ><i class="pe-7s-look"></i
                          ></router-link>
                          <button
                            @click="delteTags(tag.id)"
                            id="PopoverCustomT-1"
                            class="btn btn-danger btn-sm"
                            title="Delete tag"
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
  name: "GroupAll",
  data() {
    return {
      tags: [],
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
    this.getTags();
  },
  updated() {
    this.getTags();
  },
  methods: {
    async getTags() {
      const response = await axios.get("tags");
      this.tags = response.data.data;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async delteTags(id) {
      try {
        const response = await axios.delete("tags/" + id);
        this.success = response.data.message;
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
    shortText(stringValue) {
        if (stringValue.length > 70) {
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
