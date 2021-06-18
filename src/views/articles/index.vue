<template>
  <div class="article-container">
    <Content 
    :item= "item">
    </Content>
      论文
  </div>
</template>

<script>
import Content from '@/components/Content'
export default {
  components: {
    Content,
  },
  data () {
    return {
      item: "论文",
    }
  }
}
</script>

<style>

</style>