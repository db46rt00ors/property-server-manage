<template>
  <div>
    <a-modal
      :title="`${convenientobj.recored === null ? '新增' : '编辑'+convenientobj.recored.feename }`"
      width="70%"
      v-model="convenientobj.visible"
      :destroyOnClose="true"
    >
      <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="12">
            <a-form-item label="所属楼盘" :labelCol="{span: 10}" :wrapperCol="{span: 14}">
              <a-select
                :disabled="convenientobj.recored != null"
                v-decorator="[
                  'property',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: convenientobj.recored === null ? '' : convenientobj.recored.property
                  }
                ]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item :labelCol="{span: 10}" :wrapperCol="{span: 14}" label="费项编号">
              <a-input
                v-decorator="[
                  'feenumber',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: convenientobj.recored === null ? '' : convenientobj.recored.feenumber
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item :labelCol="{span: 10}" :wrapperCol="{span: 14}" label="费项名称">
              <a-input
                v-decorator="[
                  'feename',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: convenientobj.recored === null ? '' : convenientobj.recored.feename
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item :labelCol="{span: 10}" :wrapperCol="{span: 14}" label="单价">
              <a-input
                v-decorator="[
                  'price',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: convenientobj.recored === null ? '' : convenientobj.recored.price
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template slot="footer">
        <a-button type="primary" icon="save" @click="save">保存</a-button>&nbsp;
        <a-button type="primary" icon="delete" @click="del" v-if="convenientobj.recored">删除</a-button>&nbsp;
        <a-button type="primary" icon="delete" @click="saveandclose" v-else>保存并关闭</a-button>&nbsp;
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
        convenientobj: {
            type: Object,
            default: () => {
                return {
                    visible: false
                }
            }
        }
    },
    methods: {
        save(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$notification.success({
                        message: '提示',
                        duration: 3,
                        description: '保存成功，请新增下一条记录！！'
                    })
                    console.log('Received values of form: ', values)
                }
            })
        },
        saveandclose(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.enactmentobj.visible = false
                    console.log('Received values of form: ', values)
                }
            })
        },
        del() {
            console.log('删除')
        },
        handleCancel() {
            this.convenientobj.visible = false
            this.convenientobj.recored = ''
        },
        checkboxChange(value) {
            console.log(value)
        }
    }
}
</script>

<style lang='less' scoped>
.setting button {
    margin: 10px 0 10px 10px;
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
/deep/ .ant-checkbox-group {
    width: 100%;
}
</style>
