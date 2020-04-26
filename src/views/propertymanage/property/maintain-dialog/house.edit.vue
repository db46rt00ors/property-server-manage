<template>
  <div>
    <a-modal :title="`编辑${editObj.affiliates}信息`" width="70%" v-model="editObj.editvisible">
      <a-form :label-col="labelCol" :form="form" :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="12">
            <a-form-item label="房产编码">
              <a-input
                v-decorator="[
                  'estate_code',
                  { rules: [{ required: true, message: '必须填写房产编码!',trigger: 'blur' }] },
                ]"
                placeholder="填写房产编码"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="房产名称">
              <a-input
                v-decorator="[
                  'estate_name',
                  { rules: [{ required: true, message: '必须填写房产名称!',trigger: 'blur' }] },
                ]"
                placeholder="填写房产名称"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="房产地址" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-input v-decorator="['estate_addr']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="占地面积">
              <a-input v-decorator="['cover_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="建筑面积">
              <a-input v-decorator="['build_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="绿地面积">
              <a-input v-decorator="['green_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="道路面积">
              <a-input v-decorator="['road_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="楼宇数量">
              <a-input v-decorator="['building_number']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="负责人">
              <a-input v-decorator="['building_leader']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="公司名称">
              <a-input v-decorator="['company_name']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="法人代表">
              <a-input v-decorator="['company_behalf']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="联系人">
              <a-input v-decorator="['contact']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="联系电话">
              <a-input v-decorator="['contact_phone']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="联系地址">
              <a-input v-decorator="['contact_addr']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="车位滞纳金比率">
              <a-input v-decorator="['car_space_delay_rate']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="车位超期天数">
              <a-input v-decorator="['car_space_over_day']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="路灯数量">
              <a-input v-decorator="['street_lamp_number']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <!--  :labelCol="{span: 3}" :wrapperCol="{span: 21}" -->
          <a-col :span="12">
            <a-form-item label="化粪池数量">
              <a-input v-decorator="['hfcNum']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="备注">
              <a-input v-decorator="['remark']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="所属公司">
              <a-input v-decorator="['company']"></a-input>
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
                    editvisible: false
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
