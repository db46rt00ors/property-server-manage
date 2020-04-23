<template>
  <div class="content">
    <a-row>
      <a-col :span="4">
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="请选择住宅:">
            <a-select placeholder="please select your zone" @change="houseChange">
              <a-select-option value="1">121小区</a-select-option>
              <a-select-option value="2">122小区</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
        <a-tree :treeData="gData" class="tree" @select="onSelect"></a-tree>
      </a-col>
      <a-col :span="20">
        <a-row type="flex" justify="end">
          <a-button @click="save">保存</a-button>
          <a-button @click="add" style="margin: 0 10px;">新增</a-button>
          <a-button @click="del">删除</a-button>
        </a-row>
        <a-form :form="form" :label-col="{ span: 10 }" :wrapper-col="{ span: 14 }">
          <a-row>
            <a-col :span="16">
              <a-form-model-item label="选择楼盘" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-input></a-input>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="8">
              <a-form-model-item label="费项名称">
                <a-input></a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="8">
              <a-form-model-item label="单位价格">
                <a-input></a-input>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="16">
              <a-form-model-item label="上级费项" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-select placeholder="please select your zone" @change="feesChange">
                  <a-select-option value="1">121小区</a-select-option>
                  <a-select-option value="2">122小区</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="16">
              <a-form-model-item label="费项说明" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-input />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedRowKeys: [],
            labelCol: { lg: { span: 8 } },
            wrapperCol: { lg: { span: 16 } },
            form: this.$form.createForm(this)
        }
    },
    computed: {
        gData() {
            const nest = (items, id = 0, link = 'parent_id') =>
                items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }))
            const data = [
                { id: 1, parent_id: 0, title: 'xxx小区' },
                { id: 2, parent_id: 1, title: '罚款' },
                { id: 3, parent_id: 1, title: '押金' },
                { id: 4, parent_id: 2, title: '停车罚款' },
                { id: 5, parent_id: 2, title: '广告罚款' },
                { id: 6, parent_id: 2, title: '广告xx罚款' }
            ]
            return nest(data)
        }
    },
    methods: {
        onSelect(selectedKeys, info) {
            console.log(selectedKeys, info)
            console.log('title', info.node.title)
            console.log('key', info.node.pos)
            console.log(this.gData)
        },
        houseChange(value) {
            console.log(value)
        },
        feesChange(value) {
          console.log(value)
        },
        save() {},
        add() {},
        del() {}
    }
}
</script>

<style lang='less' scoped>
ul,
li {
    list-style-type: none;
    list-style: none;
}
/deep/ li.ant-tree-treenode-switcher-open,
/deep/ li.ant-tree-treenode-switcher-close {
    padding-top: 0;
    padding-bottom: 0;
}
/deep/ ul {
    padding-left: 15px;
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
</style>
