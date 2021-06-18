<template>
  <div class="patent-container">
    <Content 
    :item= "item">
    </Content>
      专利
  </div>
</template>

<script>
import Content from '@/components/Content';
export default {
  components: {
    Content,
  },
  data() {
    return {
      item: "专利",
    }
  }
}
</script>

<style>

</style>