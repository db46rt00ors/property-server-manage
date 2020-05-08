<template>
  <div>
    <a-modal
      :title="`编辑-${penaltyobj.record === null ? '' : penaltyobj.record.property_name}`"
      width="50%"
      v-model="penaltyobj.visible"
    >
      <a-row>
        <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-row>
            <a-col :span="12">
              <a-form-item label="滞纳金比率">
                <a-input
                  v-decorator="[
                    'parking_fee_ratio',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: penaltyobj.record === null ? '' : penaltyobj.record.parking_fee_ratio
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="超期天数">
                <a-input
                  v-decorator="[
                    'expiry_date',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: penaltyobj.record === null ? '' : penaltyobj.record.expiry_date
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
export default {
    props: {
        penaltyobj: {
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
            labelCol: { span: 8 },
            wrapperCol: { span: 12 }
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
