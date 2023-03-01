<template>
  <h1>Hello World</h1>
  <p>
    <el-button type="primary" @click="toUser">按钮</el-button>
  </p>
  <p>
    <!-- <router-link to="/demo-one">页面1</router-link>
    <br/>
    <router-link to="/demo-two">页面2</router-link> -->
    <router-link to="/user/小王/8888">小王</router-link>
    <router-link to="/user/小李/6666">小李</router-link>
  </p>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    toUser() {
      this.$router.push({
        name: 'user',
        params: {
          usernmae: '小王'
        }
      }).then(() => {
        this.$message({
          message: "跳转成功",
          type: "success",
        })
      })
    }
  }
}
</script>

