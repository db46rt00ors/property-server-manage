<template>
  <div>
    <a-modal title="公用表设置" width="70%" v-model="publicassessmentobj.visible" :destroyOnClose="true">
      <a-form :form="form" v-if="publicassessmentobj.recored">
        <a-row type="flex" justify="start">
          <a-col>
            <a-form-item
              :labelCol="{span: 14}"
              :wrapperCol="{span: 10}"
              :label="`公表信息：${publicassessmentobj.recored.feename} 公表表号`"
            >
              <a-input></a-input>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item :labelCol="{span: 10}" :wrapperCol="{span: 14}" label="公表读数">
              <a-input></a-input>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="分摊方法" :labelCol="{span: 14}" :wrapperCol="{span: 10}">
              <a-select style="width: 100px;">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :offset="1">
            <a-form-item :labelCol="{span: 14}" :wrapperCol="{span: 10}">
              <a-button type="primary">添加公表</a-button>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row class="setting">
          <a-button type="primary">确定修改</a-button>
          <a-button type="primary">删除公表</a-button>
          <a-button type="primary">停用公表</a-button>
          <a-button type="primary">启用公表</a-button>
          <a-button type="primary">关闭</a-button>
        </a-row>
        <a-row>
          <a-table
            :columns="columns"
            :dataSource="data"
            :rowSelection="rowSelection"
            :scroll="{ y: 250 }"
            size="small"
          >
            <span slot="setting" slot-scope="text, recored" @click="edit(recored)">
              <a>修改公表</a>
              <a-divider type="vertical" />
              <a>设定分摊</a>
            </span>
          </a-table>
        </a-row>
        <a-row type="flex" justify="center">
          <a-col style="font-size: 20px; font-weight: 700;">分摊公表的房间</a-col>
        </a-row>
        <a-row type="flex" justify="end">
          <a-col>
            <a-form-item
              :label="`选择分摊条件：${publicassessmentobj.recored.property}`"
              :labelCol="{span: 15}"
              :wrapperCol="{span: 9}"
            >
              <a-select style="width: 100px;" defaultValue="0">
                <a-select-option value="0">所有楼宇</a-select-option>
                <a-select-option value="1">1号楼</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item>
              <a-select style="width: 130px;" defaultValue="0">
                <a-select-option value="0">所有单元/楼层</a-select-option>
                <a-select-option value="1">1单元</a-select-option>
                <a-select-option value="2">2单元</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item>
              <a-checkbox @change="checkboxChange">只添加有住户的房间</a-checkbox>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item>
              <a-button type="primary">添加房间</a-button>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="end" class="title">
          <a-col class="fontstyle">当前公表：T02</a-col>
          <a-col>
            <a-button type="primary">删除所选房间</a-button>
          </a-col>
          <a-col>
            <a-button type="primary">删除全部房间</a-button>
          </a-col>
          <a-col>
            <a-button type="primary">关闭</a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-table
            :columns="columns2"
            :dataSource="data2"
            :rowSelection="rowSelection2"
            :scroll="{ y: 250 }"
            size="small"
          ></a-table>
        </a-row>
      </a-form>
      <template slot="footer">
        <a-button type="primary" icon="save" @click="save">保存</a-button>&nbsp;
        <a-button type="primary" icon="delete" @click="del">删除</a-button>&nbsp;
        <a-button type="primary" icon="close-square" @click="handleCancel">关闭</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import _ from 'lodash'
const columns = [
    {
        align: 'center',
        width: '7%',
        title: '编号',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.key - b.key
    },
    {
        align: 'center',
        title: '公表编码',
        dataIndex: 'public_table_coding'
    },
    {
        align: 'center',
        title: '费用名称',
        dataIndex: 'feename'
    },
    {
        align: 'center',
        title: '公表读数',
        dataIndex: 'public_table_count'
    },
    {
        align: 'center',
        title: '分摊方法',
        dataIndex: 'allocation_method'
    },
    {
        align: 'center',
        title: '状态',
        dataIndex: 'status'
    }
]
const columns2 = [
    {
        align: 'center',
        width: '7%',
        title: '编号',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.key - b.key
    },
    {
        align: 'center',
        title: '表号',
        dataIndex: 'table_number'
    },
    {
        align: 'center',
        title: '房产',
        dataIndex: 'estate'
    },
    {
        align: 'center',
        title: '业主姓名',
        dataIndex: 'owner_name'
    },
    {
        align: 'center',
        title: '已售',
        dataIndex: 'sold'
    },
    {
        align: 'center',
        title: '已租',
        dataIndex: 'rented'
    }
]
const data2 = []
for (let i = 0; i < 200; i++) {
    data2.push({
        key: i,
        table_number: 'T01',
        estate: 'A01B-1U-1101',
        owner_name: '大乔',
        sold: _.sample(['是', '否'], 1),
        rented: _.sample(['是', '否'], 1)
    })
}
const data = []
for (let i = 0; i < 200; i++) {
    data.push({
        key: i,
        public_table_coding: 'P01',
        feename: _.sample(['卫生费(公摊)', '电费(公摊)', '税费(公摊)'], 1),
        public_table_count: _.random(1, 1000),
        allocation_method: _.sample(['按住户', '按面积'], 1),
        status: _.sample(['正常', '欠费'], 1)
    })
}
export default {
    data() {
        return {
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 18 }, sm: { span: 18 } },
            form: this.$form.createForm(this),
            columns,
            data,
            selectedRows: [],
            columns2,
            data2
        }
    },
    props: {
        publicassessmentobj: {
            type: Object,
            default: () => {
                return {
                    visible: false
                }
            }
        }
    },
    computed: {
        rowSelection() {
            return {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                },
                onSelect: (record, selected, selectedRows) => {
                    console.log(record, selected, selectedRows)
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.selectedRows = selectedRows
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.selectedRows = selectedRows
                    console.log(selected, selectedRows, changeRows)
                }
            }
        },
        rowSelection2() {
            return {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                },
                onSelect: (record, selected, selectedRows) => {
                    console.log(record, selected, selectedRows)
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.selectedRows = selectedRows
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.selectedRows = selectedRows
                    console.log(selected, selectedRows, changeRows)
                }
            }
        }
    },
    methods: {
        save() {},
        del() {},
        handleCancel() {
            this.publicassessmentobj.visible = false
            this.publicassessmentobj.recored = ''
        },
        checkboxChange(value) {
            console.log(value)
        }
    }
}
</script>

<style lang='less' scoped>
.setting button {
    margin: 10px 0 10px 10px;
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
.title {
    .ant-col {
        margin-left: 10px;
    }
    .fontstyle {
        font-size: 20px;
        font-weight: 700;
        color: red;
        line-height: 36px;
    }
}
/deep/ .ant-checkbox-group {
    width: 100%;
}
</style>
