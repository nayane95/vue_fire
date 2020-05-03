<template>
  <div class="profile">

    <h1>Profile for {{userId}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  data(){
      return{
        userId:this.$route.params.user_id
    }
  },
  methods:{
      updateId(){
          this.userId=this.$route.params.user_id
      }
  },
  watch:{
      $route:'updateId'
  }
}
</script>
