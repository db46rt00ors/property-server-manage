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
          <a-form-item label="快速检索">
            <a-select
              v-decorator="['quick_search', { rules: [{ required: true, message: 'Please input your note!' }],initialValue: '停车牌号' }]"
            >
              <a-select-option value="1">停车牌号</a-select-option>
              <a-select-option value="2">车牌号</a-select-option>
              <a-select-option value="3">车主姓名</a-select-option>
              <a-select-option value="4">车位</a-select-option>
              <a-select-option value="5">值班人</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6" class="pdl-10">
          <a-form-item label>
            <a-input-search @search="onSearch" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-row class="setting mgt-10 mgb-10">
      <a-col>
        <a-button type="primary" icon="file-add" class="mgl-10">新增</a-button>
        <a-button type="primary" icon="delete" class="mgl-10">删除</a-button>
        <a-button type="primary" icon="file-excel" class="mgl-10">导出</a-button>
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
      >
        <a slot="stop_sign" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
      </a-table>
    </a-row>

    <caraccess-edit :caraccessobj="caraccessobj"></caraccess-edit>
  </a-row>
</template>

<script>
import caraccessEdit from './caraccess.edit/edit'
const columns = [
  { align: 'center', title: '所属楼盘', dataIndex: 'estate', key: 'estate' },
  { align: 'center', title: '停车牌号', dataIndex: 'stop_sign', key: 'stop_sign', scopedSlots: { customRender: 'stop_sign' } },
  { align: 'center', title: '车牌号', dataIndex: 'number_plate', key: 'number_plate' },
  { align: 'center', title: '车主姓名', dataIndex: 'owners_name', key: 'owners_name' },
  { align: 'center', title: '车位', dataIndex: 'parking_space', key: 'parking_space' },
  { align: 'center', title: '入场时间', dataIndex: 'admission_time', key: 'admission_time' },
  { align: 'center', title: '出场时间', dataIndex: 'playing_time', key: 'playing_time' },
  { align: 'center', title: '值班人', dataIndex: 'on_duty', key: 'on_duty' }
]

const data = [
  {
    key: '1',
    estate: '中东首座',
    stop_sign: 'A001',
    number_plate: '京A·12345',
    owners_name: '黄忠',
    parking_space: '00001',
    admission_time: '2019-12-02 12:33:44',
    playing_time: '2019-12-02 14:33:44',
    on_duty: '张XX'
  },
  {
    key: '2',
    estate: '盈科大厦',
    stop_sign: 'A002',
    number_plate: '京A·12345',
    owners_name: '黄忠',
    parking_space: '00001',
    admission_time: '2019-12-02 12:33:44',
    playing_time: '2019-12-02 14:33:44',
    on_duty: '张XX'
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
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      caraccessobj: {
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
      this.caraccessobj.visible = true
      this.caraccessobj.record = record
    },
    onSearch(value, event) {
      event.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  },
  components: {
    caraccessEdit
  }
}
</script>

<style lang="less" scoped>
.ant-form-item {
  margin-top: 5px;
  margin-bottom: 0px;
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
