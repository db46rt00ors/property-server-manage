<template>
  <div>
    <a-modal
      :title="`【
        ${contractpaymentarrearsobj.record === null ? '' : contractpaymentarrearsobj.record.property}车位服务费交款凭证
      】`"
      class="modal"
      width="70%"
      v-model="contractpaymentarrearsobj.visible"
      :closable="true"
      :destroyOnClose="true"
      okText="收取"
      @ok="handleOk"
    >
      <a-row>房产：中东首座1号楼1单元102室 合同编号：0007-20121223 收款日期：2020-05-11</a-row>
      <a-form :form="form" layout="inline">
        <a-table
          :columns="columns"
          :data-source="data"
          class="components-table-demo-nested"
          bordered
        >
          <a-table
            slot="expandedRowRender"
            :columns="innerColumns"
            :data-source="innerData"
            :pagination="false"
          >
            <span slot="this_billing_stage">
              自2014-01-01至
              <a-date-picker />
            </span>
            <span slot="this_receivable" class="dis-flex">
              ¥
              <a-input class="mgr-5 mgl-5" />元
            </span>
            <div slot="contract_lease" slot-scope="text">
              <p>{{ text.start }}</p>
              <p>{{ text.end }}</p>
            </div>
          </a-table>
        </a-table>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
const columns = [
    { align: 'center', title: '交款人', dataIndex: 'payer', key: 'payer' },
    { align: 'center', title: '车位编号', dataIndex: 'parking_space_number', key: 'parking_space_number' },
    { align: 'center', title: '车牌号', dataIndex: 'number_plate', key: 'number_plate' }
]

const data = [
    {
        key: 1,
        payer: '赵四',
        parking_space_number: '0007',
        number_plate: '京E·38749'
    }
]

const innerColumns = [
    {
        align: 'center',
        title: '本次计费阶段',
        key: 'this_billing_stage',
        scopedSlots: { customRender: 'this_billing_stage' }
    },
    { align: 'center', title: '服务费标准(元/月)', dataIndex: 'service_fee_standard', key: 'service_fee_standard' },
    { align: 'center', title: '当前欠缴(元)', dataIndex: 'current_arrears', key: 'current_arrears' },
    {
        align: 'center',
        title: '本次应收(元)',
        key: 'this_receivable',
        scopedSlots: { customRender: 'this_receivable' }
    },
    { align: 'center', title: '滞纳金(元)', dataIndex: 'late_fee', key: 'late_fee' },
    { align: 'center', title: '本次实收(元)', dataIndex: 'this_collection', key: 'this_collection' },
    {
        align: 'center',
        title: '合同租期',
        dataIndex: 'contract_lease',
        key: 'contract_lease',
        scopedSlots: { customRender: 'contract_lease' }
    }
]
const innerData = [
    {
        key: 1,
        service_fee_standard: '1000',
        current_arrears: '500',
        late_fee: '500',
        this_collection: '500',
        contract_lease: {
            start: '2013-01-01',
            end: '2013-12-31'
        }
    }
]
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: ['contractpaymentarrearsobj'],
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 12 },
            data,
            columns,
            innerColumns,
            innerData,
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
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        handleOk(e) {
            console.log('ok')
        },
        handleCancel(e) {
            console.log('Clicked cancel button')
            this.contractpaymentarrearsobj.visible = false
        }
    }
}
</script>
<style lang="less">
.modal {
    .ant-modal-title {
        text-align: center;
    }
    .ant-form-item {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .ant-input {
        width: 100px;
    }
    .ant-calendar-picker,
    .ant-calendar-picker-input {
        width: 150px;
    }
    .ant-table-row {
        line-height: 32px;
    }
}
</style>

<style lang="less" scoped>
</style>
