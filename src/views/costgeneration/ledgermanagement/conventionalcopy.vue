<template>
  <a-row class="content">
    <a-form layout="inline" :form="form">
      <a-row type="flex" justify="space-between" class="form-row">
        <a-col :span="6">
          <a-form-item label="选择楼盘">
            <a-select
              v-decorator="['chooseestate', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            >
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="楼宇">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="单元/楼层">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="房间">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="form-row">
        <a-col :span="6">
          <a-form-item label="选择费项">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="查询日期自">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="查询日期至">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col class="setting mgt-10">
          <a-button type="primary" icon="search" class="mgl-10">查询</a-button>
          <a-button type="primary" icon="reload" class="mgl-10">重置</a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-table
          :columns="columns"
          :dataSource="data"
          @change="paginationChange"
          position="bottom"
          :pagination="pagination"
          :rowSelection="rowSelection"
          bordered
        >
          <a slot="property" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
        </a-table>
      </a-row>
    </a-form>
    <conventional-edit :conventionalObj="conventionalObj"></conventional-edit>
  </a-row>
</template>

<script>
import conventionalEdit from './conventionalcopy.dialog/edit'
const columns = [
    {
        width: '12%',
        align: 'center',
        dataIndex: 'property',
        key: 'property',
        title: '所属楼盘',
        scopedSlots: { customRender: 'property' }
    },
    {
        align: 'center',
        title: '台账名称',
        dataIndex: 'ledger_name',
        key: 'ledger_name'
    },
    {
        align: 'center',
        title: '费用名称',
        dataIndex: 'fee_name',
        key: 'fee_name'
    },
    {
        align: 'center',
        title: '生成人',
        dataIndex: 'generator',
        key: 'generator'
    },
    {
        align: 'center',
        title: '生成日期',
        dataIndex: 'generator_date',
        key: 'generator_date'
    },
    {
        width: '25%',
        align: 'center',
        title: '备注',
        dataIndex: 'remark',
        key: 'remark'
    }
]

const data = [
    {
        key: '1',
        property: '中东首座',
        ledger_name: 'A04-wy卫生费20120324',
        fee_name: '水费(普通按月)',
        generator: '系统管理员',
        generator_date: '2020-04-22',
        remark: 'remark'
    },
    {
        key: '2',
        property: '中东首座',
        ledger_name: 'A04-wy水费(普通按月)20120324',
        fee_name: '卫生费',
        generator: '物业企业版用户',
        generator_date: '2020-04-22',
        remark: 'remark'
    }
]
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
            conventionalObj: {
                visible: false
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
        edit(record) {
            this.conventionalObj.visible = true
            this.conventionalObj.ledger_name = record.ledger_name
        }
    },
    components: {
        conventionalEdit
    }
}
</script>

<style lang="less" scoped>
.form-row {
    /deep/.ant-form-item-label {
        width: 7em;
        text-align: right;
    }
    /deep/.ant-form-item-control-wrapper {
        width: 70%;
        /deep/.ant-calendar-picker {
            width: 100%;
        }
    }
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
    width: 90%;
}
.ant-col {
    line-height: 40px;
    height: 40px;
}
</style>
