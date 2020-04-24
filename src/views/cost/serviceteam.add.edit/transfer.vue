<template>
  <a-modal width="30%" v-model="transferobj.visible" :destroyOnClose="true">
    <a-transfer
      :dataSource="transferobj.mockData"
      showSearch
      :filterOption="filterOption"
      :targetKeys="transferobj.targetKeys"
      @change="handleChange"
      @search="handleSearch"
      :render="item => item.title"
      :titles="['待选用户', '已选用户']"
    ></a-transfer>
  </a-modal>
</template>
<script>
export default {
    props: {
        mockData: {
            type: Array,
            default: () => {
                return []
            }
        },
        targetKeys: {
            type: Array,
            default: () => {
                return []
            }
        },
        transferobj: {
            type: Object,
            default: () => {
                return {
                    visible: false,
                    mockData: [],
                    targetKeys: []
                }
            }
        }
    },
    methods: {
        filterOption(inputValue, option) {
            return option.description.indexOf(inputValue) > -1
        },
        handleChange(targetKeys, direction, moveKeys) {
            console.log(targetKeys, direction, moveKeys)
            this.transferobj.targetKeys = targetKeys
        },
        handleSearch(dir, value) {
            console.log('search:', dir, value)
        }
    }
}
</script>
<style lang="less" scoped>
 /deep/ .ant-transfer-list{
     height: 400px;
 }
</style>
