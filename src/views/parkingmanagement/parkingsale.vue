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
          <a-form-item label="车位状态">
            <a-select
              @change="onParkingStatusChange"
              v-decorator="[
                'parking_status',
                {
                  rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: parking_status_val
                }
              ]"
            >
              <a-select-option :value="1">已售</a-select-option>
              <a-select-option :value="2">空闲</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="车位或车牌号">
            <a-input
              v-decorator="[
                'number_plate',
                {
                  rules: [{ required: true, message: 'Please input your note!' }]
                }
              ]"
            />
          </a-form-item>
        </a-col>
      </a-form>
    </a-row>
    <a-row class="setting mgt-10 mgb-20">
      <a-col>
        <a-button type="primary" icon="search">查询</a-button>
        <a-button type="primary" icon="file-excel" class="mgl-10">导出</a-button>
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
        <a
          slot="setting"
          slot-scope="text, record"
          @click="edit(record)"
        >{{ parking_status_val === 1 ? '操作' : '修改' }}</a>
      </a-table>
    </a-row>
    <parkingsale-edit :parkingsaleobj="parkingsaleobj"></parkingsale-edit>
  </a-row>
</template>

<script>
import parkingsaleEdit from './parkingsale.edit/edit'
const columns = [
    { width: '5%', align: 'center', title: '编号', dataIndex: 'key', key: 'key' },
    {
        width: '6%',
        align: 'center',
        title: '楼盘',
        dataIndex: 'setting',
        key: 'setting',
        scopedSlots: { customRender: 'setting' }
    },
    { width: '5%', align: 'center', title: '楼盘', dataIndex: 'property', key: 'property' },
    { width: '5%', align: 'center', title: '车位编号', dataIndex: 'parking_space_number', key: 'parking_space_number' },
    { width: '5%', align: 'center', title: '管理类别', dataIndex: 'management_category', key: 'management_category' },
    { width: '5%', align: 'center', title: '实售价格', dataIndex: 'sale_price', key: 'sale_price' },
    { width: '5%', align: 'center', title: '产权人', dataIndex: 'property_owner', key: 'property_owner' },
    { width: '5%', align: 'center', title: '联系电话', dataIndex: 'contact_number', key: 'contact_number' },
    { width: '5%', align: 'center', title: '车牌号码', dataIndex: 'license_plate_number', key: 'license_plate_number' },
    {
        width: '5%',
        align: 'center',
        title: '停车证号',
        dataIndex: 'parking_permit_number',
        key: 'parking_permit_number'
    },
    { width: '5%', align: 'center', title: '销售日期', dataIndex: 'sale_date', key: 'sale_date' }
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
            parkingsaleobj: {
                visible: false,
                record: null,
                parking_status_val: null
            },
            parking_status_val: 1
        }
    },
    computed: {
        dataSource: {
            get() {
                if (this.parking_status_val === 1) {
                    return [
                        {
                            key: '1',
                            property: '中东首座',
                            parking_space_number: 'B001',
                            management_category: '业主自用',
                            sale_price: '50000.00',
                            property_owner: '赵云',
                            contact_number: '13812321113',
                            license_plate_number: '京F·77222',
                            parking_permit_number: 'ABC003',
                            sale_date: '2012-12-22',
                            parking_category: '地上',
                            parking_type: '标准车位',
                            parking_area: '12.8',
                            pre_sale_price: '12000',
                            parking_location: '1号楼东南角'
                        }
                    ]
                } else {
                    return [
                        {
                            key: '2',
                            property: '中东首座',
                            parking_space_number: 'B002',
                            management_category: '业主自用',
                            sale_price: '',
                            property_owner: '',
                            contact_number: '',
                            license_plate_number: '',
                            parking_permit_number: '',
                            sale_date: '',
                            parking_category: '地下',
                            parking_type: '大车位',
                            parking_area: '15',
                            pre_sale_price: '19000',
                            parking_location: '1号楼地下201号'
                        }
                    ]
                }
            },
            set(newValue) {
                if (newValue === 1) {
                    return [
                        {
                            key: '1',
                            property: '中东首座',
                            parking_space_number: 'B001',
                            management_category: '业主自用',
                            sale_price: '50000.00',
                            property_owner: '赵云',
                            contact_number: '13812321113',
                            license_plate_number: '京F·77222',
                            parking_permit_number: 'ABC003',
                            sale_date: '2012-12-22',
                            parking_category: '地上',
                            parking_type: '标准车位',
                            parking_area: '12.8',
                            pre_sale_price: '12000',
                            parking_location: '1号楼东南角'
                        }
                    ]
                } else {
                    return [
                        {
                            key: '2',
                            property: '中东首座',
                            parking_space_number: 'B002',
                            management_category: '业主自用',
                            sale_price: '',
                            property_owner: '',
                            contact_number: '',
                            license_plate_number: '',
                            parking_permit_number: '',
                            sale_date: '',
                            parking_category: '地下',
                            parking_type: '大车位',
                            parking_area: '15',
                            pre_sale_price: '19000',
                            parking_location: '1号楼地下201号'
                        }
                    ]
                }
            }
        }
    },
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        edit(record) {
            this.parkingsaleobj.parking_status_val = this.parking_status_val
            this.parkingsaleobj.visible = true
            this.parkingsaleobj.record = record
        },
        onParkingStatusChange(val) {
            this.parking_status_val = val
            if (val === 1) {
                this.dataSource = [
                    {
                        key: '1',
                        property: '中东首座',
                        parking_space_number: 'B001',
                        management_category: '业主自用',
                        sale_price: '50000.00',
                        property_owner: '赵云',
                        contact_number: '13812321113',
                        license_plate_number: '京F·77222',
                        parking_permit_number: 'ABC003',
                        sale_date: '2012-12-22',
                        parking_category: '地上',
                        parking_type: '标准车位',
                        parking_area: '12.8',
                        pre_sale_price: '12000',
                        parking_location: '1号楼东南角'
                    }
                ]
            } else {
                this.dataSource = [
                    {
                        key: '2',
                        property: '中东首座',
                        parking_space_number: 'B002',
                        management_category: '业主自用',
                        sale_price: '',
                        property_owner: '',
                        contact_number: '',
                        license_plate_number: '',
                        parking_permit_number: '',
                        sale_date: '',
                        parking_category: '地下',
                        parking_type: '大车位',
                        parking_area: '15',
                        pre_sale_price: '19000',
                        parking_location: '1号楼地下201号'
                    }
                ]
            }
        }
    },
    components: {
        parkingsaleEdit
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
