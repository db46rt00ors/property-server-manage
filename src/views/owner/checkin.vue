<template>
  <div class="search-house">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-row>
        <a-col :span="6">
          <a-form-model-item label="请选择住宅:">
            <a-select v-model="form.region" placeholder="please select your zone">
              <a-select-option value="1">小区AAA</a-select-option>
              <a-select-option value="2">小区BBB</a-select-option>
            </a-select>
          </a-form-model-item>

          <MyTree :treeData="treeData"></MyTree>
        </a-col>
        <a-col :span="18">
          <div>
            <h1 class="housinginformation-header">查看 第1栋 楼宇信息</h1>
            <a-row>
              <a-col :span="8">
                <a-form-model-item label="入住日期" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-input />
                </a-form-model-item>
              </a-col>
              <a-col :span="8">
                <a-form-model-item label="使用状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-select placeholder="please select your zone">
                    <a-select-option value="0">空闲</a-select-option>
                    <a-select-option value="1">自主</a-select-option>
                    <a-select-option value="2">出租</a-select-option>
                    <a-select-option value="3">转卖</a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
import MyTree from '@/components/MyTree'

export default {
    data() {
        return {
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 16 }, sm: { span: 16 } },
            treeData: {
                name: '121小区',
                children: [
                    {
                        name: '第一栋',
                        children: [
                            {
                                name: '一单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '二单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '三单元',
                                children: [{ name: '101' }, { name: '102' }]
                            }
                        ]
                    },
                    {
                        name: '第二栋',
                        children: [
                            {
                                name: '一单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '二单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '三单元',
                                children: [{ name: '101' }, { name: '102' }]
                            }
                        ]
                    },
                    {
                        name: '第三栋',
                        children: [
                            {
                                name: '一单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '二单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '三单元',
                                children: [{ name: '101' }, { name: '102' }]
                            }
                        ]
                    }
                ]
            },
            form: {
                name: '',
                region: undefined,
                date1: undefined,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    components: {
        MyTree
    }
}
</script>

<style scoped>
.search-house {
    background-color: #fff;
    padding: 20px;
    min-height: 500px;
}
</style>
