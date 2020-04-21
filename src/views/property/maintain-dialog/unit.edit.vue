<template>
  <div>
    <a-modal :title="`编辑${editObj.unitcode}信息`" width="70%" v-model="editObj.editvisible">
      <a-form :label-col="labelCol" :form="form" :wrapper-col="wrapperCol">
        <!-- :labelCol="{span: 3}" :wrapperCol="{span: 21}" -->
        <a-row>
          <a-col :span="12">
            <a-form-item label="楼宇编号">
              <a-input
                v-decorator="[
                  'building_code',
                  { rules: [{ required: true, message: '必须填写楼宇编号!',trigger: 'blur' }] },
                ]"
                placeholder="填写房产编码"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="单元编码">
              <a-input
                v-decorator="[
                  'unit_code',
                  { rules: [{ required: true, message: '必须填写单元编码!',trigger: 'blur' }] },
                ]"
                placeholder="填写单元编码"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="单元名称">
              <a-input
                v-decorator="[
                  'unit_name',
                  { rules: [{ required: true, message: '必须填写单元名称!',trigger: 'blur' }] },
                ]"
                placeholder="填写单元名称"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="开始楼层">
              <a-input v-decorator="['start_floor']" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="结束楼层">
              <a-input v-decorator="['stop_floor']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="开始房号">
              <a-input v-decorator="['start_cell_id']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="结束房号">
              <a-input v-decorator="['stop_cell_id']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="备注">
              <a-input v-decorator="['remark']"></a-input>
            </a-form-item>
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
        editObj: {
            type: Object,
            default: () => {
                return {
                    editvisible: false,
                    unitcode: ''
                }
            }
        }
    },
    methods: {
        saveandnew(e) {
            e.preventDefault()
            console.log(this.form)
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.$notification.success({
                        message: '提示',
                        duration: 3,
                        description: '保存成功！！'
                    })
                    console.log('Received values of form: ', values)
                }
            })
        },
        saveandclose() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.editObj.editvisible = false
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        handleCancel(e) {
            this.editObj.editvisible = false
        }
    }
}
</script>

<style lang='less' scoped>
.edit {
    width: 600px;
    height: 500px;
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
</style>
