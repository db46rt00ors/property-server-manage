<template>
  <div>
    <a-modal :title="`编辑${editobj.estate_name}`" width="70%" v-model="editobj.editvisible">
      <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="12" :offset="1">基本信息</a-col>
        </a-row>
        <a-row class="input-disabled">
          <a-col :span="12">
            <a-form-item label="房产名称">
              <a-input disabled v-model="editobj.estate_name" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="楼层">
              <a-input disabled v-model="editobj.floor" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row class="input-disabled">
          <a-col :span="12">
            <a-form-item label="费项名称">
              <a-input disabled v-model="editobj.feename" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="收费方式">
              <a-input disabled v-model="editobj.chargemethod" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row class="input-disabled">
          <a-col :span="12">
            <a-form-item label="费项单价">
              <a-input disabled v-model="editobj.price" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :offset="1">系数设定</a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="楼层系数">
              <a-select
                v-decorator="[
                  'floor_coefficient',
                  { rules: [{ required: true, message: '必须填写楼层系数!',trigger: 'change' }] }
                ]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="使用量倍数">
              <a-select
                v-decorator="[
                  'usageamount',
                  { rules: [{ required: true, message: '必须填写使用量倍数!',trigger: 'change' }] }
                ]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template slot="footer">
        <a-button type="primary" icon="save" @click="save">保存</a-button>&nbsp;
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
        editobj: {
            type: Object,
            default: () => {
                return {
                    editvisible: false
                }
            }
        }
    },
    methods: {
        save(e) {
            e.preventDefault()
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.$emit('nextStep')
                    console.log('Received values of form: ', values)
                }
            })
        },
        handleCancel(e) {
            console.log(e)
            this.editobj.editvisible = false
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
.input-disabled {
    input {
        color: #333;
        background-color: #fff;
        border: none;
        cursor: auto;
    }
}
</style>
