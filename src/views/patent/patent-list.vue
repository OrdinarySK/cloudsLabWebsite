<template>
    <div class="article">
        <h6>{{typePatent}}</h6>

        <ul class="patent-list">
            <li v-for="(patent, index2) in patentClass" :key="index2" class="ccccc" >
                <p class="dddd">{{patent.name}} <span > {{patent.id}}</span> </p>
            </li>
        </ul>


    </div>
</template>

<script>
    export default {
        name: "patent-list",
        props: {
            patentClass: {
                type: Array,
                required: true
            },
            typePatent:Array
        }
    }
</script>

<style scoped>
    .article{
        padding: 10px;

    }
    .patent-list{
        list-style: none;
        padding: 0 0 0 15px;
        line-height: 1.4em;
    }
    h6{
        font-size: 16px;
    }
    p{
        font-size: 14px;
    }
    span{
        color: #B8860B;
        margin-left: 5px;
    }


</style>