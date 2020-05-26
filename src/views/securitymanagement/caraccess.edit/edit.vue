<template>
  <a-modal
    width="50%"
    :title="`编辑-【${ caraccessobj.record === null ? '无' : caraccessobj.record.stop_sign }】`"
    v-model="caraccessobj.visible"
    @ok="handleOk"
    :destroyOnClose="true"
  >
    <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="所属楼盘">
              <a-input
                disabled
                v-decorator="[
                  'estate',
                  {
                    rules: [{ required: false }],
                    initialValue: caraccessobj.record === null ? '' : caraccessobj.record.estate
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="车牌号">
              <a-input
                v-decorator="[
                  'number_plate',
                  {
                    rules: [{ required: true, message: '必须填写车牌号!',trigger: 'blur' }],
                    initialValue: caraccessobj.record === null ? '' : caraccessobj.record.number_plate
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="入场时间">
              <a-date-picker
                format="YYYY-MM-DD HH:mm:ss"
                v-decorator="[
                  'admission_time',
                  {
                    rules: [{ required: true, type: 'object', message: '必须填写入场时间!',trigger: 'change' }],
                    initialValue: this.$moment(admission_time)
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="出场时间">
              <a-date-picker
                format="YYYY-MM-DD HH:mm:ss"
                v-decorator="[
                  'playing_time',
                  {
                    rules: [{ required: true, type: 'object', message: '必须填写出场时间!',trigger: 'blur' }],
                    initialValue: this.$moment(playing_time)
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="停车牌号">
              <a-input
                v-decorator="[
                  'stop_sign',
                  {
                    rules: [{ required: true, message: '必须填写停车牌号!',trigger: 'change' }],
                    initialValue: caraccessobj.record === null ? '' : caraccessobj.record.stop_sign
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="车位">
              <a-input
                v-decorator="[
                  'parking_space',
                  {
                    rules: [{ required: true, message: '必须填写车位!',trigger: 'change' }],
                    initialValue: caraccessobj.record === null ? '' : caraccessobj.record.parking_space
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="车主姓名">
              <a-input
                v-decorator="[
                  'owners_name',
                  {
                    rules: [{ required: true, message: '必须填写停车牌号!',trigger: 'change' }],
                    initialValue: caraccessobj.record === null ? '' : caraccessobj.record.owners_name
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="值班人">
              <a-input
                v-decorator="[
                  'on_duty',
                  {
                    initialValue: caraccessobj.record === null ? '' : caraccessobj.record.on_duty
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="备注" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
              <a-input type="textarea" v-decorator="[ 'remark' ]" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  props: {
    caraccessobj: {
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
      labelCol: { span: 8 },
      wrapperCol: { span: 12 },
      form: this.$form.createForm(this)
    }
  },
  computed: {
    admission_time() {
      console.log(this.$moment)
      return this.caraccessobj.record === null ? '' : this.caraccessobj.record.admission_time
    },
    playing_time() {
      return this.caraccessobj.record === null ? '' : this.caraccessobj.record.playing_time
    }
  },
  methods: {
    handleOk(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, fieldsValue) => {
        if (!err) {
          const values = {
            ...fieldsValue,
            admission_time: fieldsValue['admission_time'].format('YYYY-MM-DD HH:mm:ss'),
            playing_time: fieldsValue['playing_time'].format('YYYY-MM-DD HH:mm:ss')
          }
          console.log('Received values of form: ', values)
        }
      })
    },
    handleCancel(e) {
      console.log(e)
      this.caraccessobj.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.ant-form-item {
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100%;
  /deep/.ant-calendar-picker {
    width: 100%;
  }
}
.title {
  line-height: 40px;
}
</style>
