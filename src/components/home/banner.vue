<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item><img :src="img1" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img2" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img3" alt=""></mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    data() {
        return {
            img1: require('../../assets/images/q1.jpg'),
            img2: require('../../assets/images/q2.jpg'),
            img3: require('../../assets/images/q3.jpg'),
        }
    },
}
</script>