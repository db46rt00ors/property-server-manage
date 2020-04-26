<template>
  <div class="search-house">
    <a-row>
      <a-col :span="4">
        <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="请选择住宅:">
            <a-select placeholder="please select your zone">
              <a-select-option value="1">小区AAA</a-select-option>
              <a-select-option value="2">小区BBB</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="20">
        <a-row>
          <a-row class="title" type="flex" justify="start">
            <h1 class="housinginformation-header">查看 第1栋 楼宇信息</h1>
            <a-cascader
              class="cascader"
              :options="options"
              @change="onChange"
              placeholder="Please select"
            />
          </a-row>
          <buildinginformation></buildinginformation>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import housinginformation from './searchComp/housinginformation'
import buildinginformation from './searchComp/buildinginformation'
import unitinformation from './searchComp/unitinformation'
export default {
    data() {
        return {
            labelCol: { span: 10 },
            wrapperCol: { span: 10 },
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
        }
    },
    components: {
        housinginformation,
        buildinginformation,
        unitinformation
    }
}
</script>

<style scoped lang="less">
.search-house {
    background-color: #fff;
    padding: 20px 0;
    min-height: 500px;
}
.title {
    margin-bottom: 20px;
    .housinginformation-header {
        margin-bottom: 0;
        line-height: 32px;
        margin-left: 40px;
    }
    .cascader {
        margin-left: 20px;
        width: 330px;
    }
}
</style>
