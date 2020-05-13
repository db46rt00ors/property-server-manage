<template>
  <a-modal
    title="新增业主信息"
    width="60%"
    v-model="addObj.addVisible"
    okText="保存"
    cancelText="关闭"
    :destroyOnClose="true"
    @ok="(e) => ok(e)"
  >
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :form="form"
    >
      <a-row>
        <a-col :span="12">
          <a-form-item label="选择房产">
            <a-select v-decorator="['chooseproperty',{ rules: [ { required: true, message: '必填项!' } ] }]">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="楼宇名称">
            <a-select v-decorator="['buildingname',{ rules: [ { required: true, message: '必填项!' } ] }]">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="单元楼层">
            <a-select v-decorator="['unitfloor',{ rules: [ { required: true, message: '必填项!' } ] }]">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="房间名称">
            <a-select v-decorator="['roomname',{ rules: [ { required: true, message: '必填项!' } ] }]">
              <a-select-option value="1">房间名称111</a-select-option>
              <a-select-option value="0">房间名称222</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="验收项目">
            <a-select v-decorator="['acceptanceitems',{ rules: [ { required: true, message: '必填项!' } ] }]">
              <a-select-option value="shanghai">Zone one</a-select-option>
              <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="验收日期">
            <a-date-picker
              v-decorator="['acceptancedate',{ rules: [ { required: true, message: '必填项!' } ] }]"
              type="date"
              placeholder="Pick a date"
              style="width: 100%;"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="确认日期">
            <a-date-picker
              v-decorator="['confirmationdate',{ rules: [ { required: true, message: '必填项!' } ] }]"
              type="date"
              placeholder="Pick a date"
              style="width: 100%;"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="是否合格">
            <a-select v-decorator="['isqualified' ,{ rules: [ { required: true, message: '必填项!' } ] }]">
              <a-select-option value="1">是</a-select-option>
              <a-select-option value="0">否</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="验收人员" :labelCol="{span: 3}" :wrapperCol="{span: 20}">
            <a-input v-decorator="['acceptance_personnel']"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="补充备注" :labelCol="{span: 3}" :wrapperCol="{span: 20}">
            <a-input v-decorator="['remark']"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="业主意见" :labelCol="{span: 3}" :wrapperCol="{span: 20}">
            <a-input v-decorator="['owner_opinion']"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-form-item label="房管员意见" :labelCol="{span: 3}" :wrapperCol="{span: 20}">
            <a-input v-decorator="['housekeeper_opinion']"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
export default {
    props: {
        addObj: {
            type: Object,
            default: () => {
                return {
                    addVisible: false
                }
            }
        }
    },
    data() {
        return {
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 16 }, sm: { span: 16 } },
            form: this.$form.createForm(this)
        }
    },
    methods: {
        ok(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (err) {
                    return
                }
                console.log('Received values of form: ', values)
            })
        }
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-bottom: 0px;
}
</style>
