<template>
  <div id="app">
    <Layout>
      <template v-slot:top>
        <Navigation />
      </template>
      <template v-slot:default>
        <router-view></router-view>
      </template>
      <template v-slot:bottom>
        <Footer />
      </template>
    </Layout>  
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/Navigation"
export default {
  components: {
    Layout,
    Footer,
    Navigation
  },
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
</style>
