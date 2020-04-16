<template>
  <div class="search-house">
    <a-form-model
      :rules="rules"
      ref="ruleForm"
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-row>
        <a-col :span="6">
          <a-form-model-item label="请选择楼盘:">
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
                <a-form-model-item
                  label="加建面积"
                  prop="area"
                  :labelCol="{span: 6}"
                  :wrapperCol="{span: 18}"
                >
                  <a-input v-model="form.area" />
                </a-form-model-item>
              </a-col>
              <a-col :span="8">
                <a-form-model-item
                  label="加建时间"
                  prop="time"
                  :labelCol="{span: 6}"
                  :wrapperCol="{span: 18}"
                >
                  <a-input v-model="form.time" />
                </a-form-model-item>
              </a-col>
              <a-col :span="8">
                <a-form-model-item label="加建状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                  <a-select placeholder="please select your zone" v-model="form.status">
                    <a-select-option value="0">正常</a-select-option>
                    <a-select-option value="1">停用</a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-form-model-item label="加建说明" :labelCol="{span: 2}" :wrapperCol="{span: 22}">
                <a-textarea v-model="form.explanation"></a-textarea>
              </a-form-model-item>
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
            form: {
                region: [],
                area: '',
                time: '',
                status: [],
                explanation: ''
            },
            rules: {
                area: [{ required: true, message: '加建面积必须填写', trigger: 'blur' }],
                time: [{ required: true, message: '加建时间必须填写', trigger: 'blur' }]
            },
            treeData: {
                name: '666小区',
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
    padding-right: 40px;
    min-height: 500px;
}
.mytree {
    margin-top: 15px;
}
</style>
