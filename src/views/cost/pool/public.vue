<template>
  <div>
    <a-row>
      <a-form :form="form" layout="inline">
        <a-form-item label="选择楼盘">
          <a-select placeholder="选择楼盘" class="select" @change="chooseestate">
            <a-select-option value="1">楼盘1</a-select-option>
            <a-select-option value="2">楼盘2</a-select-option>
            <a-select-option value="3">楼盘3</a-select-option>
            <a-select-option value="4">楼盘4</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-row>
    <a-row class="setting">
      <a-button type="primary" icon="plus-circle" @click="showAddModal">新增</a-button>
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
        <a slot="feename" slot-scope="text, recored" @click="edit(recored)">{{ text }}</a>
      </a-table>
    </a-row>
    <add-edit :publicobj="publicobj"></add-edit>
  </div>
</template>

<script>
import addEdit from './public.add.edit/add.edit'
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
        dataIndex: 'feename',
        scopedSlots: { customRender: 'feename' }
    },
    {
        align: 'center',
        title: '单价',
        dataIndex: 'price'
    },
    {
        align: 'center',
        title: '允许改价',
        dataIndex: 'pricechanges'
    },
    {
        align: 'center',
        title: '收费周期',
        dataIndex: 'chargingcycle'
    },
    {
        align: 'center',
        title: '滞纳金比率%',
        dataIndex: 'penalty'
    },
    {
        align: 'center',
        title: '超期天数',
        dataIndex: 'dayspastdue'
    },
    {
        align: 'center',
        title: '隐藏打印',
        dataIndex: 'hideprinting'
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
                '阁楼采暖费',
                '卫生费',
                '车位费',
                '停车管理费',
                '水电费',
                '物业费',
                '污水处理费',
                '车库管理费',
                '二次排污费',
                '电梯电费',
                '其他费用',
                '阶梯水费',
                '取暖费'
            ],
            1
        ),
        price: _.random(1, 1000),
        pricechanges: _.sample(['是', '否'], 1),
        chargingcycle: 1,
        penalty: 5,
        dayspastdue: 7,
        hideprinting: _.sample(['是', '否'], 1)
    })
}

export default {
    data() {
        return {
            publicobj: {
                visible: false,
                recored: null
            },
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
            selectedRows: []
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
        showAddModal() {
            this.publicobj.visible = true
            this.publicobj.recored = null
        },
        edit(recored) {
          this.publicobj.visible = true
          this.publicobj.recored = recored
          console.log(recored)
        },
        chooseestate(value) {
            console.log(value)
        }
    },
    components: {
        addEdit
    }
}
</script>

<style lang="less" scoped>
.select {
    width: 160px;
}
.retrievingcontent-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
/deep/ input,
/deep/ .ant-select-selection {
    border-radius: 4px;
}
.setting {
    margin: 10px 0;
}
</style>
