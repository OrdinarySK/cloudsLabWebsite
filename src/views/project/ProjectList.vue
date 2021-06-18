<template>
  <div class="project-list">
      <div class="list" v-for="(item , index) in this.lists" :key=index>  
        <router-link :to="{
            name: 'ProjectInfo',
            params: {
                id: item.id
            }
        }">
          <img :src="item.picUrl" alt="">
          <p class="name">{{item.name}}</p>
        </router-link>
      </div>
  </div>
</template>

<script>

export default {
    components: {
    
    },
    props: {
        lists: Array,
        require: true,
    },
    data() {
        return{
            
        }
    },
    created(){
        console.log(this.lists);
    }
}
</script>

<style scoped>
.project-list{
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

}
.list{
    width: 31%;
    margin: 20px 10px;
    background-color:#e5e5e5;
}

.list img{
    width: 300px;
    height: 150px;
    margin: 10px auto;
    display: block;
}
.list p{
    width: 100%;
    color: rgba(0,0,0,0.8);
    text-align: center;
}

</style>