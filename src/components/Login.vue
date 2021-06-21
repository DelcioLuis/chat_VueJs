
<template>

  <div>
    <b-container fluid>
      <b-row class="my-1">
  
        <b-col sm="9">
          <b-form-input v-model="username" id="input-none" :state="null" placeholder="username"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">.</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="senha" id="input-none" :state="null" placeholder="password"></b-form-input>
        </b-col>
      </b-row>
      

      <div>
        <router-link to="/chat">
          <b-button >Login</b-button>
        </router-link>

      </div>
      </b-container>
      

    
  </div>
  
</template>

<script>
//import axios from "axios"
export default {
  name: 'Login',
  
  data() {
      return {
        username: '',
        senha:"",
      } 
    },
    methods: {
    greet: function () {

      const api = "http://localhost:3000/user";

      fetch(api).then(res => {return res.json()})
      .then(json => {
        json
      })

      /* const api = axios.create({
        baseURL:"http://localhost:3000"
      })
      
      const response = api.post("/user", ).then(res => {return res.json()})
      .then(json=>{
        console.log(json)
      })

      console.log(response) */
    }
  },
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
b-form-input{
   margin: 30px 30px 30px;
}
</style>
