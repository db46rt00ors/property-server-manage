<template>
  <div>
    <a-modal
      :title="`${serviceteamobj.recored === null ? '新增' : '编辑-'+serviceteamobj.recored.group_name }`"
      width="70%"
      v-model="serviceteamobj.visible"
      :destroyOnClose="true"
    >
      <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="8" :offset="4">
            <a-form-item label="所属楼盘">
              <a-select
                :disabled="serviceteamobj.recored != null"
                v-decorator="[
                  'property',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: serviceteamobj.recored === null ? '' : serviceteamobj.recored.property
                  }
                ]"
              >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="组名称">
              <a-input
                v-decorator="[
                  'group_name',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: serviceteamobj.recored === null ? '' : serviceteamobj.recored.group_name
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="20">
            <a-form-item label="客服人员">
              <a-input
                type="textarea"
                v-decorator="[
                  'customer_service',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: serviceteamobj.recored === null ? '' : serviceteamobj.recored.customer_service
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="1">
            <a-button icon="folder-add" @click="customer_service"></a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="20">
            <a-form-item label="服务楼宇">
              <a-input
                type="textarea"
                v-decorator="[
                  'service_building',
                  {
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: serviceteamobj.recored === null ? '' : serviceteamobj.recored.service_building
                  }
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="1">
            <a-button icon="folder-add" @click="service_building"></a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="20">
            <a-form-item label="组说明">
              <a-input
                type="textarea"
                v-decorator="[
                  'group_description'
                ]"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template slot="footer">
        <a-button type="primary" icon="save" @click="save">保存</a-button>&nbsp;
        <a-button type="primary" icon="delete" @click="del" v-if="serviceteamobj.recored">删除</a-button>&nbsp;
        <a-button type="primary" icon="delete" @click="saveandclose" v-else>保存并关闭</a-button>&nbsp;
        <a-button type="primary" icon="close-square" @click="handleCancel">关闭</a-button>
      </template>
    </a-modal>
    <transfer :transferobj="transferobj"></transfer>
  </div>
</template>

<script>
import transfer from './transfer'
export default {
    data() {
        return {
            labelCol: { lg: { span: 8 }, sm: { span: 8 } },
            wrapperCol: { lg: { span: 16 }, sm: { span: 16 } },
            form: this.$form.createForm(this),
            transferobj: {
                visible: false,
                mockData: [],
                targetKeys: []
            }
        }
    },
    props: {
        serviceteamobj: {
            type: Object,
            default: () => {
                return {
                    visible: false
                }
            }
        }
    },
    methods: {
        getMock(mockDataArr = [], targetKeysArr = []) {
            // 穿梭框模拟数据
            const targetKeys = []
            const mockData = []
            for (let i = 0; i < mockDataArr.length; i++) {
                const data = {
                    key: i.toString(),
                    title: mockDataArr[i],
                    chosen: false
                }
                for (let j = 0; j < targetKeysArr.length; j++) {
                    if (mockDataArr[i] === targetKeysArr[j]) {
                        console.log(data)
                        targetKeys.push(data.key)
                    }
                }

                mockData.push(data)
            }
            this.transferobj.mockData = mockData
            this.transferobj.targetKeys = targetKeys
            this.transferobj.visible = true
        },
        customer_service() {
            // 客服人员
            const mockDataArr = [
                'CRM管理员',
                'CRM客户专员',
                'HR标准版用户',
                'HR基础版用户',
                'HR集成用户',
                'HR集团版用户',
                'HR企业版用户',
                'OA标准版用户',
                'OA集成用户',
                'OA企业版用户',
                'Portal管理员',
                'Report管理员',
                'Report管理员2',
                'SCM管理员',
                'TSM管理员',
                'UsbKey用户',
                'VIP管理员',
                'Web用户',
                '田主管',
                '物业标准版用户',
                '物业高级版用户',
                '物业基础版用户',
                '物业集团版用户',
                '物业企业版用户',
                '物业收费版用户',
                '物业收租版用户',
                '西安幼儿园园长',
                '中东首座-1号楼',
                '中东首座-2号楼'
            ]
            const targetKeysArr = this.serviceteamobj.recored === null ? [] : this.serviceteamobj.recored.customer_service
                .split(',')
                .filter(item => item.length > 0)
            this.getMock(mockDataArr, targetKeysArr)
        },
        service_building() {
            const mockDataArr = [
                '孔雀英国宫-1号楼',
                '孔雀英国宫-2号楼',
                '孔雀英国宫-3号楼',
                '孔雀英国宫-4号楼',
                '电子大厦-第1栋',
                '电子大厦-第2栋',
                '中东首座-1号楼',
                '中东首座-2号楼'
            ]
            const targetKeysArr = this.serviceteamobj.recored === null ? [] : this.serviceteamobj.recored.service_building
                .split(',')
                .filter(item => item.length > 0)
            this.getMock(mockDataArr, targetKeysArr)
        },
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
        saveandclose(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.enactmentobj.visible = false
                    console.log('Received values of form: ', values)
                }
            })
        },
        del() {
            console.log('删除')
        },
        handleCancel() {
            this.serviceteamobj.visible = false
            this.serviceteamobj.recored = ''
        },
        checkboxChange(value) {
            console.log(value)
        }
    },
    components: {
        transfer
    }
}
</script>

<style lang='less' scoped>
.setting button {
    margin: 10px 0 10px 10px;
}
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
}
/deep/ .ant-checkbox-group {
    width: 100%;
}
/deep/ .ant-btn-icon-only {
    margin: 5px;
}
</style>
