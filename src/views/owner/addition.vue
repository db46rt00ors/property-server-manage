<template>
  <div class="search-house">
    <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="6">
          <a-form-item label="请选择楼盘:">
            <a-select placeholder="please select your zone" v-decorator="['region']">
              <a-select-option value="1">小区AAA</a-select-option>
              <a-select-option value="2">小区BBB</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="房屋查询">
            <a-cascader
              class="cascader"
              :options="options"
              @change="onChange"
              v-decorator="['cascader']"
              placeholder="Please select"
            />
          </a-form-item>
        </a-col>
        <a-col :span="18">
          <div>
            <h1 class="housinginformation-header">查看 第1栋 楼宇信息</h1>
            <a-row>
              <a-col :span="8">
                <a-form-item label="加建面积" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-input
                    v-decorator="[
                      'area',
                      { rules: [{ required: true, message: '加建面积必须填写', trigger: 'blur' }] },
                    ]"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="加建时间" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-input
                    v-decorator="[
                      'time',
                      { rules: [{ required: true, message: '加建时间必须填写', trigger: 'blur' }] },
                    ]"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="加建状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-select placeholder="please select your zone" v-decorator="['status']">
                    <a-select-option value="0">正常</a-select-option>
                    <a-select-option value="1">停用</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-form-item label="加建说明" :labelCol="{span: 2}" :wrapperCol="{span: 22}">
                <a-textarea v-decorator="['explanation']"></a-textarea>
              </a-form-item>
            </a-row>
            <a-row type="flex" justify="center">
              <a-button @click="save">保存</a-button>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 16 }, sm: { span: 16 } },
            form: this.$form.createForm(this),
            options: [
                {
                    value: '第一栋',
                    label: '第一栋',
                    children: [
                        {
                            value: '一单元',
                            label: '一单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        },
                        {
                            value: '二单元',
                            label: '二单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: '第二栋',
                    label: '第二栋',
                    children: [
                        {
                            value: '一单元',
                            label: '一单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        },
                        {
                            value: '二单元',
                            label: '二单元',
                            children: [
                                {
                                    value: '101',
                                    label: '101'
                                },
                                {
                                    value: '102',
                                    label: '102'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    methods: {
        onChange(selectedKeys, info) {
            console.log(selectedKeys, info)
        },
        save(e) {
            e.preventDefault()
            this.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    this.$emit('nextStep')
                    console.log('Received values of form: ', values)
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
.search-house {
    background-color: #fff;
    padding: 20px;
    padding-right: 40px;
    min-height: 500px;
}
</style>
