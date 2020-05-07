<template>
  <a-modal width="80%" v-model="ledgerObj.visible">
    <a-row slot="title">
      <a-col :span="10" class="title">编辑 {{ ledgerObj.ledger_name }} 信息</a-col>
      <a-col :span="12">
        <a-form-item label="查找房间名称或业主姓名" class="dis-flex">
          <a-input type="text" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="9">
          <a-form-item label="检索条件" :labelCol="{span: 4}" :wrapperCol="{span: 20}">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="9">
          <span class="line-height-40">（提醒：只能修改或删除尚未执行收费的记录！）</span>
        </a-col>
        <a-col :span="6">
          <a-button>删除整个台账</a-button>
          <a-button class="mgl-10 mgr-10">导出</a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="上次使用止期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="本次使用起期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="本次使用止期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item>
            <a-button>更新</a-button>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="缴费期限">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="上次读数">
            <a-input />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="本次读数">
            <a-input />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item>
            <a-button>删除</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-row class="mgt-20">
      <a-table
        :columns="columns"
        :dataSource="data"
        @change="paginationChange"
        position="bottom"
        :pagination="pagination"
        :rowSelection="rowSelection"
        bordered
        :scroll="{ x: 2550 }"
      >
        <div slot="estate" slot-scope="text">
          <p>{{ text.name }}</p>
          <p>入住时间:{{ text.time }}</p>
        </div>
      </a-table>
    </a-row>
  </a-modal>
</template>

<script>
const columns = [
    {
        width: '10%',
        align: 'center',
        dataIndex: 'estate',
        key: 'estate',
        title: '房产',
        scopedSlots: { customRender: 'estate' }
    },
    {
        width: '10%',
        align: 'center',
        title: '业主',
        dataIndex: 'owner',
        key: 'owner'
    },
    {
        align: 'center',
        title: '计费单位',
        dataIndex: 'unit_of_charging',
        key: 'unit_of_charging'
    },
    {
        align: 'center',
        title: '单价',
        dataIndex: 'price',
        key: 'price'
    },
    {
        align: 'center',
        title: '收费周期',
        dataIndex: 'charging_cycle',
        key: 'charging_cycle'
    },
    {
        width: '5%',
        align: 'center',
        title: '上次读数',
        dataIndex: 'last_reading',
        key: 'last_reading'
    },
    {
        width: '5%',
        align: 'center',
        title: '本次读数',
        dataIndex: 'this_reading',
        key: 'this_reading'
    },
    {
        align: 'center',
        title: '本次用量',
        dataIndex: 'this_dosage',
        key: 'this_dosage'
    },
    {
        align: 'center',
        title: '应收费用',
        dataIndex: 'chargeable',
        key: 'chargeable'
    },
    {
        align: 'center',
        title: '减免费用',
        dataIndex: 'free_of_charge',
        key: 'free_of_charge'
    },
    {
        align: 'center',
        title: '应缴费用',
        dataIndex: 'fees_payable',
        key: 'fees_payable'
    },
    {
        width: '5%',
        align: 'center',
        title: '上次费用止期',
        dataIndex: 'deadline_for_last_fee',
        key: 'deadline_for_last_fee'
    },
    {
        align: 'center',
        title: '本次费用起止',
        dataIndex: 'beginning_end_of_this_fee',
        key: 'beginning_end_of_this_fee'
    },
    {
        width: '5%',
        align: 'center',
        title: '缴费限期',
        dataIndex: 'payment_deadline',
        key: 'payment_deadline'
    },
    {
        align: 'center',
        title: '已收',
        dataIndex: 'received',
        key: 'received'
    },
    {
        align: 'center',
        title: '费用倍数',
        dataIndex: 'cost_multiple',
        key: 'cost_multiple'
    }
]

const data = [
    {
        key: '1',
        estate: {
            name: '菜批市场1号楼1楼1E1101档口',
            time: '2020-01-01'
        },
        owner: 'A04-wy卫生费20120324',
        unit_of_charging: '水费(普通按月)',
        price: '0.7140',
        charging_cycle: '22',
        last_reading: '0.00',
        this_reading: '500.00',
        this_dosage: '500.00',
        chargeable: '357.00',
        free_of_charge: '0.00',
        fees_payable: '357.00',
        deadline_for_last_fee: '2012-03-01',
        beginning_end_of_this_fee: '2012-03-01 2012-03-31',
        payment_deadline: '2012-03-31',
        received: '是',
        cost_multiple: '1'
    },
    {
        key: '2',
        estate: {
            name: '菜批市场1号楼1楼1E1102档口',
            time: '2019-01-01'
        },
        owner: 'A04-wy卫生费20120324',
        unit_of_charging: '电费(普通按月)',
        price: '0.7140',
        charging_cycle: '22',
        last_reading: '0.00',
        this_reading: '500.00',
        this_dosage: '500.00',
        chargeable: '357.00',
        free_of_charge: '0.00',
        fees_payable: '357.00',
        deadline_for_last_fee: '2012-03-01',
        beginning_end_of_this_fee: '2012-03-01 2012-03-31',
        payment_deadline: '2012-03-31',
        received: '否',
        cost_multiple: '1'
    }
]
export default {
    props: {
        ledgerObj: {
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
        }
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    /deep/.ant-calendar-picker {
        width: 100%;
    }
}
.title {
    line-height: 40px;
}
</style>
