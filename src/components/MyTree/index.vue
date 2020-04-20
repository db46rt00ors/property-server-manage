
<template>
  <ul class="mytree">
    <item class="item" :item="treeData" @toggle="nClick"></item>
  </ul>
</template>

<script>
import item from './item'
export default {
    props: {
        treeData: {
            type: Object,
            default: () => {
                return ''
            }
        }
    },
    methods: {
        nClick(title) {
            console.log(title, 'title')
        }
    },
    components: {
        item
    }
}
</script>

<style lang='less' scoped>
.mytree {
    margin-top: 15px;
}
</style>
