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
          <a-form-item label="选择费项">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="是否收费">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="台帐日期自">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="台帐日期至">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="费用起期自">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用起期至">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用止期自">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用止期至">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="业主姓名">
            <a-input />
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
      <a-row>
        <a-table
          :columns="columns"
          :dataSource="data"
          @change="paginationChange"
          position="bottom"
          :pagination="pagination"
          :rowSelection="rowSelection"
          :scroll="{ x: 2550 }"
        >
          <div slot="estate" slot-scope="text">
            <p>{{ text.name }}</p>
            <p>入住时间:{{ text.time }}</p>
          </div>
        </a-table>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="上次费用止期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="本次费用起期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="本次费用止期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="缴费限期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="上次读数">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="本次读数">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="应收费用">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="减免费用">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="mgt-20">
        <a-col :span="6">
          <a-button icon="reload" type="primary">更新</a-button>
        </a-col>
      </a-row>
    </a-form>
  </a-row>
</template>

<script>
const columns = [
    {
        width: '12%',
        align: 'center',
        dataIndex: 'estate',
        key: 'estate',
        title: '房产',
        scopedSlots: { customRender: 'estate' }
    },
    {
        align: 'center',
        title: '业主',
        dataIndex: 'owner',
        key: 'owner'
    },
    {
        align: 'center',
        title: '费用名称',
        dataIndex: 'fee_name',
        key: 'fee_name'
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
        align: 'center',
        title: '上次读数',
        dataIndex: 'last_reading',
        key: 'last_reading'
    },
    {
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
        align: 'center',
        title: '上次费用起止',
        dataIndex: 'last_cost_start_and_end',
        key: 'last_cost_start_and_end'
    },
    {
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
        width: '10%',
        align: 'center',
        title: '台账名称',
        dataIndex: 'ledger_name',
        key: 'ledger_name'
    },
    {
        align: 'center',
        title: '生成日期',
        dataIndex: 'generation_date',
        key: 'generation_date'
    },
    {
        width: '5%',
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
        owner: '小乔',
        fee_name: '车库管理费',
        unit_of_charging: '15.00',
        price: '30.00',
        charging_cycle: '1',
        last_reading: '0.00',
        this_reading: '0.00',
        this_dosage: '0.00',
        chargeable: '450.00',
        free_of_charge: '0.00',
        fees_payable: '450.00',
        last_cost_start_and_end: '2015-08-18',
        payment_deadline: '2012-03-01 2012-03-31',
        received: '是',
        ledger_name: '批量生成wy车库管理费中东首座1号楼-201501',
        generation_date: '2020-04-09',
        cost_multiple: '12'
    },
    {
        key: '2',
        estate: {
            name: '菜批市场1号楼1楼1E1101档口',
            time: '2020-04-01'
        },
        owner: '大乔',
        fee_name: '车库管理费',
        unit_of_charging: '15.00',
        price: '30.00',
        charging_cycle: '1',
        last_reading: '0.00',
        this_reading: '0.00',
        this_dosage: '0.00',
        chargeable: '450.00',
        free_of_charge: '0.00',
        fees_payable: '450.00',
        last_cost_start_and_end: '2015-08-18',
        payment_deadline: '2012-03-01 2012-03-31',
        received: '是',
        ledger_name: '批量生成wy车库管理费中东首座1号楼-201501',
        generation_date: '2020-04-09',
        cost_multiple: '12'
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
            wrapperCol: { span: 16 }
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
    margin-top: 5px;
    margin-bottom: 0px;
    width: 90%;
}
.ant-col {
    line-height: 40px;
    height: 40px;
}
.content {
  padding-top: 0;
    /deep/.ant-calendar-picker {
        width: 100%;
    }
}
</style>
