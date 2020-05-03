<template>
  <div>
      <div id="nav">
    <ul>
      <li>
        <router-link to="/home">Home</router-link>|
      </li>
      <li>
        <router-link :to="{name:'About'}">About</router-link>|
      </li>
      <li>
        <router-link to="/profile">Profile</router-link>
      </li>
    </ul>
    
  </div>
  <h2>USER PROFILES</h2>
  <ul>
        <li v-for="(id,index) in userIDs" :key="index">
            <router-link :to="{name:'Profile', params:{user_id:id}}">
                <span>
                    Profile of {{id}}
                </span>
            </router-link>
        </li>
    </ul>
    <h2>Navigation Control</h2>
    <ul>
        <li><button @click="goBack">Go Back</button></li> 
        <li><button @click="goHome">Redirect to Home</button></li>
        <li><button @click="goForward">Go Forward</button></li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
        userIDs:['1','2','3','4','5']
    };
  },
  methods:{
      goHome(){
          this.$router.push({name:'Home'})
      },
      goBack(){
          this.$router.go(-1)
      },
      goForward(){
          this.$router.go(1)
      }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
li{
    display: inline-block;
    margin: 10px;
}
a.router-link-exact-active{
    color: blueviolet;
}
</style>