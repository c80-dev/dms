<template>
            <div class="row">
              <div class="col-md-4 col-sm-6 col-lg-4" v-for="(file, index) in files" :index="index" :key="file.id">
                <div class="card mb-2" id="showFolder">
                  <div class="row g-0">
                    <div class="col-2" style="font-size: 1.6rem">
                      <i class="fas fa-file-pdf text-danger fa-4x" v-if="getFileExtention(file.file_path) == 'pdf'"></i>
                      <i class="fas fa-file-word text-primary fa-4x" v-else></i>
                    </div>
                    <div class="col-7">
                      <div class="card-body">
                        <hspan class="card-title" :title="file.name">
                          {{ file.name }}
                        </hspan>
                        <p class="card-text" :title="file.description">
                            <small class="text-muted">
                              {{  file.description }}
                            </small><br>
                             <small class="text-muted" :title="formatDate(file.created_at)" >
                               {{  formatDate(file.created_at) }}
                            </small>
                        </p>
                      </div>
                    </div>
                    <div class="col-2"> <br><br>
                        <a v-bind:href="asset(`storage/uploads/${file.file_path}`)" download>
                            <i class="fas fa-download text-danger fa-1x"></i>
                        </a> <br>
                         <span v-if="user.roles[0].name == 'Admin' ">
                            <a @click="deleteFile(file.id)">
                                <i class="fas fa-trash text-danger fa-1x"></i>
                            </a>
                        </span>
                        <span v-else-if='file.user_id == user.id'>
                            <a @click="deleteFile(file.id)">
                                <i class="fas fa-trash text-danger fa-1x"></i>
                            </a>
                        </span>
                    </div>
                  </div>
                </div>
              </div>
              <vue-cli-laravel-pagination :data="files" align="center" :onChange="changed_value" buttonLimit="10" v-if="files.length > 10"></vue-cli-laravel-pagination>
            </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'Files',
        props: ['files'],
        data () {
          return {
            tags: [],
          }
        },
        methods: {
            getFileExtention(filePath) {
                var ext =  filePath.split('.').pop();
                return ext; 
            },
            formatDate(dateString) {
                const options = { year: "numeric", month: "long", day: "numeric" };
                return new Date(dateString).toLocaleDateString(undefined, options);
            },
            async deleteFile(id) {
                try {
                const response = await axios.delete("files/" + id);
                this.success = response.data.message;
                } catch (e) {
                this.error = e.response.data.message;
                }
            }
        },
        computed: {
            ...mapGetters(['user'])
        }, 
        created() {
          this.allTags();
        }
    }
</script>
<style scoped>
    #showFolder {
        border-radius: 10px;
    }
    .card-title, .card-text {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 1.3rem;
    }
</style>
