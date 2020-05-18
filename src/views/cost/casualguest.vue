<template>
  <div class="content">
    <a-row>
      <a-col :span="6">
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="请选择住宅">
            <a-select placeholder="please select your zone" @change="houseChange" v-decorator="['select_community']">
              <a-select-option value="1">121小区</a-select-option>
              <a-select-option value="2">122小区</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="罚款查询">
            <a-cascader
              class="cascader"
              :options="options"
              @change="onChange"
              placeholder="Please select"
            />
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="18">
        <a-row type="flex" justify="end">
          <a-button type="primary" @click="save">保存</a-button>
          <a-button type="primary" @click="add" style="margin: 0 10px;">新增</a-button>
          <a-button type="primary" @click="del">删除</a-button>
        </a-row>
        <a-form :form="form" :label-col="{ span: 10 }" :wrapper-col="{ span: 14 }">
          <a-row>
            <a-col :span="16">
              <a-form-item label="选择楼盘" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-select
                  placeholder="please select your zone"
                  @change="estateChange"
                  v-decorator="['choose_estate']"
                >
                  <a-select-option value="1">中东首座</a-select-option>
                  <a-select-option value="2">盈科大厦</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="8">
              <a-form-item label="费项名称">
                <a-input v-decorator="['fee_name']" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="单位价格">
                <a-input v-decorator="['price']" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="16">
              <a-form-item label="上级费项" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-select
                  placeholder="please select your zone"
                  @change="feesChange"
                  v-decorator="['superior_fee']"
                >
                  <a-select-option value="1">121小区</a-select-option>
                  <a-select-option value="2">122小区</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="16">
              <a-form-item label="费项说明" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-input v-decorator="['fee_description']" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedRowKeys: [],
            labelCol: { lg: { span: 8 } },
            wrapperCol: { lg: { span: 16 } },
            form: this.$form.createForm(this),
            options: [
                {
                    value: '罚款',
                    label: '罚款',
                    children: [
                        {
                            value: '停车罚款',
                            label: '停车罚款',
                            children: [
                                {
                                    value: '广告罚款',
                                    label: '广告罚款'
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
                    value: '押金',
                    label: '押金',
                    children: [
                        {
                            value: '押金11',
                            label: '押金11',
                            children: [
                                {
                                    value: '押金22',
                                    label: '押金22'
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
        houseChange(value) {
            console.log(value)
        },
        feesChange(value) {
            console.log(value)
        },
        estateChange(value) {
            console.log(value)
        },
        save(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (err) {
                    return
                }
                console.log('Received values of form: ', values)
            })
        },
        add() {},
        del() {}
    }
}
</script>

<style lang='less' scoped>
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
</style>
