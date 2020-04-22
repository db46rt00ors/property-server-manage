<template>
  <div class="content">
    <a-row>
      <a-col :span="4">
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="请选择住宅:">
            <a-select v-model="form.region" placeholder="please select your zone">
              <a-select-option value="1">121小区</a-select-option>
              <a-select-option value="2">122小区</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-form-model>
        <a-tree :treeData="gData" class="tree" @select="onSelect"></a-tree>
      </a-col>
      <a-col :span="20">
        <a-row>
          <div class="title">初始化 xxxx 的表读数</div>
        </a-row>
        <a-row type="flex" justify="start" class="lastcost">
          <div>仪表读数：</div>
          <a-input></a-input>
          <a-button>确认初始化</a-button>
        </a-row>
        <a-row>
          <a-table
            :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :dataSource="tableData"
            size="small"
            :scroll="{ y: 300 }"
          ></a-table>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import _ from 'lodash'
const columns = [
    {
        align: 'center',
        title: '费项编号',
        dataIndex: 'feenumber'
    },
    {
        align: 'center',
        title: '费项名称',
        dataIndex: 'feename'
    },
    {
        align: 'center',
        title: '费项读表数',
        dataIndex: 'feename_amount'
    },
    {
        align: 'center',
        title: '收费方式',
        dataIndex: 'chargemethod',
        scopedSlots: { customRender: 'chargemethod' }
    },
    {
        align: 'center',
        title: '单位价格',
        dataIndex: 'unitprice'
    },
    {
        align: 'center',
        title: '收费周期(月)',
        dataIndex: 'chargecycle'
    }
]
export default {
    data() {
        return {
            columns,
            selectedRowKeys: [],
            loading: false,
            labelCol: { span: 10 },
            wrapperCol: { span: 10 },
            form: {
                region: undefined
            }
        }
    },
    computed: {
        tableData() {
            const data = []
            for (let i = 0; i < 46; i++) {
                data.push({
                    key: i + 1,
                    feenumber: _.random(1000, 5000),
                    feename: '费项名称' + _.random(1000, 5000),
                    feename_amount: _.random(1000, 5000),
                    chargemethod: _.sample([
                        '自定义',
                        '按使用量',
                        '按房屋面积',
                        '按加建面积',
                        '按住户',
                        '按车位面积',
                        '按车库面积',
                        '按阁楼面积',
                        '按储藏室面积'
                    ]),
                    unitprice: _.random(1, 240),
                    chargecycle: 1
                })
            }
            // 给tag上颜色
            data.forEach(function(item, index) {
                switch (item.chargemethod) {
                    case '自定义':
                        item.color = 'chocolate'
                        break
                    case '按使用量':
                        item.color = 'red'
                        break
                    case '按房屋面积':
                        item.color = 'gray'
                        break
                    case '按加建面积':
                        item.color = 'gray'
                        break
                    case '按车库面积':
                        item.color = 'purple'
                        break
                    case '按车位面积':
                        item.color = 'purple'
                        break
                    case '按储藏室面积':
                        item.color = 'cyan'
                        break
                    case '按阁楼面积':
                        item.color = 'cyan'
                        break
                    default:
                        item.color = 'blue'
                        break
                }
            })
            return data
        },
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
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys)
            this.selectedRowKeys = selectedRowKeys
        },
        sendAjax() {
            console.log(666)
        },
        onSelect(selectedKeys, info) {
            console.log(selectedKeys, info)
        }
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
    list-style-type: none;
    padding-left: 15px;
}
.content {
    background-color: #fff;
    padding: 20px 0;
    min-height: 500px;
    .title {
        text-indent: 5px;
        color: #333;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    .lastcost {
        line-height: 40px;
        input{
            width: 150px;
            margin-top: 4px;
        }
        button {
            margin-left: 4px;
            margin-top: 4px;
        }
    }
}
</style>
