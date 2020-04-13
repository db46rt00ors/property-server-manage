<template>
  <div>
    <a-modal title="新增" width="60%" v-model="visibleObj.addvisible">
      <a-form-model
        :label-col="labelCol"
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :wrapper-col="wrapperCol"
      >
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="选择楼盘" prop="chooseestate">
              <a-select v-model="form.chooseestate">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="楼宇名称" prop="buildingname">
              <a-select v-model="form.buildingname" placeholder="please select your zone">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="单元/楼层" prop="unitandfloor">
              <a-select v-model="form.unitandfloor">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="房间名称" prop="roomname">
              <a-select v-model="form.roomname" placeholder="please select your zone">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="申请人" prop="applicant">
              <a-input v-model="form.applicant"></a-input>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="联系电话" prop="phonenumber">
              <a-input v-model="form.phonenumber"></a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="申请时间" prop="applicationtime">
              <a-date-picker
                v-model="form.applicationtime"
                type="date"
                placeholder="Pick a date"
                style="width: 100%;"
              />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="状态">
              <a-input disabled v-model="form.status"></a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-model-item
              prop="decorationcontent"
              label="请修内容"
              :labelCol="{span: 3}"
              :wrapperCol="{span: 21}"
            >
              <a-input v-model="form.decorationcontent" type="textarea"></a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-model-item
              prop="decorationcontent"
              label="请修内容"
              :labelCol="{span: 3}"
              :wrapperCol="{span: 21}"
            >
              <a-input v-model="form.decorationcontent" type="textarea"></a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="18">
            <a-form-model-item label="参考附件" :labelCol="{span: 4}" :wrapperCol="{span: 20}">
              <a-select>
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="5" style="margin-top:9px;" :offset="1">
            <a-button icon="arrow-down" style="margin-right:10px;">下载</a-button>
            <a-button icon="delete">删除</a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="18" style="margin-top:9px;" :offset="1">
            <a-col :span="8">
              <a-form-model-item label="选择附件" :labelCol="{span: 10}" :wrapperCol="{span: 14}">
                <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
                  <a-button>
                    <a-icon type="upload" />选择上传文件
                  </a-button>
                </a-upload>
              </a-form-model-item>
            </a-col>
            <a-col :span="3" offset="2">
              <a-button
                type="primary"
                @click="handleUpload"
                :disabled="fileList.length === 0"
                :loading="uploading"
                style="margin-top: 9px;"
              >{{ uploading ? '上传中' : '开始上传' }}</a-button>
            </a-col>
            <a-col :span="6">
              <a-button style="margin-top: 9px;" @click="handleCancel">关闭</a-button>
            </a-col>
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
import reqwest from 'reqwest' // ajax上传插件
export default {
    data() {
        return {
            labelCol: { lg: { span: 6 }, sm: { span: 6 } },
            wrapperCol: { lg: { span: 18 }, sm: { span: 18 } },
            form: {
                chooseestate: [],
                buildingname: [],
                unitandfloor: [],
                roomname: [],
                applicant: '',
                phonenumber: '',
                applicationtime: undefined,
                status: '待审批',
                decorationcontent: ''
            },
            fileList: [],
            uploading: false,
            rules: {
                chooseestate: [{ required: true, message: '选择楼盘必须填写', trigger: 'change' }],
                buildingname: [{ required: true, message: '楼宇名称必须填写', trigger: 'change' }],
                unitandfloor: [{ required: true, message: '单元楼层必须填写', trigger: 'change' }],
                roomname: [{ required: true, message: '单元楼层必须填写', trigger: 'change' }],
                applicant: [{ required: true, message: '申请人必须填写', trigger: 'blur' }],
                phonenumber: [{ required: true, message: '联系电话必须填写', trigger: 'blur' }],
                applicationtime: [{ required: true, message: '申请时间必须填写', trigger: 'change' }],
                decorationcontent: [{ required: true, message: '装修内容必须填写', trigger: 'blur' }]
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
          this.visibleObj.addvisible = false
        },
        handleRemove(file) {
            const index = this.fileList.indexOf(file)
            const newFileList = this.fileList.slice()
            newFileList.splice(index, 1)
            this.fileList = newFileList
        },
        beforeUpload(file) {
            this.fileList = [...this.fileList, file]
            return false
        },
        handleUpload() {
            const { fileList } = this
            const formData = new FormData()
            fileList.forEach(file => {
                formData.append('files[]', file)
            })
            this.uploading = true

            // 上传
            reqwest({
                url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                method: 'post',
                processData: false,
                data: formData,
                success: () => {
                    this.fileList = []
                    this.uploading = false
                    this.$message.success('upload successfully.')
                },
                error: () => {
                    this.uploading = false
                    this.$message.error('upload failed.')
                }
            })
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
</style>
