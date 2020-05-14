<template>
  <a-row class="content">
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
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
      <a-row>
        <a-col :span="6">
          <a-form-item label="费用起期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用止期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="当前房间">
            <a-input disabled></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="当前业主">
            <a-input disabled></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="选择费项">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="单价">
            <a-input></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="数量">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用金额">
            <a-input></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="mgt-10 mgb-10">
        <a-col class="setting left">
          <a-button type="primary" icon="plus-circle" class="mgl-10">添加</a-button>
          <a-button type="primary" icon="delete" class="mgl-10">删除</a-button>
        </a-col>
        <a-col class="right mgr-30">
          <a-input class="mgr-20" placeholder="请输入房间名称"></a-input>
          <a-button type="primary">定位房间</a-button>
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
          :scroll="{y: 400}"
        ></a-table>
      </a-row>
      <a-row type="flex" justify="start" class="form-row payment">
        <a-col :span="6">
          <a-form-item label="应收金额">
            <a-input
              disabled
              v-decorator="['amount_receivable', {
                initialValue: '99'
              }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="实收金额">
            <a-input
              disabled
              v-decorator="['amount_received', {
                initialValue: '909'
              }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="预收款余额">
            <a-input
              disabled
              v-decorator="['advance_payment_balance', {
                initialValue: '999'
              }]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row type="flex" justify="start">
        <a-col :span="6">
          <a-form-item label="收款方式">
            <a-select v-decorator="['payment_method']">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收据号">
            <a-input
              disabled
              v-decorator="['amount_received', {
                initialValue: '系统生成'
              }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="发票号">
            <a-input v-decorator="['receipt_number']" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="备注">
            <a-input v-decorator="['remark']" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-row>
</template>

<script>
const columns = [
    {
        align: 'center',
        title: '费用名称',
        dataIndex: 'fee_name',
        key: 'fee_name'
    },
    {
        align: 'center',
        title: '单价',
        dataIndex: 'price',
        key: 'price'
    },
    {
        align: 'center',
        title: '数量',
        dataIndex: 'count',
        key: 'count'
    },
    {
        align: 'center',
        title: '费用金额',
        dataIndex: 'expenses',
        key: 'expenses'
    },
    {
        align: 'center',
        title: '费用起期',
        dataIndex: 'fee_inception',
        key: 'fee_inception'
    },
    {
        align: 'center',
        title: '费用止期',
        dataIndex: 'expiry_deadline',
        key: 'expiry_deadline'
    },
    {
        align: 'center',
        title: '记录人',
        dataIndex: 'recorder',
        key: 'recorder'
    }
]

const data = [
    {
        key: '1',
        fee_name: '水费(普通按月)',
        price: '0.48',
        count: '208',
        expenses: '99',
        fee_inception: '2020-03-03',
        expiry_deadline: '2020-03-09',
        recorder: '物业人员'
    },
    {
        key: '2',
        fee_name: '水费(普通按月)',
        price: '0.48',
        count: '208',
        expenses: '99',
        fee_inception: '2020-03-03',
        expiry_deadline: '2020-03-09',
        recorder: '物业人员'
    },
    {
        key: '3',
        fee_name: '水费(普通按月)',
        price: '0.48',
        count: '208',
        expenses: '99',
        fee_inception: '2020-03-03',
        expiry_deadline: '2020-03-09',
        recorder: '物业人员'
    },
    {
        key: '4',
        fee_name: '水费(普通按月)',
        price: '0.48',
        count: '208',
        expenses: '99',
        fee_inception: '2020-03-03',
        expiry_deadline: '2020-03-09',
        recorder: '物业人员'
    },
    {
        key: '5',
        fee_name: '水费(普通按月)',
        price: '0.48',
        count: '208',
        expenses: '99',
        fee_inception: '2020-03-03',
        expiry_deadline: '2020-03-09',
        recorder: '物业人员'
    },
    {
        key: '6',
        fee_name: '水费(普通按月)',
        price: '0.48',
        count: '208',
        expenses: '99',
        fee_inception: '2020-03-03',
        expiry_deadline: '2020-03-09',
        recorder: '物业人员'
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
            labelCol: { span: 8 },
            wrapperCol: { span: 14 }
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
            this.conventionalchargeObj.visible = true
            this.conventionalchargeObj.ledger_name = record.ledger_name
        }
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
.ant-col {
    line-height: 40px;
    height: 40px;
}
.content {
    /deep/.ant-calendar-picker {
        width: 100%;
    }
}
.payment {
    /deep/ input {
        border: none;
        background: #fff;
        color: #333;
    }
}
.left {
    float: left;
}
.right {
    float: right;
    input {
        width: 150px;
    }
}
</style>
