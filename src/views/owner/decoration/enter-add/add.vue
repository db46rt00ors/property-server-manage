<template>
  <div>
    <a-modal title="新增" width="60%" v-model="visibleObj.addvisible">
      <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="12">
            <a-form-item label="选择楼盘">
              <a-select
                v-decorator="['chooseestate',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="楼宇名称">
              <a-select
                placeholder="please select your zone"
                v-decorator="['buildingname',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="单元/楼层">
              <a-select
                v-decorator="['unitandfloor',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="房间名称">
              <a-select
                placeholder="please select your zone"
                v-decorator="['roomname',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="申请人">
              <a-input
                v-decorator="['applicant',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="联系电话">
              <a-input
                v-decorator="['phonenumber',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="申请时间">
              <a-date-picker
                type="date"
                placeholder="Pick a date"
                style="width: 100%;"
                v-decorator="['applicationtime',{
                  rules: [{ required: true, message: '必填项!' }]
                }]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="状态">
              <a-input
                disabled
                v-decorator="['status',{
                  rules: [{ required: true, message: '必填项!' }],
                  initialValue: '待审批'
                }]"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="装修内容" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-input
                type="textarea"
                v-decorator="['decorationcontent',{
                  rules: [{ required: true, message: '必填项!' }],
                }]"
              />
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
    visibleObj: {
      type: Object,
      default: () => {
        return {
          addvisible: false
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
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.visibleObj.addvisible = false
          console.log('Received values of form: ', values)
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
</style>
