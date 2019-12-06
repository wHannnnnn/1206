<template>
<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
	<div class="mui-scroll">
        <ul class="navUl">
            <li>
                <img :src="img1" alt="">
                <div>推荐</div>
            </li>
            <li>
                <img :src="img2" alt="">
                <div>居家生活</div>
            </li>
            <li>
                <img :src="img3" alt="">
                <div>服饰鞋包</div>
            </li>
            <li>
                <img :src="img1" alt="">
                <div>推荐</div>
            </li>
            <li>
                <img :src="img2" alt="">
                <div>居家生活</div>
            </li>
            <li>
                <img :src="img3" alt="">
                <div>服饰鞋包</div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            img1: require('../../assets/images/nav1.png'),
            img2: require('../../assets/images/nav2.png'),
            img3: require('../../assets/images/nav3.png'),
        }
    },
    mounted() {
        this.mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
}
</script>
<style lang="scss">

</style>