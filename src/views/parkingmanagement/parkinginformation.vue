<template>
  <a-row class="content">
    <a-row>
      <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-col :span="6">
          <a-form-item label="选择楼盘">
            <a-select
              v-decorator="[
                'select_real_estate',
                {
                  rules: [{ required: true, message: 'Please input your note!' }]
                }
              ]"
            >
              <a-select-option value="zhongdong">中东首座</a-select-option>
              <a-select-option value="yingke">盈科大厦</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="车位编号">
            <a-input
              v-decorator="[
                'parking_number',
                {
                  rules: [{ required: true, message: 'Please input your note!' }]
                }
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="车位状态">
            <a-select
              v-decorator="[
                'parking_status',
                {
                  rules: [{ required: true, message: 'Please input your note!' }]
                }
              ]"
            >
              <a-select-option value="0">所有</a-select-option>
              <a-select-option value="1">已售</a-select-option>
              <a-select-option value="2">已租</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-form>
    </a-row>
    <a-row class="setting mgt-10 mgb-20">
      <a-col>
        <a-button type="primary" icon="search">查询</a-button>
        <a-button type="primary" icon="plus-circle" class="mgl-10" @click="showAddModal">新增</a-button>
      </a-col>
    </a-row>
    <a-row>
      <a-table
        :columns="columns"
        :dataSource="dataSource"
        @change="paginationChange"
        position="bottom"
        :pagination="pagination"
        bordered
        :scroll="{ y: 400}"
      >
        <a slot="parking_code" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
      </a-table>
    </a-row>
    <parkinginformation-edit :parkinginformationobj="parkinginformationobj"></parkinginformation-edit>
  </a-row>
</template>

<script>
import parkinginformationEdit from './parkinginformation.edit/edit'
const columns = [
    { width: '5%', align: 'center', title: '编号', dataIndex: 'key', key: 'key' },
    { width: '12%', align: 'center', title: '楼盘', dataIndex: 'property', key: 'property' },
    {
        align: 'center',
        width: '8%',
        title: '车位编码',
        dataIndex: 'parking_code',
        key: 'parking_code',
        scopedSlots: { customRender: 'parking_code' }
    },
    { align: 'center', title: '状态', dataIndex: 'status', key: 'status' },
    { align: 'center', title: '车位类别', dataIndex: 'parking_category', key: 'parking_category' },
    { align: 'center', title: '管理类别', dataIndex: 'management_category', key: 'management_category' },
    { align: 'center', title: '预售价格', dataIndex: 'pre_sale_price', key: 'pre_sale_price' },
    { align: 'center', title: '预租价格', dataIndex: 'advance_rental_price', key: 'advance_rental_price' },
    { align: 'center', title: '位置', dataIndex: 'position', key: 'position' },
    { align: 'center', title: '面积', dataIndex: 'area', key: 'area' }
]
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 12 },
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            columns,
            parkinginformationobj: {
                visible: false,
                isAdd: null,
                record: {
                    status: '',
                    property: '',
                    parking_code: '',
                    parking_category: '',
                    management_category: '',
                    pre_sale_price: '',
                    advance_rental_price: '',
                    position: '',
                    area: ''
                }
            }
        }
    },
    computed: {
        dataSource() {
            const data = [
                {
                    key: '1',
                    property: '中东首座',
                    parking_code: '00001',
                    status: '已租',
                    parking_category: '地上',
                    management_category: '物业租赁',
                    pre_sale_price: '50000.00',
                    advance_rental_price: '800.00',
                    position: '1号楼东侧',
                    area: '12.3'
                },
                {
                    key: '2',
                    property: '盈科大厦',
                    parking_code: '00004',
                    status: '已售',
                    parking_category: '地下',
                    management_category: '业主自用',
                    pre_sale_price: '40000.00',
                    advance_rental_price: '600.00',
                    position: '1号楼东侧',
                    area: '15.3'
                },
                {
                    key: '3',
                    property: '盈科大厦',
                    parking_code: '00005',
                    status: '空闲',
                    parking_category: '地下',
                    management_category: '业主自用',
                    pre_sale_price: '40000.00',
                    advance_rental_price: '600.00',
                    position: '1号楼东侧',
                    area: '15.3'
                }
            ]
            return data
        }
    },
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        showAddModal() {
            this.parkinginformationobj.visible = true
            this.parkinginformationobj.isAdd = true
            this.parkinginformationobj.record.status = '空闲'
        },
        edit(record) {
            this.parkinginformationobj.visible = true
            this.parkinginformationobj.isAdd = false
            for (const k in record) {
                this.parkinginformationobj.record[k] = record[k]
            }
        }
    },
    components: {
        parkinginformationEdit
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
