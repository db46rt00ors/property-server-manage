<template>
  <a-modal
    width="50%"
    title="修改预收款信息（注：数据来源为【系统生成】的不允许修改）"
    v-model="advancereceiptobj.visible"
    @ok="handleOk"
    :destroyOnClose="true"
    okText="保存"
  >
    <!-- v-decorator="['chooseestate', { rules: [{ required: true, message: 'Please input your note!' }] }]" -->
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="12">
          <a-form-item label="业主名称">
            <a-input
              class="input-disabled"
              disabled
              v-decorator="[
                'ownername',
                {
                  initialValue: advancereceiptobj.record === null ? '' : advancereceiptobj.record.ownername
                }
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="房间">
            <a-input
              class="input-disabled"
              disabled
              v-decorator="[
                'property_name',
                {
                  initialValue: advancereceiptobj.record === null ? '' : advancereceiptobj.record.property_name
                }
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="凭证号">
            <a-input
              :class="{'input-disabled': advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成'}"
              :disabled="advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成' ? true : false"
              v-decorator="[
                'voucher_number',
                {
                  rules: [{ required: true, message: '必须填写凭证号!',trigger: 'blur' }],
                  initialValue: advancereceiptobj.record === null ? '' : advancereceiptobj.record.voucher_number
                }
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="经手人">
            <a-input
              :class="{'input-disabled': advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成'}"
              :disabled="advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成' ? true : false"
              v-decorator="[
                'dealer',
                {
                  rules: [{ required: true, message: '必须填写经手人!',trigger: 'blur' }],
                  initialValue: advancereceiptobj.record === null ? '' : advancereceiptobj.record.dealer
                }
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="收款方式">
            <a-select
              :class="{'input-disabled': advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成'}"
              :disabled="advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成' ? true : false"
              v-decorator="[
                'payment_method',
                {
                  rules: [{ required: true, message: '必须填写收款方式!',trigger: 'blur' }],
                  initialValue: advancereceiptobj.record === null ? '' : advancereceiptobj.record.payment_method
                }
              ]"
            >
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="金额">
            <a-input
              :class="{'input-disabled': advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成'}"
              :disabled="advancereceiptobj.record === null || advancereceiptobj.record.data_sources === '系统生成' ? true : false"
              v-decorator="[
                'amount',
                {
                  rules: [{ required: true, message: '必须填写金额!',trigger: 'blur' }],
                  initialValue: advancereceiptobj.record === null ? '' : advancereceiptobj.record.amount
                }
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="摘要" :labelCol="{span: 4}" :wrapperCol="{span: 19}">
            <a-input type="textarea" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
export default {
    props: {
        advancereceiptobj: {
            type: Object,
            default: () => {
                return {
                    visible: false,
                    recored: null
                }
            }
        }
    },
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 14 }
        }
    },
    methods: {
        handleOk() {}
    }
}
</script>

<style scoped lang="less">
</style>
