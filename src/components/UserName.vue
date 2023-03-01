<template>
    <!-- <h1>姓名 {{ $route.params.username }}</h1>
    <h2>id:{{ $route.params.id }}</h2> -->
    <h1>用户中心</h1>
    <h1>姓名：{{ $route.params.username}}</h1>
    <router-view></router-view>
</template>

<script>
export default{
    beforeRouteUpdate(to,from){
        console.log(to,from)
        alert(`组件加载，请求数据name: ${this.$route.params.username}`)
    }
    // mounted() {
    //     alert(`组件加载，请求数据name: ${this.$route.params.username}`)
    // }
};
</script>