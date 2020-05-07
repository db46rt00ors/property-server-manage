<template>
  <div>
    <a-modal
      :title="`编辑收款单号-${paymentchangesobj.record === null ? '' : paymentchangesobj.record.receipt_single_number}`"
      width="50%"
      v-model="paymentchangesobj.visible"
      @ok="handleOk"
    >
      <a-row>
        <a-form layout="inline" :form="form">
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="选择楼盘">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'property_name',
                    {
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.property_name,
                      rules: [{ required: true, message: 'Please input your note!' }],
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="临客姓名">
                <a-input
                  v-decorator="[
                    'linke_name',
                    {
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.linke_name,
                      rules: [{ required: true, message: 'Please input your note!' }],
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="费项名称">
                <a-select
                  v-decorator="[
                    'fee_name',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.fee_name
                    }
                  ]"
                >
                  <a-select-option value="1">罚款</a-select-option>
                  <a-select-option value="2">停车罚款</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="费用金额">
                <a-input
                  v-decorator="[
                    'receiving_amount',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.receiving_amount
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="费用起期">
                <a-date-picker
                  v-decorator="[
                    'payment_date',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: payment_date
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="费用止期">
                <a-date-picker
                  v-decorator="[
                    'payment_date_end',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: payment_date_end
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="收据号">
                <a-input
                  v-decorator="[
                    'receipt_number',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.receipt_number }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="发票号">
                <a-input
                  v-decorator="[
                    'invoice_number',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.invoice_number }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="收款方式">
                <a-select
                  v-decorator="[
                    'payment_method',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.payment_method
                    }
                  ]"
                >
                  <a-select-option value="1">全部</a-select-option>
                  <a-select-option value="2">现金</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="24">
              <a-form-item label="备注">
                <a-input
                  v-decorator="[
                    'remark',
                    {
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.remark
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    props: {
        paymentchangesobj: {
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
            initValDate: null
        }
    },
    computed: {
        payment_date() {
            return this.paymentchangesobj.record === null
                ? ''
                : moment(this.paymentchangesobj.record.payment_date, 'YYYY/MM/DD')
        },
        payment_date_end() {
            return this.paymentchangesobj.record === null ||
                this.paymentchangesobj.record.payment_date_end === undefined
                ? undefined
                : moment(this.paymentchangesobj.record.payment_date_end, 'YYYY/MM/DD')
        }
    },
    methods: {
        handleOk(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.form-row {
    /deep/.ant-form-item-label {
        width: 7em;
        text-align: right;
    }
    /deep/.ant-form-item-control-wrapper {
        width: 70%;
    }
    /deep/.ant-calendar-picker {
        width: 100%;
    }
}
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 90%;
}
</style>
