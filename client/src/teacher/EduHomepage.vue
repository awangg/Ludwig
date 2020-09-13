<template>
  <div id="eduhomepage">
    <navbar/>
     <el-col :span="11"><div class="grid-content">
        <span>
        <div class="title">
          New Assignments
        </div>
        <el-upload
          class="upload-demo"
          drag
          name="assignment"
          :headers="headers"
          action="http://localhost:3000/api/v1/assignments"
          :on-success="createNewAssignment"
          show-file-list>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop files here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">pdf files with a size less than 1GB</div>
        </el-upload>
        <div class = "existing">
          Existing Assignments
        </div>
        <div class = "list_existing">
          <div class="assignment-container" v-for="(id, index) in ids" :key="index">
            <el-button v-on:click="getSpecificAssignment(id)"> Assignment {{ index + 1}} </el-button>
          </div>
        </div>
        </span>
      </div></el-col>
      <!--need to get background color to not cover over navbar-->
      <div id="background"><div class = "grid-content2">

      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet">
      <p src = "slogan" class = "title">Synchronize Recordings</p>
      <el-main padding="100px">
        <el-form :label-position="'left'">
            <el-form-item label="Tempo">
                <el-input v-model="inputForm.tempo"></el-input>
            </el-form-item>
            <el-form-item label="Specificity">
                <el-input v-model="inputForm.specificity"></el-input>
            </el-form-item>
        </el-form>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet"> 
        <el-button round type="circle" src="button" class="buttonsub" v-on:click="mergeAssignments">Submit</el-button>
      </el-main>
      
  </div>
  </div></div>
</template>
    
<script>
import navbar from "../components/Navbar"
import axios from 'axios'

export default {
    name:"eduhomepage",
    components:{
        navbar
    },
    data() {
      return {
        ids: [],
        inputForm: {
          tempo: '',
          specificity: ''
        },
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
      createNewAssignment() {
        console.log('lol')
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
      },
      mergeAssignments() {
        axios({
          method: 'post',
          url: `http://localhost:3000/api/v1/videos/merge`,
          headers: {
            'Authorization': 'Bearer ' + this.$cookies.get('token')
          },
          data: {
            tempo: this.inputForm.tempo,
            specificity: this.inputForm.specificity
          }
        }).then( (res) => {
          let response = res.data
          console.log(response)
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
  margin-top: 50px;
  align: center;
}
.existing {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 24px;
  margin-top: 50px;
  align: center;
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
  margin-top:21%;
}

#background {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #E4CEE0; 
}

.button{
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 300px;
  height: 50px;
  margin-left: 10px;
  margin-top: 30px;

}

.assignment-container {
  margin-top: 1rem;
}

.button:hover {
   background-color: #ffffff;
   color: #C998C3;
}

.button1{
  background-color: #C998C3;
  color: #ffffff;
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  width: 300px;
  height: 50px;
  margin-left: 10px;
  margin-top: 0px;

}

.button1:hover {
   background-color: #ffffff;
   color: #C998C3;
}

.list_existing {
  margin-top: 2rem;
}

</style> 
