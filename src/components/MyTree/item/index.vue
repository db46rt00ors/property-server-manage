<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle(item.name)">
      {{ item.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <Item
        class="item"
        v-for="( item, index ) in item.children"
        :item="item"
        :key="index"
        @toggle="outClick(item.name)"
      ></Item>
    </ul>
  </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder() {
            return this.item.children && this.item.children.length
        }
    },
    methods: {
        toggle(name) {
            // console.log(item.name)
            this.$emit('toggle', 'heihei')
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        outClick(name) {
            // this.title.push(item.name)
            // console.log(item)
            this.$emit('toggle', 'haha')
        }
    }
}
</script>

<style lang="less" scoped>
li {
    cursor: pointer;
}
.bold {
    font-weight: bold;
}
ul {
    padding-left: 1em;
    line-height: 1.5em;
    // list-style-type: dot;
}
</style>
