<template>
  <div>
    <a-modal title="新增" width="70%" v-model="visibleObj.addvisible">
      <a-form-model
        :label-col="labelCol"
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :wrapper-col="wrapperCol"
      >
        <a-row>
          <a-col :span="24">
            <a-form-model-item label="所属楼盘" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-select>
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="费项编号" prop="ownercode">
              <a-input v-model="form.ownercode"></a-input>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="费项名称" prop="ownername">
              <a-input v-model="form.ownername"></a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="收费方式">
              <a-select>
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="收费周期(月)" placeholder="1">
              <a-select disabled>
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="单价">
              <a-input></a-input>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="关联费项">
              <a-select placeholder="please select your zone">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="21" :offset="3">
            <a-form-model-item label :labelCol="{span: 0}" :wrapperCol="{span: 24}">
              <a-checkbox-group>
                <a-col :span="12">
                  <a-checkbox value="1" name="type">允许【生成台帐】时直接修改此费项单价</a-checkbox>
                </a-col>
                <a-col :span="12">
                  <a-checkbox value="2" name="type">打印收据时隐藏单价、读数、用量</a-checkbox>
                </a-col>
              </a-checkbox-group>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start">
          <a-col :offset="1">
            <a-form-model-item label="滞纳金比率" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
              <a-input placeholder="Basic usage" />
            </a-form-model-item>
          </a-col>
          <a-col>
            <a-form-model-item label="(‰)，超期" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
              <a-input placeholder="Basic usage" />
            </a-form-model-item>
          </a-col>
          <a-col>
            <a-form-model-item label="天后收取" :colon="false" :labelCol="{span: 20}">
            </a-form-model-item>
          </a-col>
        </a-row>

        <a-row type="flex" justify="start">
          <a-col :span="5" :offset="1">
            <a-form-model-item label="催缴提醒" :labelCol="{span: 10}" :wrapperCol="{span: 12}">
              <a-radio-group>
                <a-radio value="1">是</a-radio>
                <a-radio value="0">否</a-radio>
              </a-radio-group>
            </a-form-model-item>
          </a-col>
          <a-col>
            <a-form-model-item label="从未收取的缴费限期前 " :colon="false" :labelCol="{span: 12}" :wrapperCol="{span: 12}">
              <a-input placeholder="Basic usage" />
            </a-form-model-item>
          </a-col>
          <a-col>
            <a-form-model-item label="天发送短信/微信" :colon="false" :labelCol="{span: 23}"></a-form-model-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start">
          <a-col :span="5" :offset="1">
            <a-form-model-item label="续费提醒" :labelCol="{span: 10}" :wrapperCol="{span: 12}">
              <a-radio-group>
                <a-radio value="1">是</a-radio>
                <a-radio value="0">否</a-radio>
              </a-radio-group>
            </a-form-model-item>
          </a-col>
          <a-col>
            <a-form-model-item label="从未收取的缴费限期前 " :colon="false" :labelCol="{span: 12}" :wrapperCol="{span: 12}">
              <a-input placeholder="Basic usage" />
            </a-form-model-item>
          </a-col>
          <a-col>
            <a-form-model-item label="天发送短信/微信" :colon="false" :labelCol="{span: 23}"></a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
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
            form: {
                affiliatedcompany: [],
                ownercode: '',
                ownername: ''
            },
            rules: {
                affiliatedcompany: [{ required: true, message: '所属公司必须填写', trigger: 'change' }],
                ownercode: [{ required: true, message: '业主编码必须填写', trigger: 'blur' }],
                ownername: [{ required: true, message: '业主姓名必须填写', trigger: 'blur' }]
            }
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
        saveandnew() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$notification.success({
                        message: '提示',
                        duration: 3,
                        description: '保存成功，请新增下一条记录！！'
                    })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        saveandclose() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.visibleObj.addvisible = false
                } else {
                    console.log('error submit!!')
                    return false
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
