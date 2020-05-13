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
          <a-form-item label="合同编号">
            <a-input />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="车位编号">
            <a-input />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="车牌号码">
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="签订日期(自)">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="签订日期(至)">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="合同状态">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="setting mgt-10 mgb-10">
        <a-col>
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
          bordered
        >
          <div slot="payment_operation" slot-scope="text, record">
            <a @click="validHandle(record)">查看</a>
          </div>
          <a slot="contract_no" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
          <div slot="lease_term" slot-scope="text">
            <p>{{ text.start }}</p>
            <p>{{ text.end }}</p>
          </div>
        </a-table>
      </a-row>
    </a-form>
    <paymentinvalid-edit :paymentinvalideditobj="paymentinvalideditobj"></paymentinvalid-edit>
    <paymentinvalid-valid :paymentinvalidvalidobj="paymentinvalidvalidobj"></paymentinvalid-valid>
  </a-row>
</template>

<script>
import paymentinvalidEdit from './paymentinvalid.valid/edit'
import paymentinvalidValid from './paymentinvalid.valid/valid'
const columns = [
    {
        width: '18%',
        align: 'center',
        dataIndex: 'payment_operation',
        key: 'payment_operation',
        title: '缴费操作',
        scopedSlots: { customRender: 'payment_operation' }
    },
    { align: 'center', title: '房产', dataIndex: 'estate', key: 'estate' },
    {
        align: 'center',
        title: '合同编号',
        dataIndex: 'contract_no',
        key: 'contract_no',
        scopedSlots: { customRender: 'contract_no' }
    },
    { align: 'center', title: '车位编号', dataIndex: 'parking_space_number', key: 'parking_space_number' },
    { align: 'center', title: '使用人', dataIndex: 'user', key: 'user' },
    {
        align: 'center',
        title: '租期',
        dataIndex: 'lease_term',
        key: 'lease_term',
        scopedSlots: { customRender: 'lease_term' }
    },
    { align: 'center', title: '状态', dataIndex: 'status', key: 'status' },
    { align: 'center', title: '车牌号码', dataIndex: 'license_plate_number', key: 'license_plate_number' },
    { align: 'center', title: '停车证号', dataIndex: 'parking_permit_number', key: 'parking_permit_number' }
]

const data = [
    {
        key: '1',
        property: '中东首座',
        estate: '中东首座1号楼1单元202室',
        contract_no: '0012-20181207',
        parking_space_number: '0012',
        user: '黄盖',
        lease_term: {
            start: '2018-07-01',
            end: '2019-12-01'
        },
        status: '已生效',
        signing_date: '2018-12-07',
        license_plate_number: '京A·3AT88',
        parking_permit_number: 'T2010',
        monthly_service_fee: '500',
        paid: '1000',
        total_service_fee: '1500',
        arrears: '-500',
        remark: '11111备注备注备注备注备注备注备注备注备注备注备注备注'
    },
    {
        key: '2',
        property: '中东首座',
        estate: '中东首座1号楼1单元202室',
        contract_no: '0012-20181207',
        parking_space_number: '0012',
        user: '赵云',
        lease_term: {
            start: '2008-07-01',
            end: '2019-02-01'
        },
        status: '未生效',
        signing_date: '2018-12-07',
        license_plate_number: '京B·3AT88',
        parking_permit_number: 'T2010',
        monthly_service_fee: '500',
        paid: '2000',
        total_service_fee: '1500',
        arrears: '500',
        remark: '2222222备注备注备注备注备注备注备注备注备注备注备注备注'
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
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
            paymentinvalideditobj: {
                visible: false,
                record: null
            },
            paymentinvalidvalidobj: {
                visible: false,
                record: null
            }
        }
    },
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        edit(record) {
            this.paymentinvalideditobj.visible = true
            this.paymentinvalideditobj.record = record
        },
        validHandle(record) {
            this.paymentinvalidvalidobj.visible = true
            this.paymentinvalidvalidobj.record = record
        }
    },
    components: {
        paymentinvalidEdit,
        paymentinvalidValid
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
</style>
