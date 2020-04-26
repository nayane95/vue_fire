<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar/>
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
    <Blogs/>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blogs from './Blogs'

export default {
  name: 'app',
  components:{
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data () {
    return {
      title : 'Welcome to my first VUE app :)',
       friends: [
        { name: "Naya", online: true },
        { name: "Wara", online: false },
        { name: "Chuti", online: true },
        { name: "Janiya", online: false },
        { name: "Nippa", online: true }
      ]
    }
  },
  methods:{
    deleteFriend(payload){
      console.log(payload)
      this.friends= this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
  h1{
    color: aquamarine;
    font-weight: normal;
    text-align: center;
  }
</style>
