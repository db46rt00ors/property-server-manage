<template>
  <a-modal width="80%" v-model="conventionalObj.visible">
    <a-row slot="title">
      <a-col class="title">待复制台帐【{{ conventionalObj.ledger_name }}】明细信息</a-col>
    </a-row>
    <a-form :form="form">
      <a-row type="flex" justify="start" class="formitem">
        <a-col class="line-height-80">新台帐属性设定:</a-col>
        <a-col class="mgl-10">
          <a-row type="flex" justify="start" class="formitem">
            <a-col>
              <a-form-item label="新的台帐名称" class="dis-flex mgr-20">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col>
              <a-form-item label="新单价=原单价*" class="dis-flex mgr-20">
                <a-input />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-row type="flex" justify="start" class="formitem">
              <a-col>
                <a-form-item label="上次费用止期" class="dis-flex mgr-20">
                  <a-input />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="本次费用起期" class="dis-flex mgr-20">
                  <a-input />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="本次费用止期" class="dis-flex mgr-20">
                  <a-input />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="本次缴费限期" class="dis-flex">
                  <a-input />
                </a-form-item>
              </a-col>
              <a-col class="dis-flex">
                <a-form-item class="mgl-30">
                  <a-button type="primary">确定复制</a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-row>
        </a-col>
      </a-row>
      <a-row class="mgt-20">
        <a-table
          :columns="columns"
          :dataSource="data"
          @change="paginationChange"
          position="bottom"
          :pagination="pagination"
          :rowSelection="rowSelection"
          bordered
          :scroll="{x: 1800}"
        >
          <div slot="estate" slot-scope="text">{{ text }}</div>
        </a-table>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
const columns = [
    {
        align: 'center',
        width: '6%',
        title: '编号',
        dataIndex: 'key',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.key - b.key
    },
    { align: 'center', dataIndex: 'estate', key: 'estate', title: '房产', width: '15%' },
    { align: 'center', dataIndex: 'owner', key: 'owner', title: '业主', width: '6%' },
    { align: 'center', dataIndex: 'unit_of_charging', key: 'unit_of_charging', title: '计费单位', width: '8%' },
    { align: 'center', dataIndex: 'price', key: 'price', title: '单价', width: '8%' },
    { align: 'center', dataIndex: 'charging_cycle', key: 'charging_cycle', title: '收费周期', width: '8%' },
    { align: 'center', dataIndex: 'last_reading', key: 'last_reading', title: '上次读数', width: '8%' },
    { align: 'center', dataIndex: 'this_reading', key: 'this_reading', title: '本次读数', width: '8%' },
    { align: 'center', dataIndex: 'this_dosage', key: 'this_dosage', title: '本次用量', width: '8%' },
    { align: 'center', dataIndex: 'chargeable', key: 'chargeable', title: '应收费用', width: '8%' },
    { align: 'center', dataIndex: 'deadline_for_last_fee', key: 'deadline_for_last_fee', title: '上次费用止期', width: '10%' },
    { align: 'center', dataIndex: 'the_beginning_and_end_of_this_fee', key: 'the_beginning_and_end_of_this_fee', title: '本次费用起止', width: '10%' },
    { align: 'center', dataIndex: 'this_payment_deadline', key: 'this_payment_deadline', title: '本次缴费限期', width: '10%' },
    { align: 'center', dataIndex: 'received', key: 'received', title: '已收', width: '5%' },
    { align: 'center', dataIndex: 'cost_multiple', key: 'cost_multiple', title: '费用倍数', width: '5%' }
]
const data = [
    {
        key: '1',
        estate: '中东首座1号楼1单元202室',
        owner: '鲁子敬',
        unit_of_charging: '',
        price: '0.5200',
        charging_cycle: '1',
        last_reading: '0.00',
        this_reading: '100.00',
        this_dosage: '100.00',
        chargeable: '52.00',
        deadline_for_last_fee: '2012-10-01',
        the_beginning_and_end_of_this_fee: '2012-10-01 2012-10-15',
        this_payment_deadline: '2012-10-15',
        received: '否',
        cost_multiple: '1'
    },
    {
        key: '2',
        estate: '中东首座1号楼1单元202室',
        owner: '大乔',
        unit_of_charging: '',
        price: '0.5200',
        charging_cycle: '1',
        last_reading: '0.00',
        this_reading: '100.00',
        this_dosage: '100.00',
        chargeable: '52.00',
        deadline_for_last_fee: '2012-10-01',
        the_beginning_and_end_of_this_fee: '2012-10-01 2012-10-15',
        this_payment_deadline: '2012-10-15',
        received: '否',
        cost_multiple: '1'
    }
]
export default {
    props: {
        conventionalObj: {
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
            selectedRows: []
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
