<template>
  <div>
    <a-modal
      :title="`【
        ${contractpaymentdetailobj.record === null ? '' : contractpaymentdetailobj.record.contract_no}
    】合同缴费明细  服务费合计:
        ${contractpaymentdetailobj.record === null ? '' : contractpaymentdetailobj.record.paid}
        (已缴:
        ${contractpaymentdetailobj.record === null ? '' : contractpaymentdetailobj.record.total_service_fee}
        欠费:
        ${contractpaymentdetailobj.record === null ? '' : contractpaymentdetailobj.record.paid - contractpaymentdetailobj.record.total_service_fee}
    )`"
      width="60%"
      v-model="contractpaymentdetailobj.visible"
      :closable="false"
    >
      <a-table
        :columns="columns"
        :dataSource="dataSource"
        @change="paginationChange"
        position="bottom"
        :pagination="pagination"
        bordered
      >
        <a slot="setting">打印</a>
      </a-table>
    </a-modal>
  </div>
</template>

<script>
const columns = [
    { width: '12%', align: 'center', dataIndex: 'payee', key: 'payee', title: '收款人' },
    { width: '12%', align: 'center', dataIndex: 'payment_date', key: 'payment_date', title: '收款日期' },
    { width: '10%', align: 'center', dataIndex: 'amount_receivable', key: 'amount_receivable', title: '应收金额' },
    { width: '10%', align: 'center', dataIndex: 'late_fee', key: 'late_fee', title: '滞纳金' },
    { width: '10%', align: 'center', dataIndex: 'amount_received', key: 'amount_received', title: '实收金额' },
    { width: '12%', align: 'center', dataIndex: 'payment_start_end', key: 'payment_start_end', title: '缴费起止' },
    { width: '12%', align: 'center', dataIndex: 'invoice_number', key: 'invoice_number', title: '发票号码' },
    { width: '12%', align: 'center', dataIndex: 'explanation', key: 'explanation', title: '说明' },
    {
        width: '12%',
        align: 'center',
        dataIndex: 'setting',
        key: 'setting',
        title: '操作',
        scopedSlots: { customRender: 'setting' }
    }
]
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: ['contractpaymentdetailobj'],
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 12 },
            columns,
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            }
        }
    },
    computed: {
        dataSource() {
            const self = this
            if (self.contractpaymentdetailobj.record === null) return
            const data = [
                {
                    key: '1',
                    payee: '物业标准版用户',
                    payment_date: self.contractpaymentdetailobj.record.signing_date,
                    amount_receivable: '2000.00',
                    late_fee: '20848.00',
                    amount_received: '22848.00',
                    payment_start_end:
                        self.contractpaymentdetailobj.record.lease_term.start +
                        ' ' +
                        self.contractpaymentdetailobj.record.lease_term.end,
                    invoice_number: '123134234',
                    explanation: '说明说明 说明 ',
                    setting: ''
                }
            ]
            return data
        },
        lease_month() {
            if (this.contractpaymentdetailobj.record === null) {
                return ''
            }
            var beginDate = new Date(this.contractpaymentdetailobj.record.lease_term.start)
            var endDate = new Date(this.contractpaymentdetailobj.record.lease_term.end)
            return (
                endDate.getFullYear() * 12 + endDate.getMonth() - (beginDate.getFullYear() * 12 + beginDate.getMonth())
            )
        }
    },
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    /deep/.ant-input {
        width: 100%;
    }
}
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>
