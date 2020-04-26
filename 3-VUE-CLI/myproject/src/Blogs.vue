<template>
  <div>
     
    <h2>{{blogtitle}}</h2>
    <button @click="changeTitle">Change Title</button>
     <input type="text" v-model="searchTerm">
    <!-- <div v-for="post in posts" :key="post.id"> -->
    <div v-for="post in filtreredPosts" :key="post.id">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">
            <h3>{{post.title}}</h3>
          </span>
          <p>{{post.body | snippet }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      blogtitle: "Blogs",
      posts: [],
      searchTerm : ''
    };
  },
  methods: {
    changeTitle() {
      this.blogtitle = "Amazing Blog Posts";
    }
  },
  beforeCreate() {},
  created() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
      console.log(response);
      this.posts = response.data;
    });
  },
  beforeUpdate() {},
  computed:{
      filtreredPosts(){
         
          return this.posts.filter(post=>{
              return post.title.match(this.searchTerm)
          })
      }
  }
};
</script>

<style>
</style>