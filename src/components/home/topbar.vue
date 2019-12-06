<template>
    <div class="topbar">
        <mt-header fixed title="">
            <!-- 首页 -->
            <!-- 其他页面 -->
            <router-link to="/" slot="left">
                <mt-button v-if="this.$route.path !== '/'" icon="back">返回</mt-button>
            </router-link>
            <mt-button v-if="this.$route.path !== '/'" icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="search">
            <input type="text" readonly="true" placeholder='请输入内容'>
            <mt-button type="default">搜索</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            value: ''
        }
    },
}
</script>