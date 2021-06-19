<template>
    <div class="article">
        <ul class="year">
            <li v-for="(item, index) in articleClass" :key="index" :id="item.year" :ref="item.year">
                <h6>{{item.year}}</h6>
                <ul class="paper-list">
                    <li v-for="(paper, index2) in item.papers" :key="index2" class="ccccc" >
                        <p class="dddd">{{paper}}</p>
                    </li>
                </ul>
            </li>

        </ul>

    </div>
</template>

<script>
    export default {
        name: "arctile-list",
        props: {
            articleClass: {
                type: Array,
                required: true
            },
            position: String
        },
        watch:{
            position(){
                // alert('#' + this.position)
                // alert(this.$refs[this.position]);

                let dom = document.getElementById(this.position);
                // let top = dom.getBoundingClientRect().top;

                let top = dom.offsetTop;
                window.scrollTo(0, top)


            }
        }
    }
</script>

<style scoped>

    .article{
        padding: 10px;

    }
    .year{
        display: block;
        /*scroll-behavior: smooth;*/
        list-style: none;


    }
    h6{
        font-size: 16px;
    }
    p{
        font-size: 14px;
    }

    .paper-list{
        list-style: none;
        padding: 0 0 0 15px;
        line-height: 1.3em;
    }

</style>