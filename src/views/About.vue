<template>
  <div >
    aa
  </div>
</template>
<script>
export default {
    data() {
          return {
          }
    },
    components: {
    },
    computed: {
    },
    watch:{

    },
    computed:{
    },
    mounted(){

    },
    methods: {
      asd(){
        var params = {
          name: 1,
          age: 10
        }
        this.$http.add(params).then((res)=>{
          console.log(res)
        })
      },

    } 
};
</script>
