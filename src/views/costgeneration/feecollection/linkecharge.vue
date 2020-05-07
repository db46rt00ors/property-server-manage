<template>
  <a-row class="link-content">
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
          <a-form-item label="临客姓名">
            <a-input
              v-decorator="['linke_name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用起止">
            <a-range-picker
              v-decorator="['start_end', { rules: [{ required: true, message: 'Please input your note!' }] }]"
              @change="onPickerChange"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="选择费项">
            <a-select
              v-decorator="['choosefee', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            >
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用金额">
            <a-input
              v-decorator="['expenses', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6" class="mgt-4">
          <a-button class="mgr-10" type="primary">添加</a-button>
          <a-button type="primary">删除</a-button>
        </a-col>
      </a-row>
      <a-row class="mgl-30 mgt-20 font-size-20">
        应收金额:
        <span class="color-red font-weight-700">0.00</span> 实收金额:
        <span class="color-red font-weight-700">0.00</span>
      </a-row>
      <a-row type="flex" justify="start" class="form-row mgt-20">
        <a-col :span="6">
          <a-form-item label="收款方式">
            <a-select
              v-decorator="['payment_method', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            >
              <a-select-option value="1">现金</a-select-option>
              <a-select-option value="2">支票</a-select-option>
              <a-select-option value="3">银行卡</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收据号">
            <a-input
              v-decorator="['receipt_number', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="发票号">
            <a-input
              v-decorator="['invoice_number', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="备注">
            <a-input
              v-decorator="['remark', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" class="mgt-20 mgl-20">
          <a-button type="primary">确认缴费</a-button>
          <a-button type="primary" class="mgr-10 mgl-10">清空</a-button>
          <a-button type="primary">临客收费打印</a-button>
        </a-col>
      </a-row>
    </a-form>
  </a-row>
</template>

<script>
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 14 }
        }
    },
    methods: {
        onPickerChange(date, dateString) {
            console.log(date, dateString)
        }
    }
}
</script>

<style scoped lang='less'>
.link-content {
    height: 800px;
    background-color: #fff;
    padding: 10px;
    /deep/.ant-calendar-picker {
        width: 100%;
    }
    .ant-form-item {
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
</style>
