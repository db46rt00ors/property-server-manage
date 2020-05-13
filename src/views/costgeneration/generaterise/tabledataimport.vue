<template>
  <a-row class="content">
    <a-row class="title">
      <a-col :offset="1">
        <h1>待导入的明细帐</h1>
        <h6>操作步骤：1.生成Excel模板》2.参考帮助文档，手工填写Excel模板》3.执行导入(重复导入相同文档时,系统会覆盖上次导入的抄表数据!)</h6>
      </a-col>
    </a-row>
    <a-row>
      <a-form :form="form">
        <a-row>
          <a-form-item label="选择台账记录" :labelCol="{span: 3}" :wrapperCol="{span: 20}">
            <a-checkbox-group>
              <a-checkbox value="1" name="type">wy阶梯水费20200412中东首座</a-checkbox>
              <a-checkbox value="2" name="type">wy电梯电费20190828中东首座</a-checkbox>
            </a-checkbox-group>
          </a-form-item>
        </a-row>
        <a-row>
          <a-col :offset="1">
            <a-button type="primary">生成Excel模版</a-button>
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
              class="mgt-10 mgr-5 mgl-5"
              type="primary"
              @click="handleUpload"
              :disabled="fileList.length === 0"
              :loading="uploading"
            >{{ uploading ? '上传中' : '开始上传' }}</a-button>
          </a-col>
          <a-col>
            <a-button type="primary" class="mgt-10">确认导入</a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-row>
  </a-row>
</template>

<script>
import reqwest from 'reqwest' // ajax上传插件

export default {
    data() {
        return {
            form: this.$form.createForm(this),
            fileList: [],
            uploading: false
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
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    .title {
        h1 {
            font-size: 20px;
        }
        h6 {
            color: red;
        }
    }
    .ant-form-item {
        margin-top: 5px;
        margin-bottom: 0px;
    }
}
</style>
