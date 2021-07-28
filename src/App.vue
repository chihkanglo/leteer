<template>
  <Layout v-100vh>
    <Header class="header">
      <h2>Leteer</h2>
      <Menu mode="horizontal" theme="dark">
        <MenuItem name="home"
          ><Icon type="ios-paper-plane" /><router-link to="/"
            >動態</router-link
          ></MenuItem
        >
        <MenuItem name="about"
          ><Icon type="ios-happy" /><router-link to="about"
            >個人頁面</router-link
          ></MenuItem
        >
      </Menu>
    </Header>
    <Content class="content">
      <router-view></router-view>
    </Content>
    <Footer>Made with ♥ by Agang</Footer>
  </Layout>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}
.content {
  height: 100%;
  overflow: auto;
}
</style>
