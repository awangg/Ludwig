<template>
  <div id="studentassignments">
    <navbar/>
     <el-col :span="11"><div class="grid-content">
        <span>
        <div class="title">
          Current Assignments
        </div>
        </span>
        <div class="assignment-container" v-for="(id, index) in ids" :key="index">
          <el-button v-on:click="getSpecificAssignment(id)"> Assignment {{ index + 1}} </el-button>
        </div>
      </div></el-col>
      <!--need to get background color to not cover over navbar-->
      <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "title">Upload Your Music</p>
      <el-upload
        class="upload-demo"
        drag
        name="video"
        :headers="headers"
        action="http://localhost:3000/api/v1/videos"
        show-file-list>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Drop files here or <em>click to upload</em></div>
        <div class="el-upload__tip" slot="tip">wav files with a size less than 1GB</div>
      </el-upload>
  </div>
  </div></div>
</template>
    
<script>
import navbar from "../components/Navbar"
import axios from 'axios'
export default {
    name:"studentassignments",
    components:{
        navbar
    },
    data() {
      return {
        ids: [],
        headers: {
          'Authorization': 'Bearer ' + this.$cookies.get('token')
        }
      }
    },
    created() {
      this.getAllAssignments()
    },
    methods: {
      getAllAssignments() {
        axios({
          method: 'get',
          url: 'http://localhost:3000/api/v1/assignments',
          headers: {
            'Authorization': 'Bearer ' + this.$cookies.get('token')
          }
        }).then( (res) => {
          let response = res.data
          this.ids = response
        })
      },
      getSpecificAssignment(id) {
        axios({
          method: 'get',
          url: `http://localhost:3000/api/v1/assignments/${id}`,
          headers: {
            'Authorization': 'Bearer ' + this.$cookies.get('token')
          },
          responseType: 'blob'
        }).then( (res) => {
          let response = res.data
          const data = window.URL.createObjectURL(response)
          let link = document.createElement('a')
          link.href = data
          link.download = 'assignment.pdf'
          link.click()
          setTimeout(function() {
            window.URL.revokeObjectURL(data)
          }, 100)
        })
      }
    }
}
</script>
    
<style scoped lang="css">


.navbar {
  margin-top:0px;
}

.title{
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 24px;
}
.logo {
  height: 80px;
  width: 130px;
  position: left;
  float:left;
}
.grid-content{
  margin-top:6%;
}

.grid-content2 {
  margin-top:20%;
}

#background {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #E4CEE0; 
}

.assignment-container {
  margin-top: 1rem;
}

</style> 
