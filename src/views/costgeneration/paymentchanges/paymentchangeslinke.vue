<template>
  <a-row class="content">
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="6">
          <a-form-item label="选择楼盘">
            <a-select v-decorator="['chooseestate']">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收款单号">
            <a-input v-decorator="['receipt_single_number']" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收款人">
            <a-input v-decorator="['payee']" />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收款方式">
            <a-select v-decorator="['payment_method']">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="备注">
            <a-input v-decorator="['remark']" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="收款日期自-至" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
            <a-range-picker v-decorator="['payment_date']" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="mgt-10 mgb-10">
        <a-col class="setting left">
          <a-button type="primary" icon="search" class="mgl-10" @click="search">查询</a-button>
          <a-button type="primary" icon="redo" class="mgl-10">重置</a-button>
        </a-col>
        <a-col class="right mgr-50">
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
          :scroll="{x: 2000, y: 400}"
        >
          <a slot="receipt_single_number" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
        </a-table>
      </a-row>
    </a-form>
    <paymentchanges-link-edit :paymentchangesobj="paymentchangesobj"></paymentchanges-link-edit>
  </a-row>
</template>

<script>
import _ from 'lodash'
import mockjs2 from 'mockjs2'
import paymentchangesLinkEdit from './paymentchanges.link.edit/edit.vue'
const columns = [
    {
        align: 'center',
        width: '8%',
        title: '收款单号',
        dataIndex: 'receipt_single_number',
        key: 'receipt_single_number',
        scopedSlots: { customRender: 'receipt_single_number' }
    },
    { align: 'center', title: '收款日期', dataIndex: 'payment_date', key: 'payment_date' },
    { align: 'center', width: '13%', title: '房产名称', dataIndex: 'property_name', key: 'property_name' },
    { align: 'center', title: '临客姓名', dataIndex: 'linke_name', key: 'linke_name' },
    { align: 'center', title: '费项名称', dataIndex: 'fee_name', key: 'fee_name' },
    { align: 'center', title: '收费金额', dataIndex: 'receiving_amount', key: 'receiving_amount' },
    { align: 'center', title: '收款方式', dataIndex: 'payment_method', key: 'payment_method' },
    { align: 'center', title: '收据号', dataIndex: 'receipt_number', key: 'receipt_number' },
    { align: 'center', title: '发票号', dataIndex: 'invoice_number', key: 'invoice_number' },
    { align: 'center', title: '备注', dataIndex: 'remark', key: 'remark' },
    { align: 'center', title: '收款人', dataIndex: 'payee', key: 'payee' }
]

const data = []

for (let i = 0; i < 200; i++) {
    data.push({
        key: i,
        receipt_single_number: _.random(100000, 999999),
        payment_date: mockjs2.Random.date('yyyy-MM-dd'),
        property_name: '中东首座1号楼1单元103室',
        linke_name: mockjs2.Random.cname(),
        fee_name: '罚款',
        receiving_amount: _.random(1000, 9999),
        payment_method: _.sample(['现金', '刷卡', '支票']),
        receipt_number: _.sample(['sj20120011', '131213002204', 'ZDSZ00008', 'Z20151201002']),
        invoice_number: '发票号' + i,
        remark: '无',
        payee: 'pms'
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
            paymentchangesobj: {
                visible: false,
                record: null
            },
            labelCol: { span: 8 },
            wrapperCol: { span: 12 }
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
        onChangePicker(date, dateString) {
            console.log(date, dateString)
        },
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        edit(record) {
            this.paymentchangesobj.visible = true
            this.paymentchangesobj.record = record
        },
        search(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values)
                }
            })
        }
    },
    components: {
        paymentchangesLinkEdit
    }
}
</script>

<style scoped lang="less">
.content {
    /deep/.ant-calendar-picker {
            width: 100%;
        }
    .ant-form-item {
        margin-top: 0px;
        margin-bottom: 0px;
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
}
</style>
