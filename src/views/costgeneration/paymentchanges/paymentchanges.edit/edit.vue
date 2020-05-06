<template>
  <div>
    <a-modal
      :title="`编辑收款单号-${paymentchangesobj.record === null ? '' : paymentchangesobj.record.receipt_single_number}`"
      width="50%"
      v-model="paymentchangesobj.visible"
    >
      <a-row>
        <a-form layout="inline" :form="form">
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="收款单号">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'receipt_single_number',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.receipt_single_number }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="所属房间">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'property_name',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.property_name }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="业主姓名">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'owner',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.owner }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="收款人">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'payee',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.payee }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="12">
              <a-form-item label="收款日期">
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
              <a-form-item label="本次应收">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'amount_receivable',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.amount_receivable }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="本次实收">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="[
                    'amount_received',
                    { initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.amount_received }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="24">
              <a-form-item label="备注">
                <a-input
                  disabled
                  class="input-disabled"
                  v-decorator="['remark']"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start" class="form-row">
            <a-col :span="24">
              <a-form-item label="修改原因">
                <a-input
                  v-decorator="[
                    'modify_reason',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: paymentchangesobj.record === null ? '' : paymentchangesobj.record.modify_reason
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
            return this.paymentchangesobj.record === null ? '' : moment(this.paymentchangesobj.record.payment_date, 'YYYY/MM/DD')
        }
    },
    created() {
        // if (this.paymentchangesobj.record === null) {
        //     return
        // }
        // this.initValDate = moment(this.paymentchangesobj.record.payment_date, 'YYYY/MM/DD')
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
        /deep/.ant-calendar-picker {
            width: 100%;
        }
    }
}
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 90%;
}
</style>
