<template>
  <div>
      <h2>{{blogtitle}}</h2>
      <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
    name:'Blogs',
    data(){
        return{
            blogtitle:'Blogs'
        }
    },
    methods:{
        changeTitle(){
            this.blogtitle='Amazing Blog Posts'
        }
    },
    beforeCreate(){
        alert('beforeCreate  hook')
    },
    created(){
        alert('Created hook')
    },
    beforeUpdate(){
        alert('before Update')
    }

}
</script>

<style>

</style>