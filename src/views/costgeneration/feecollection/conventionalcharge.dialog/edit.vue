<template>
  <a-modal
    width="50%"
    :title="`减免【${ conventionalchargeObj.record === null ? '无' : conventionalchargeObj.record.fee_name }】的费用`"
    v-model="conventionalchargeObj.visible"
    @ok="handleOk"
    :destroyOnClose="true"
  >
    <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-row class="formitem">
        <a-col class="mgl-10">
          <a-row>
            <a-row class="formitem">
              <a-col>
                <a-form-item label="费用金额" class="dis-flex mgr-20">
                  <a-input
                    disabled
                    v-decorator="[
                      'expenses',
                      {
                        rules: [{ required: false }],
                        initialValue: conventionalchargeObj.record === null ? '' : conventionalchargeObj.record.expenses
                      }
                    ]"
                  />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="本次费用减免" class="dis-flex mgr-20">
                  <a-input
                    v-decorator="[
                      'fee_reduction',
                      {
                        rules: [{ required: true, message: '必须填写本次费用减免!',trigger: 'blur' }],
                        initialValue: conventionalchargeObj.record === null ? '' : conventionalchargeObj.record.fee_reduction
                      }
                    ]"
                  />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="本次滞纳金减免" class="dis-flex mgr-20">
                  <a-input
                    v-decorator="[
                      'late_fee_reduction',
                      {
                        rules: [{ required: true, message: '必须填写本次滞纳金减免!',trigger: 'blur' }],
                        initialValue: conventionalchargeObj.record === null ? '' : conventionalchargeObj.record.late_fee_reduction
                      }
                    ]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-row>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
export default {
    props: {
        conventionalchargeObj: {
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
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 10 }, sm: { span: 10 } },
            form: this.$form.createForm(this)
        }
    },
    methods: {
        handleOk(e) {
            e.preventDefault()
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values)
                }
            })
        },
        handleCancel(e) {
            console.log(e)
            this.conventionalchargeObj.visible = false
        }
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
}
.title {
    line-height: 40px;
}
</style>
