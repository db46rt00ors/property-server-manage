<template>
  <div>
    <a-modal :title="`编辑${editObj.roomname}信息`" width="70%" v-model="editObj.editvisible">
      <a-form :label-col="labelCol" :form="form" :wrapper-col="wrapperCol">
        <!-- :labelCol="{span: 3}" :wrapperCol="{span: 21}" -->
        <a-row>
          <a-col :span="12">
            <a-form-item label="单元编码">
              <a-input
                v-decorator="[
                  'unit_code',
                  { rules: [{ required: true, message: '必须填写单元编号!',trigger: 'blur' }] },
                ]"
                placeholder="填写单元编码"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="房间编码">
              <a-input
                v-decorator="[
                  'cell_code',
                  { rules: [{ required: true, message: '必须填写房间编码!',trigger: 'blur' }] },
                ]"
                placeholder="填写房间编码"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="房间名称">
              <a-input
                v-decorator="[
                  'cell_name',
                  { rules: [{ required: true, message: '必须填写房间名称!',trigger: 'blur' }] },
                ]"
                placeholder="填写房间名称"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="户型编码">
              <a-input v-decorator="['cell_house_code']" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="朝向编码">
              <a-input v-decorator="['cell_toward_code']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="功能">
              <a-input v-decorator="['cell_function']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="装修编码">
              <a-input v-decorator="['cell_decorate_code']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="使用面积">
              <a-input v-decorator="['cell_used_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="建筑面积">
              <a-input v-decorator="['cell_build_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="车库面积">
              <a-input v-decorator="['carport_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="车位面积">
              <a-input v-decorator="['car_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="阁楼面积">
              <a-input v-decorator="['loft_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="储藏室面积">
              <a-input v-decorator="['store_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="楼层数">
              <a-input v-decorator="['floor_number']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="上次欠缴">
              <a-input v-decorator="['last_debt']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="物业类型">
              <a-input v-decorator="['property_type']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="租金">
              <a-input v-decorator="['rent_money']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="长度">
              <a-input v-decorator="['length']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="宽度">
              <a-input v-decorator="['width']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="档口用途">
              <a-input v-decorator="['stall_use']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="档口区域">
              <a-input v-decorator="['stall_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="是否已售">
              <a-input v-decorator="['is_sale']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="是否已租">
              <a-input v-decorator="['is_rent']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="销售合同编号">
              <a-input v-decorator="['sale_contract_id']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="租赁合同编号">
              <a-input v-decorator="['rent_contract_id']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="系数">
              <a-input v-decorator="['factor']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="备注" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-input v-decorator="['remark']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="储藏室号">
              <a-input v-decorator="['store_id']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="房间性质">
              <a-input v-decorator="['cell_property']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="车牌号">
              <a-input v-decorator="['car_licence_id']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="车位号">
              <a-input v-decorator="['car_space_id']"></a-input>
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
