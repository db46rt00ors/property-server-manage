<template>
  <a-row class="content">
    <a-row>
      <a-form>
        <a-row>
          <a-col :span="6" :offset="1">
            <a-form-item label="请选择楼盘" class="dis-flex" :wrapperCol="{span: 19}">
              <a-cascader
                class="cascader"
                :options="options"
                @change="onCascaderChange"
                placeholder="Please select"
              />
            </a-form-item>
          </a-col>
          <a-col :span="17" class="line-height-40 pdl-30">中东首座1号楼1单元101室 应交的费用明细</a-col>
        </a-row>
        <a-row type="flex" justify="start">
          <a-col :offset="1">
            <a-form-item label="费用起期自" class="dis-flex">
              <a-range-picker @change="onPickerChange" />
            </a-form-item>
          </a-col>
          <a-col class="mgl-5" style="width: 150px">
            <a-form-item class="dis-flex" :wrapperCol="{span: 24}">
              <a-select defaultValue="所有费项" @change="onSelectFeeChange">
                <a-select-option value="1">物业费(使用面积)</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col class="mgl-5">
            <a-form-item class="dis-flex">
              <a-button type="primary">查询</a-button>
            </a-form-item>
          </a-col>
          <a-col class="mgl-5 line-height-40">
            最新服务申请时间:
            <span>2016/12/1 15:58:31</span> 累计服务申请次数:
            <span>7</span>
          </a-col>
        </a-row>
        <a-row class="mgt-15">
          <a-table
            :columns="columns"
            :dataSource="data"
            @change="paginationChange"
            position="bottom"
            :pagination="pagination"
            :rowSelection="rowSelection"
            bordered
            :scroll="{x: 2200}"
          >
            <a slot="fee_reduction" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
          </a-table>
        </a-row>
      </a-form>
    </a-row>
    <conventionalcharge-edit :conventionalchargeObj="conventionalchargeObj"></conventionalcharge-edit>
  </a-row>
</template>

<script>
import conventionalchargeEdit from './conventionalcharge.dialog/edit'
const columns = [
    {
        width: '10%',
        align: 'center',
        dataIndex: 'fee_name',
        key: 'fee_name',
        title: '费项名称'
    },
    { align: 'center', title: '单价', dataIndex: 'price', key: 'price' },
    { align: 'center', title: '上次读数', dataIndex: 'last_reading', key: 'last_reading' },
    { align: 'center', title: '本次读数', dataIndex: 'this_reading', key: 'this_reading' },
    { align: 'center', title: '实际用量', dataIndex: 'the_actual_amount', key: 'the_actual_amount' },
    { align: 'center', title: '费用金额', dataIndex: 'expenses', key: 'expenses' },
    { align: 'center', title: '滞纳金', dataIndex: 'penalty', key: 'penalty' },
    { align: 'center', title: '本次应付', dataIndex: 'cope_with_this_time', key: 'cope_with_this_time', width: '6%' },
    {
        align: 'center',
        title: '费用减免',
        dataIndex: 'fee_reduction',
        key: 'fee_reduction',
        scopedSlots: { customRender: 'fee_reduction' }
    },
    { align: 'center', title: '超期', dataIndex: 'overdue', key: 'overdue' },
    { align: 'center', title: '费用起期', dataIndex: 'fee_inception', key: 'fee_inception', width: '6%' },
    { align: 'center', title: '费用止期', dataIndex: 'expiry_deadline', key: 'expiry_deadline', width: '6%' },
    { align: 'center', title: '缴费限期', dataIndex: 'payment_deadline', key: 'payment_deadline', width: '6%' },
    { align: 'center', title: '收费周期', dataIndex: 'charging_cycle', key: 'charging_cycle' },
    { align: 'center', title: '记录人', dataIndex: 'recorder', key: 'recorder', width: '8%' },
    { align: 'center', title: '楼层系数', dataIndex: 'floor_coefficient', key: 'floor_coefficient' },
    { align: 'center', title: '滞纳金减免', dataIndex: 'late_fee_reduction', key: 'late_fee_reduction', width: '6%' },
    { align: 'center', title: '费用倍数', dataIndex: 'cost_multiple', key: 'cost_multiple' }
]

const data = [
    {
        key: '1',
        fee_name: '水费(普通按月)',
        price: '30.00',
        last_reading: '0.00',
        this_reading: '0.00',
        the_actual_amount: '15.00',
        expenses: '400.00',
        penalty: '3000.00',
        cope_with_this_time: '3100.000',
        fee_reduction: '50.00',
        overdue: '1777',
        fee_inception: '2017-09-09',
        expiry_deadline: '2017-09-09',
        payment_deadline: '2017-09-09',
        charging_cycle: '1',
        recorder: '物业企业版用户',
        floor_coefficient: '0.00',
        late_fee_reduction: '0.00',
        cost_multiple: '1'
    }
]
export default {
    data() {
        return {
            data,
            columns,
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            selectedRows: [],
            options: [
                {
                    value: '中东首座',
                    label: '中东首座',
                    children: [
                        {
                            value: '一号楼',
                            label: '一号楼',
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
                            value: '二号楼',
                            label: '二号楼',
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
                }
            ],
            conventionalchargeObj: {
                visible: false,
                record: null
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
        onCascaderChange(selectedKeys, info) {
            console.log(selectedKeys, info)
        },
        onPickerChange(date, dateString) {
            console.log(date, dateString)
        },
        onSelectFeeChange(val) {
            console.log(val)
        },
        edit(record) {
            console.log(record)
            this.conventionalchargeObj.visible = true
            this.conventionalchargeObj.record = record
        }
    },
    components: {
      conventionalchargeEdit
    }
}
</script>

<style lang='less' scoped>
.content {
    .ant-form-item {
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
</style>
