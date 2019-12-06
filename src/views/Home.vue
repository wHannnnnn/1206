<template>
  <div class="home">
    <div class="app_top">
      <topbar/>
    </div>
    <div class="app_banner">
      <banner/>
    </div>
    <div class="app_nav">
      <navList/>
    </div>
    <div class="app_con">

    </div>
    <div class="app_bottom">
    </div>
  </div>
</template>
<script>
import topbar from '@/components/home/topbar.vue'
import banner from '@/components/home/banner.vue'
import navList from '@/components/home/nav.vue'
export default {
  name: "home",
  components: {
    topbar,banner,navList
  },
  data() {
    return {
    }
  },
  created() {
  },
};
</script>
