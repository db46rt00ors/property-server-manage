<template>
  <a-row class="content">
    <a-table
      :columns="columns"
      :dataSource="data"
      @change="paginationChange"
      position="bottom"
      :pagination="pagination"
      bordered
      :scroll="{ y: 400}"
    >
      <a slot="property_code" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
    </a-table>
    <penalty-edit :penaltyobj="penaltyobj"></penalty-edit>
  </a-row>
</template>

<script>
import penaltyEdit from './penalty.edit/edit'
const columns = [
    {
        width: '5%',
        align: 'center',
        title: '编号',
        dataIndex: 'key',
        key: 'key'
    },
    {
        align: 'center',
        width: '8%',
        title: '楼盘编码',
        dataIndex: 'property_code',
        key: 'property_code',
        scopedSlots: { customRender: 'property_code' }
    },
    { align: 'center', width: '26%', title: '楼盘名称', dataIndex: 'property_name', key: 'property_name' },
    { align: 'center', title: '车位滞纳金比率(‰)', dataIndex: 'parking_fee_ratio', key: 'parking_fee_ratio' },
    { align: 'center', title: '超期日期(天)', dataIndex: 'expiry_date', key: 'expiry_date' }
]

const data = [
    {
        key: '1',
        property_code: 'A01',
        property_name: '中东首座',
        parking_fee_ratio: '2.00',
        expiry_date: '15'
    },
    {
        key: '2',
        property_code: 'B01',
        property_name: '盈科首座',
        parking_fee_ratio: '6.00',
        expiry_date: '30'
    }
]
export default {
    data() {
        return {
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
            penaltyobj: {
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
            this.penaltyobj.visible = true
            this.penaltyobj.record = record
        }
    },
    components: {
        penaltyEdit
    }
}
</script>

<style lang="less" scoped>
.content {
    .ant-form-item {
        margin-bottom: 0px;
    }
}
</style>
