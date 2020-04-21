<template>
  <div class="search-house">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="6">
          <a-form-model-item label="请选择住宅:">
            <a-select v-model="form.region" placeholder="please select your zone">
              <a-select-option value="1">小区AAA</a-select-option>
              <a-select-option value="2">小区BBB</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-tree :treeData="gData" class="tree" @select="onSelect"></a-tree>
        </a-col>
        <a-col :span="18">
          <div>
            <h1 class="housinginformation-header">查看 第1栋 楼宇信息</h1>
            <a-row>
              <a-col :span="8">
                <a-form-model-item label="入住日期" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-input />
                </a-form-model-item>
              </a-col>
              <a-col :span="8">
                <a-form-model-item label="使用状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-select placeholder="please select your zone">
                    <a-select-option value="0">空闲</a-select-option>
                    <a-select-option value="1">自主</a-select-option>
                    <a-select-option value="2">出租</a-select-option>
                    <a-select-option value="3">转卖</a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
export default {
    data() {
        return {
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 16 }, sm: { span: 16 } },
            form: {
                name: '',
                region: undefined,
                date1: undefined,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    computed: {
        gData() {
            const nest = (items, id = 0, link = 'parent_id') =>
                items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }))
            const data = [
                { id: 1, parent_id: 0, title: 'xxx小区' },
                { id: 2, parent_id: 1, title: '第一栋' },
                { id: 3, parent_id: 1, title: '第二栋' },
                { id: 6, parent_id: 2, title: '第一单元' },
                { id: 7, parent_id: 2, title: '第二单元' },
                { id: 8, parent_id: 2, title: '第三单元' },
                { id: 9, parent_id: 3, title: '第一单元' },
                { id: 10, parent_id: 3, title: '第二单元' },
                { id: 11, parent_id: 3, title: '第三单元' },
                { id: 12, parent_id: 6, title: '101' },
                { id: 13, parent_id: 6, title: '102' },
                { id: 14, parent_id: 6, title: '103' },
                { id: 15, parent_id: 7, title: '101' },
                { id: 16, parent_id: 7, title: '102' },
                { id: 17, parent_id: 7, title: '103' },
                { id: 18, parent_id: 8, title: '101' },
                { id: 19, parent_id: 8, title: '102' },
                { id: 20, parent_id: 8, title: '103' },
                { id: 21, parent_id: 9, title: '101' },
                { id: 22, parent_id: 9, title: '102' },
                { id: 23, parent_id: 9, title: '103' },
                { id: 24, parent_id: 10, title: '101' },
                { id: 25, parent_id: 10, title: '102' },
                { id: 26, parent_id: 10, title: '103' },
                { id: 27, parent_id: 11, title: '101' },
                { id: 28, parent_id: 11, title: '102' },
                { id: 29, parent_id: 11, title: '103' }
            ]
            return nest(data)
        }
    },
    methods: {
        onSelect(selectedKeys, info) {
            console.log(selectedKeys, info)
        }
    }
}
</script>

<style scoped lang="less">
.search-house {
    background-color: #fff;
    padding: 20px;
    min-height: 500px;
}
/deep/ li.ant-tree-treenode-switcher-open,
/deep/ li.ant-tree-treenode-switcher-close {
    padding-top: 0;
    padding-bottom: 0;
}
/deep/ ul {
    list-style-type: none;
    padding-left: 15px;
}
</style>
