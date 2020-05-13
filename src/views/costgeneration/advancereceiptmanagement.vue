<template>
  <a-row class="content">
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="8">
          <a-form-item label="请选择楼盘">
            <a-cascader
              class="cascader"
              :options="options"
              @change="onCascaderChange"
              placeholder="Please select"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">中东首座1号楼1单元101室 余额：7032.52元</a-col>
        <a-col :span="8">
          <a-form-item>
            <a-button type="primary" class="mgr-10">收款</a-button>
            <a-button type="primary" class="mgr-10">支取</a-button>
            <a-button type="primary" class="mgr-10">删除</a-button>
            <a-button type="primary">导出</a-button>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="mgt-20">
        <a-table
          :columns="columns"
          :dataSource="data"
          @change="paginationChange"
          position="bottom"
          :pagination="pagination"
          bordered
          :scroll="{y: 400}"
        >
          <span slot="data_sources" slot-scope="data_sources">
            <a-tag :color="data_sources === '手工录入' ? 'volcano':'geekblue'">{{ data_sources }}</a-tag>
          </span>
          <a slot="voucher_number" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
        </a-table>
      </a-row>
    </a-form>
    <advancereceipt-edit :advancereceiptobj="advancereceiptobj"></advancereceipt-edit>
  </a-row>
</template>

<script>
import advancereceiptEdit from './advancereceipt.edit/edit'
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
    { width: '14%', align: 'center', title: '操作日期', dataIndex: 'operation_date', key: 'operation_date' },
    {
        align: 'center',
        title: '凭证号',
        dataIndex: 'voucher_number',
        key: 'voucher_number',
        scopedSlots: { customRender: 'voucher_number' }
    },
    { align: 'center', title: '业主姓名', dataIndex: 'ownername', key: 'ownername' },
    { align: 'center', title: '摘要', dataIndex: 'summary', key: 'summary' },
    { align: 'center', title: '收款方式', dataIndex: 'payment_method', key: 'payment_method' },
    { align: 'center', title: '金额', dataIndex: 'amount', key: 'amount' },
    { align: 'center', title: '经手人', dataIndex: 'dealer', key: 'dealer' },
    { align: 'center', title: '录入人', dataIndex: 'entrant', key: 'entrant' },
    {
        align: 'center',
        title: '数据来源',
        dataIndex: 'data_sources',
        key: 'data_sources',
        scopedSlots: { customRender: 'data_sources' }
    }
]
const data = [
    {
        key: '1',
        property_name: '中东首座1号楼1单元101室',
        operation_date: '2011-11-03',
        voucher_number: '1101002',
        ownername: '赵云',
        summary: '退回物业费转预收款',
        payment_method: '现金',
        amount: '72.00',
        dealer: '关兴',
        entrant: '系统管理员',
        data_sources: '手工录入'
    },
    {
        key: '2',
        property_name: 'XX首座1号楼1单元103室',
        operation_date: '2011-11-03',
        voucher_number: '1106666666666',
        ownername: '赵云',
        summary: '退回物业费转预收款',
        payment_method: '银行卡',
        amount: '72.00',
        dealer: '关兴',
        entrant: '系统管理员',
        data_sources: '系统生成'
    }
]
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            options,
            columns,
            data,
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            advancereceiptobj: {
                visible: false,
                record: null
            }
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
            this.advancereceiptobj.visible = true
            this.advancereceiptobj.record = record
        }
    },
    components: {
      advancereceiptEdit
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
