<template>
  <a-row class="content">
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="8" :xs="10">
          <a-form-item label="请选择楼盘">
            <a-cascader
              class="cascader"
              :options="options"
              @change="onCascaderChange"
              placeholder="Please select"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="6">
          <span class="color-red line-height-40">中东首座1号楼1单元101室</span> 已收款记录
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
          :scroll="{y: 400}"
        >
          <a slot="setting" slot-scope="text, record" @click="edit(record)">退款</a>
        </a-table>
      </a-row>
    </a-form>
    <documentRefund :documentrefundobj="documentrefundobj"></documentRefund>
  </a-row>
</template>

<script>
import documentRefund from './document.refund/refuned'
const options = [
    {
        value: '第一栋',
        label: '第一栋',
        children: [
            {
                value: '一单元',
                label: '一单元',
                children: [
                    {
                        value: '101',
                        label: '101'
                    },
                    {
                        value: '102',
                        label: '102'
                    }
                ]
            },
            {
                value: '二单元',
                label: '二单元',
                children: [
                    {
                        value: '101',
                        label: '101'
                    },
                    {
                        value: '102',
                        label: '102'
                    }
                ]
            }
        ]
    },
    {
        value: '第二栋',
        label: '第二栋',
        children: [
            {
                value: '一单元',
                label: '一单元',
                children: [
                    {
                        value: '101',
                        label: '101'
                    },
                    {
                        value: '102',
                        label: '102'
                    }
                ]
            },
            {
                value: '二单元',
                label: '二单元',
                children: [
                    {
                        value: '101',
                        label: '101'
                    },
                    {
                        value: '102',
                        label: '102'
                    }
                ]
            }
        ]
    }
]
const columns = [
    { width: '14%', align: 'center', title: '收款单号', dataIndex: 'receipt_number', key: 'receipt_number' },
    { align: 'center', title: '收款日期', dataIndex: 'payment_date', key: 'payment_date' },
    { align: 'center', title: '费用金额', dataIndex: 'expenses', key: 'expenses' },
    { align: 'center', title: '优惠金额', dataIndex: 'discounted_price', key: 'discounted_price' },
    { align: 'center', title: '收款金额', dataIndex: 'receiving_amount', key: 'receiving_amount' },
    { align: 'center', title: '收款方式', dataIndex: 'payment_method', key: 'payment_method' },
    { align: 'center', title: '收款人', dataIndex: 'payee', key: 'payee' },
    { align: 'center', title: '操作', dataIndex: 'setting', key: 'setting', scopedSlots: { customRender: 'setting' } }
]

const data = [
    {
        key: '1',
        property_name: '盈科大厦第1栋第1层101室',
        receipt_number: 'A01LS20050500001',
        payment_date: '2020-05-05',
        expenses: '4839.10',
        discounted_price: '0.00',
        receiving_amount: '4839.10',
        payment_method: '现金',
        payee: '物业标准版用户'
    },
    {
        key: '2',
        property_name: '中东首座1号楼1单元201室',
        receipt_number: 'A01LS20050500222',
        payment_date: '2015-05-15',
        expenses: '439.10',
        discounted_price: '1.00',
        receiving_amount: '489.10',
        payment_method: '现金',
        payee: '物业标准版用户'
    }
]
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            options,
            columns,
            data,
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            documentrefundobj: {
                visible: false,
                record: null
            },
            labelCol: { span: 8 },
            wrapperCol: { span: 16 }
        }
    },
    methods: {
        onCascaderChange(selectedKeys, info) {
            console.log(selectedKeys, info)
        },
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        edit(record) {
            this.documentrefundobj.visible = true
            this.documentrefundobj.record = record
        }
    },
    components: {
        documentRefund
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 90%;
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
