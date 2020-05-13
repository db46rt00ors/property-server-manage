<template>
  <div class="content">
    <a-row>
      <a-form :form="form" layout="inline">
        <a-form-item label="选择楼盘">
          <a-select
            style="width: 120px"
            @change="chooseestate"
            v-decorator="['chooseestate', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          >
            <a-select-option value="1">1</a-select-option>
            <a-select-option value="2">2</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-row>
    <a-row class="setting">
      <a-button type="primary" icon="reload">刷新</a-button>
    </a-row>
    <a-row>
      <a-table
        :columns="columns"
        :dataSource="data"
        @change="paginationChange"
        position="bottom"
        :pagination="pagination"
        :rowSelection="rowSelection"
        :scroll="{ y: 450 }"
      >
        <a slot="setting" slot-scope="text, recored" @click="edit(recored)">费用设置</a>
      </a-table>
    </a-row>
    <edit :publicassessmentobj="publicassessmentobj"></edit>
  </div>
</template>

<script>
import _ from 'lodash'
import edit from './publicassessment.edit/edit'
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
        title: '所属楼盘',
        dataIndex: 'property'
    },
    {
        align: 'center',
        title: '费项编号',
        dataIndex: 'feenumber',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.feenumber - b.feenumber
    },
    {
        align: 'center',
        title: '费项名称',
        dataIndex: 'feename'
    },
    {
        align: 'center',
        title: '单价',
        dataIndex: 'price'
    },
    {
        align: 'center',
        title: '操作',
        dataIndex: 'setting',
        scopedSlots: { customRender: 'setting' }
    }
]

const data = []
for (let i = 0; i < 200; i++) {
    data.push({
        key: i,
        property: '中东首座',
        feenumber: '0017',
        feename: _.sample(
            [
                '卫生费(公摊)',
                '电费(公摊)',
                '税费(公摊)'
            ],
            1
        ),
        price: _.random(1, 1000),
        chargingcycle: 1,
        hideprinting: _.sample(['是', '否'], 1)
    })
}
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            data,
            columns,
            selectedRows: [],
            publicassessmentobj: {
                visible: false,
                recored: ''
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
        }
    },
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        edit(recored) {
            this.publicassessmentobj.visible = true
            this.publicassessmentobj.recored = recored
            console.log(recored.feename)
        },
        chooseestate(value) {
            console.log(value)
        }
    },
    components: {
        edit
    }
}
</script>

<style scoped lang="less">
.content {
    max-height: 800px;
    .setting {
        margin: 10px 0;
    }
}
</style>
