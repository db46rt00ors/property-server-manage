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
              v-decorator="['quick_search', { rules: [{ required: true, message: 'Please input your note!' }],initialValue: '班次' }]"
            >
              <a-select-option value="1">班次</a-select-option>
              <a-select-option value="2">地段</a-select-option>
              <a-select-option value="3">值班人员</a-select-option>
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
        <a slot="admission_time" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
        <a slot="playing_time" slot-scope="text, record" @click="edit(record)">{{ text }}</a>
      </a-table>
    </a-row>

    <!-- <caraccess-edit :caraccessobj="caraccessobj"></caraccess-edit> -->
  </a-row>
</template>

<script>
// import caraccessEdit from './caraccess.edit/edit'
const columns = [
  { align: 'center', title: '所属楼盘', dataIndex: 'estate', key: 'estate' },
  {
    align: 'center',
    title: '入场时间',
    dataIndex: 'admission_time',
    key: 'admission_time',
    scopedSlots: { customRender: 'admission_time' }
  },
  {
    align: 'center',
    title: '出场时间',
    dataIndex: 'playing_time',
    key: 'playing_time',
    scopedSlots: { customRender: 'playing_time' }
  },
  { align: 'center', title: '班次', dataIndex: 'shift', key: 'shift' },
  { align: 'center', title: '时段', dataIndex: 'period', key: 'period' },
  { align: 'center', title: '地段', dataIndex: 'lot', key: 'lot' },
  { align: 'center', title: '岗位', dataIndex: 'post', key: 'post' },
  { align: 'center', title: '值班人', dataIndex: 'on_duty', key: 'on_duty' }
]

const data = [
  {
    key: '1',
    estate: '中东首座',
    admission_time: '2019-12-02',
    playing_time: '2019-12-02',
    shift: '下午班',
    lot: '小区北门',
    period: '12:00 ～ 16:00',
    post: '休斯敦市的',
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
    // caraccessEdit
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
