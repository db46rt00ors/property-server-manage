<template>
  <div>
    <a-modal title="新增" width="70%" v-model="visibleObj.addvisible">
      <a-form :label-col="labelCol" :form="form" :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="24">
            <a-form-item label="所属楼盘" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-select v-decorator="['property']">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
<<<<<<< HEAD
            <a-form-item label="费项编号" prop="ownercode">
              <a-input
                v-decorator="[
                  'ownercode',
                  {
                    rules: [{ required: true, message: '必填项!' }]
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="费项名称" prop="ownername">
              <a-input
                v-decorator="[
                  'ownername',
                  {
                    rules: [{ required: true, message: '必填项!' }]
                  }
                ]"
              ></a-input>
=======
            <a-form-item label="费项编号">
              <a-input
                v-decorator="[
                  'ownercode',
                  { rules: [ { required: true, message: '必填项!' } ] }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="费项名称">
              <a-input
                v-decorator="[
                  'ownername',
                  { rules: [ { required: true, message: '必填项!' } ] }
                ]"
              />
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="收费方式">
<<<<<<< HEAD
              <a-select
                v-decorator="[
                  'pay_method',
                  {
                    rules: [{ required: true, message: '必填项!' }]
                  }
                ]"
              >
=======
              <a-select v-decorator="['pay_methods']">
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="收费周期(月)" placeholder="1">
              <a-select
                disabled
                v-decorator="[
                  'charging_cycle',
<<<<<<< HEAD
                  {initialValue: '1'}
                ]"
              >
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
=======
                  {initialValue: 'aa'}
                ]"
              >
                <a-select-option value="1">aaa</a-select-option>
                <a-select-option value="2">bbb</a-select-option>
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="单价">
              <a-input v-decorator="['price']" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="关联费项">
<<<<<<< HEAD
              <a-select
                placeholder="please select your zone"
                v-decorator="[
                  'related_fees'
                ]"
              >
=======
              <a-select placeholder="please select your zone" v-decorator="[ 'related_fees' ]">
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="21" :offset="3">
<<<<<<< HEAD
            <a-form-item label :labelCol="{span: 0}" :wrapperCol="{span: 24}">
              <a-checkbox-group
                v-decorator="[
                  'checkbox_group'
                ]"
              >
=======
            <a-form-item :labelCol="{span: 0}" :wrapperCol="{span: 24}">
              <a-checkbox-group v-decorator="[ 'allow_ledger_generation' ]">
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
                <a-col :span="12">
                  <a-checkbox
                    value="1"
                    name="type"
                  >允许【生成台帐】时直接修改此费项单价</a-checkbox>
                </a-col>
                <a-col :span="12">
                  <a-checkbox value="2" name="type">打印收据时隐藏单价、读数、用量</a-checkbox>
                </a-col>
              </a-checkbox-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start">
          <a-col :offset="1">
<<<<<<< HEAD
            Late payment ratio
            <a-form-item label="滞纳金比率" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
              <a-input
                placeholder="Basic usage"
                v-decorator="[
                  'late_payment_ratio'
                ]"
              />
=======
            <a-form-item label="滞纳金比率" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
              <a-input placeholder="Basic usage" v-decorator="[ 'late_payment_ratio' ]" />
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="(‰)，超期" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
<<<<<<< HEAD
              <a-input
                placeholder="Basic usage"
                v-decorator="[
                  'overdue'
                ]"
              />
=======
              <a-input placeholder="Basic usage" v-decorator="[ 'overdue' ]" />
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="天后收取" :colon="false" :labelCol="{span: 20}"></a-form-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="start">
          <a-col :span="5" :offset="1">
            <a-form-item label="催缴提醒" :labelCol="{span: 10}" :wrapperCol="{span: 12}">
<<<<<<< HEAD
              <a-radio-group v-decorator="['reminder']">
=======
              <a-radio-group v-decorator="[ 'is_reminder' ]">
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
                <a-radio value="1">是</a-radio>
                <a-radio value="0">否</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item
              label="从未收取的缴费限期前 "
              :colon="false"
              :labelCol="{span: 12}"
              :wrapperCol="{span: 12}"
            >
<<<<<<< HEAD
              <a-input placeholder="Basic usage" v-decorator="['reminder_payment_deadline']" />
=======
              <a-input placeholder="Basic usage" v-decorator="[ 'in_advance_days' ]" />
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="天发送短信/微信" :colon="false" :labelCol="{span: 23}"></a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start">
          <a-col :span="5" :offset="1">
            <a-form-item label="续费提醒" :labelCol="{span: 10}" :wrapperCol="{span: 12}">
<<<<<<< HEAD
              <a-radio-group v-decorator="['renewal_reminder']">
=======
              <a-radio-group v-decorator="[ 'is_renewal_reminder' ]">
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
                <a-radio value="1">是</a-radio>
                <a-radio value="0">否</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item
              label="从未收取的缴费限期前 "
              :colon="false"
              :labelCol="{span: 12}"
              :wrapperCol="{span: 12}"
            >
<<<<<<< HEAD
              <a-input placeholder="Basic usage" v-decorator="['renewal_payment_deadline']" />
=======
              <a-input placeholder="Basic usage" v-decorator="[ 'payment_deadline' ]" />
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="天发送短信/微信" :colon="false" :labelCol="{span: 23}"></a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template slot="footer">
        <a-button type="primary" icon="save" @click="saveandnew">保存并新建</a-button>&nbsp;
        <a-button type="primary" icon="issues-close" @click="saveandclose">保存并关闭</a-button>&nbsp;
        <a-button type="primary" icon="close-square" @click="handleCancel">关闭</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { lg: { span: 6 }, sm: { span: 6 } },
      wrapperCol: { lg: { span: 18 }, sm: { span: 18 } },
      form: this.$form.createForm(this)
    }
  },
  props: {
    visibleObj: {
      type: Object,
      default: () => {
        return {
<<<<<<< HEAD
          addvisible: false
=======
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 18 }, sm: { span: 18 } },
            form: this.$form.createForm(this)
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
        }
      }
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    saveandnew(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
<<<<<<< HEAD
    saveandclose() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.visibleObj.addvisible = false
        } else {
          console.log('error submit!!')
          return false
=======
    methods: {
        showModal() {
            this.visible = true
        },
        saveandnew(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (err) {
                    return
                }
                this.$notification.success({
                    message: '提示',
                    duration: 3,
                    description: '保存成功，请新增下一条记录！！'
                })
                console.log('Received values of form: ', values)
            })
        },
        saveandclose(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (err) {
                    return
                }
                this.visibleObj.addvisible = false
                console.log('Received values of form: ', values)
            })
        },
        handleCancel(e) {
            console.log(e)
            this.visibleObj.addvisible = false
>>>>>>> 64a3e92fb3c989fc2181fe88267b470cddb3e101
        }
      })
    },
    handleCancel(e) {
      console.log(e)
      this.visibleObj.addvisible = false
    }
  }
}
</script>

<style lang='less' scoped>
.add {
  width: 600px;
  height: 500px;
}
.ant-form-item {
  margin-top: 5px;
  margin-bottom: 0px;
}
/deep/ .ant-checkbox-group {
  width: 100%;
}
</style>
