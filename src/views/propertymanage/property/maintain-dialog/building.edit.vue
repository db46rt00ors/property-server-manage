<template>
  <div>
    <a-modal :title="`编辑${editObj.buildingname}信息`" width="70%" v-model="editObj.editvisible">
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
            <a-form-item label="楼宇编码">
              <a-input
                v-decorator="[
                  'building_code',
                  { rules: [{ required: true, message: '必须填写楼宇编码!',trigger: 'blur' }] },
                ]"
                placeholder="填写楼宇编码"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="楼宇名称" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-input v-decorator="['building_name']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="楼宇功能">
              <a-input v-decorator="['building_function']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="使用面积">
              <a-input v-decorator="['used_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="建筑面积">
              <a-input v-decorator="['build_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="建设许可证号">
              <a-input v-decorator="['build_permission_id']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="建设许可证号">
              <a-input v-decorator="['build_permission_id']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="销售许可证号">
              <a-input v-decorator="['sale_permission_id']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="竣工日期">
              <a-input v-decorator="['finish_date']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="封顶日期">
              <a-input v-decorator="['over_roof_date']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="装修">
              <a-input v-decorator="['decorate']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="结构类别">
              <a-input v-decorator="['struct_type']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="完损等级">
              <a-input v-decorator="['damage_grade']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="单元数量">
              <a-input v-decorator="['unit_count']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="楼宇类型">
              <a-input v-decorator="['building_type']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="清扫层数">
              <a-input v-decorator="['clean_floor']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="拖洗层数">
              <a-input v-decorator="['mop_floor']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="楼狼通道地面">
              <a-input v-decorator="['channel_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="电梯轿箱">
              <a-input v-decorator="['elevator']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="通道门">
              <a-input v-decorator="['channel_door']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="电梯门">
              <a-input v-decorator="['evevator_door']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="水井门">
              <a-input v-decorator="['water_well_door']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="电井门">
              <a-input v-decorator="['electric_well_door']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="百叶窗">
              <a-input v-decorator="['window_shades']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="消防栓">
              <a-input v-decorator="['hydrant']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="整容镜">
              <a-input v-decorator="['mirrors']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="单元门">
              <a-input v-decorator="['unit_door']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="硬化地面">
              <a-input v-decorator="['harden_ground_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="提纯绿地">
              <a-input v-decorator="['green_area']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="不提纯绿地">
              <a-input v-decorator="['no_green_area']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="人工水面">
              <a-input v-decorator="['water_by_person']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="是否使用电梯">
              <a-input v-decorator="['is_elevator']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="是否需要二次水电">
              <a-input v-decorator="['is_second_water_electric']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="随机标识码">
              <a-input v-decorator="['random_identify']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="备注" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-input type="textarea" v-decorator="['remark']"></a-input>
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
