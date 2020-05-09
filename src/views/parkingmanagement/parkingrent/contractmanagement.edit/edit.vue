<template>
  <div>
    <a-modal
      :title="`编辑-${parkinginformationobj.record === null ? '' : parkinginformationobj.record.contract_no}`"
      width="50%"
      v-model="parkinginformationobj.visible"
    >
      <a-row>
        <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-row>
            <a-col :span="12">
              <a-form-item label="车位编号">
                <a-input
                  class="input-disabled"
                  disabled
                  v-decorator="[
                    'parking_space_number',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.parking_space_number
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="合同编号">
                <a-input
                  v-decorator="[
                    'contract_no',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.contract_no
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="使用人" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
                <a-input
                  v-decorator="[
                    'user',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.user
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="签订日期">
                <a-input
                  v-decorator="[
                    'parking_space_number',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.parking_space_number
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="车牌号码">
                <a-input
                  v-decorator="[
                    'license_plate_number',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.license_plate_number
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="租期开始日">
                <a-input
                  v-decorator="[
                    'lease_term_start',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.lease_term.start
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="租期截止日">
                <a-input
                  v-decorator="[
                    'lease_term_end',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.lease_term.end
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="承租月数">
                <a-input
                  v-decorator="[
                    'lease_month',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: lease_month
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="月服务费">
                <a-input
                  v-decorator="[
                    'monthly_service_fee',
                    {
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.monthly_service_fee
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="停车证号">
                <a-input
                  v-decorator="[
                    'parking_permit_number',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.parking_permit_number
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="合同状态">
                <a-input
                  class="input-disabled"
                  disabled
                  v-decorator="[
                    'status',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.status
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item label="备注" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
                <a-input v-decorator="['remark']" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="20">
              <a-form-item label="下载附件" :labelCol="{span: 5}" :wrapperCol="{span: 19}">
                <a-input
                  v-decorator="[
                    'filelist',
                    {
                      initialValue: parkinginformationobj.record === null ? '' : parkinginformationobj.record.filelist
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4" class="mgt-5 pdl-10">
              <a-button @click="downloads">下载</a-button>
            </a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :offset="1">
              <a-form-item label="选择Excel文档" :labelCol="{span: 10}" :wrapperCol="{span: 14}">
                <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
                  <a-button>
                    <a-icon type="upload" />选择上传文件
                  </a-button>
                </a-upload>
              </a-form-item>
            </a-col>
            <a-col>
              <a-button
                class="mgt-5 mgl-5"
                type="primary"
                @click="handleUpload"
                :disabled="fileList.length === 0"
                :loading="uploading"
              >{{ uploading ? '上传中' : '开始上传' }}</a-button>
            </a-col>
          </a-row>
        </a-form>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
import reqwest from 'reqwest' // ajax上传插件

export default {
    props: {
        parkinginformationobj: {
            type: Object,
            default: () => {
                return {
                    visible: false
                }
            }
        }
    },
    data() {
        return {
            form: this.$form.createForm(this),
            fileList: [],
            uploading: false,
            labelCol: { span: 8 },
            wrapperCol: { span: 12 }
        }
    },
    computed: {
        lease_month() {
            if (this.parkinginformationobj.record === null) {
                return ''
            }
            var beginDate = new Date(this.parkinginformationobj.record.lease_term.start)
            var endDate = new Date(this.parkinginformationobj.record.lease_term.end)
            return (
                endDate.getFullYear() * 12 + endDate.getMonth() - (beginDate.getFullYear() * 12 + beginDate.getMonth())
            )
        }
    },
    methods: {
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
        },
        downloads() {
            console.log('下载文件')
        }
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>
