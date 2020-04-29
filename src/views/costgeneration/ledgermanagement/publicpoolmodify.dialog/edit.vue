<template>
  <a-modal width="80%" v-model="publicObj.visible">
    <a-row slot="title">
      <a-col class="title">编辑【{{ publicObj.ledger_name }}】台账明细</a-col>
    </a-row>
    <a-form :form="form">
      <a-row type="flex" justify="start" class="formitem">
        <a-col :span="6">
          <a-form-item
            label="上次费用止期"
            class="dis-flex"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 14}"
          >
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            label="本次费用起期"
            class="dis-flex"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 14}"
          >
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            label="本次费用止期"
            class="dis-flex"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 14}"
          >
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            label="本次缴费限期"
            class="dis-flex"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 14}"
          >
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col class="setting mgt-10">
          <a-button type="primary" icon="search" class="mgl-10">查询</a-button>
          <a-button type="primary" icon="reload" class="mgl-10">重置</a-button>
          <a-button type="primary" icon="delete" class="mgl-10">删除</a-button>
        </a-col>
      </a-row>
      <a-row class="mgt-20">
        <a-table
          :columns="columns1"
          :dataSource="data1"
          @change="paginationChange1"
          position="bottom"
          :pagination="pagination1"
          :rowSelection="rowSelection1"
          bordered
        >
          <div slot="estate" slot-scope="text">{{ text }}</div>
        </a-table>
      </a-row>
      <a-row type="flex" justify="start" class="formitem">
        <a-col :span="6">
          <a-form-item label="检索条件" class="dis-flex" :labelCol="{span: 8}" :wrapperCol="{span: 14}">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            label="本次分摊量"
            class="dis-flex"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 14}"
          >
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="应收金额" class="dis-flex" :labelCol="{span: 8}" :wrapperCol="{span: 14}">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col class="setting mgt-10">
          <a-button type="primary" icon="search" class="mgl-10">查询</a-button>
          <a-button type="primary" icon="reload" class="mgl-10">重置</a-button>
          <a-button type="primary" icon="delete" class="mgl-10">删除</a-button>
        </a-col>
      </a-row>
      <a-row class="mgt-20">
        <a-table
          :columns="columns2"
          :dataSource="data2"
          @change="paginationChange2"
          position="bottom"
          :pagination="pagination2"
          :rowSelection="rowSelection2"
          bordered
        >
          <div slot="estate" slot-scope="text">{{ text }}</div>
        </a-table>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
const columns1 = [
    {
        align: 'center',
        width: '6%',
        title: '编号',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.key - b.key
    },
    { align: 'center', dataIndex: 'published_name', key: 'published_name', title: '公表名称', width: '10%' },
    {
        align: 'center',
        dataIndex: 'number_of_shared_households',
        key: 'number_of_shared_households',
        title: '分摊户数',
        width: '10%'
    },
    { align: 'center', dataIndex: 'last_reading', key: 'last_reading', title: '上次读数', width: '8%' },
    { align: 'center', dataIndex: 'this_reading', key: 'this_reading', title: '本次读数', width: '8%' },
    { align: 'center', dataIndex: 'this_dosage', key: 'this_dosage', title: '本次用量', width: '8%' },
    { align: 'center', dataIndex: 'due', key: 'due', title: '应交费用', width: '8%' },
    {
        align: 'center',
        dataIndex: 'deadline_for_last_fee',
        key: 'deadline_for_last_fee',
        title: '上次费用止期',
        width: '10%'
    },
    {
        align: 'center',
        dataIndex: 'the_beginning_of_this_fee',
        key: 'the_beginning_of_this_fee',
        title: '本次费用起期',
        width: '10%'
    },
    {
        align: 'center',
        dataIndex: 'deadline_for_this_fee',
        key: 'deadline_for_this_fee',
        title: '本次费用止期',
        width: '10%'
    },
    {
        align: 'center',
        dataIndex: 'this_payment_deadline',
        key: 'this_payment_deadline',
        title: '本次缴费限期',
        width: '10%'
    }
]
const columns2 = [
    {
        align: 'center',
        width: '6%',
        title: '编号',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.key - b.key
    },
    { align: 'center', dataIndex: 'estate', key: 'estate', title: '房产', width: '20%' },
    { align: 'center', dataIndex: 'owner', key: 'owner', title: '业主姓名', width: '8%' },
    { align: 'center', dataIndex: 'check_in_date', key: 'check_in_date', title: '入住日期', width: '8%' },
    { align: 'center', dataIndex: 'table_number', key: 'table_number', title: '表编号', width: '8%' },
    { align: 'center', dataIndex: 'amount_receivable', key: 'amount_receivable', title: '应收金额', width: '8%' },
    { align: 'center', dataIndex: 'relief_amount', key: 'relief_amount', title: '减免金额', width: '8%' },
    { align: 'center', dataIndex: 'apportioned_amount', key: 'apportioned_amount', title: '分摊金额', width: '8%' },
    { align: 'center', dataIndex: 'this_assessment', key: 'this_assessment', title: '本次分摊量', width: '8%' },
    {
        align: 'center',
        dataIndex: 'this_payment_deadline',
        key: 'this_payment_deadline',
        title: '本次缴费限期',
        width: '10%'
    },
    { align: 'center', dataIndex: 'received', key: 'received', title: '已收', width: '5%' }
]
const data1 = [
    {
        key: '1',
        published_name: 'P11',
        number_of_shared_households: '5',
        last_reading: '1000.00',
        this_reading: '2000.00',
        this_dosage: '1000.00',
        due: '548.00',
        deadline_for_last_fee: '2018-02-28',
        the_beginning_of_this_fee: '2018-04-01',
        deadline_for_this_fee: '2018-04-30',
        this_payment_deadline: '2018-04-30'
    }
]
const data2 = [
    {
        key: '1',
        estate: '中东首座1号楼1单元101室',
        owner: '赵云',
        check_in_date: '2010-01-01',
        table_number: 'P12',
        amount_receivable: '109.60',
        relief_amount: '0.00',
        apportioned_amount: '109.60',
        this_assessment: '195.00',
        this_payment_deadline: '2020-04-30',
        received: '是'
    },
    {
        key: '2',
        estate: '中东首座1号楼1单元103室',
        owner: '大乔',
        check_in_date: '2010-01-01',
        table_number: 'P12',
        amount_receivable: '109.60',
        relief_amount: '0.00',
        apportioned_amount: '109.60',
        this_assessment: '195.00',
        this_payment_deadline: '2020-04-30',
        received: '是'
    }
]
export default {
    props: {
        publicObj: {
            type: Object,
            default: () => {
                return {
                    visible: false
                }
            }
        }
    },
    data() {
        return {
            form: this.$form.createForm(this),
            pagination1: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },

            pagination2: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            data1,
            data2,
            columns1,
            columns2,
            selectedRows1: [],
            selectedRows2: []
        }
    },
    computed: {
        rowSelection1() {
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
        },
        rowSelection2() {
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
        paginationChange1(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        paginationChange2(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        }
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
}
.formitem {
    /deep/.ant-input {
        width: 171px;
    }
}
.title {
    line-height: 40px;
}
</style>
