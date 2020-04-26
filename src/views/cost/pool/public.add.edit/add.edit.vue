<template>
  <div>
    <a-modal
      :title="`${publicobj.recored === null ? '新增' : '编辑'+publicobj.recored.property }`"
      ref="modalTitle"
      width="70%"
      v-model="publicobj.visible"
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol" :form="form">
        <a-row>
          <a-col :span="12" :offset="1">基本信息</a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="所属楼盘" :labelCol="{span: 3}" :wrapperCol="{span: 21}">
              <a-select
                :disabled="publicobj.recored != null"
                :value="publicobj.recored === null ? '' : publicobj.recored.property"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="费项编号">
              <a-input
                :value="publicobj.recored === null ? '' : publicobj.recored.feenumber"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="费项名称">
              <a-input
                :value="publicobj.recored === null ? '' : publicobj.recored.feename"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" :offset="1">收费相关</a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="单价">
              <a-input
                :value="publicobj.recored === null ? '' : publicobj.recored.price"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="收费周期(月)" placeholder="1">
              <a-select
                :disabled="publicobj.recored != null"
                :value="publicobj.recored === null ? '' : publicobj.recored.chargingcycle"
              >
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start">
          <a-col :offset="1">
            <a-form-item label="滞纳金比率" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
              <a-input placeholder="Basic usage" />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="(‰)，超期" :labelCol="{span: 9}" :wrapperCol="{span: 15}">
              <a-input placeholder="Basic usage" />
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="天后收取" :colon="false" :labelCol="{span: 20}"></a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="21" :offset="3">
            <a-form-item label :labelCol="{span: 0}" :wrapperCol="{span: 24}">
              <a-checkbox-group>
                <a-col :span="12">
                  <a-checkbox value="1" name="type">允许【生成台帐】时直接修改此费项单价</a-checkbox>
                </a-col>
                <a-col :span="12">
                  <a-checkbox value="2" name="type">打印收据时隐藏单价、读数、用量</a-checkbox>
                </a-col>
              </a-checkbox-group>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template slot="footer">
        <a-button type="primary" icon="save" @click="save">保存</a-button>&nbsp;
        <a-button type="primary" icon="delete" @click="del">删除</a-button>&nbsp;
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
        publicobj: {
            type: Object,
            default: () => {
                return {
                    visible: false
                }
            }
        }
    },
    created() {
        console.log(this.publicobj)
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
        del(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.publicobj.visible = false
                    console.log('Received values of form: ', values)
                }
            })
        },
        handleCancel() {
            this.publicobj.visible = false
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
