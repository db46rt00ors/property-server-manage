<template>
  <div>
    <a-modal
      :title="`${parkinginformationobj.isAdd === null ? '新增' : `编辑-`+parkinginformationobj.record.parking_code}`"
      width="50%"
      v-model="parkinginformationobj.visible"
      :closable="false"
    >
      <a-row>
        <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-row>
            <a-col :span="12">
              <a-form-item label="选择楼盘">
                <a-select
                  :class="{'input-disabled': parkinginformationobj.isAdd != true}"
                  :disabled="parkinginformationobj.isAdd === false ? true : false"
                  v-decorator="[
                    'property',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.property
                    }
                  ]"
                >
                  <a-select-option value="zhongdong">中东首座</a-select-option>
                  <a-select-option value="yingke">盈科大厦</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="车位编号">
                <a-input
                  :class="{'input-disabled': parkinginformationobj.isAdd != true}"
                  :disabled="parkinginformationobj.isAdd === false ? true : false"
                  v-decorator="[
                    'parking_code',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.parking_code
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="车位类别">
                <a-select
                  v-decorator="[
                    'parking_category',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.parking_category
                    }
                  ]"
                >
                  <a-select-option value="shang">地上</a-select-option>
                  <a-select-option value="xia">地下</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="管理类别">
                <a-select
                  :class="{'input-disabled': parkinginformationobj.record.status === '已售' || parkinginformationobj.record.status === '已租'}"
                  :disabled="parkinginformationobj.record.status === '已售' || parkinginformationobj.record.status === '已租' ? true : false"
                  v-decorator="[
                    'management_category',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.management_category
                    }
                  ]"
                >
                  <a-select-option value="zulin">物业租赁</a-select-option>
                  <a-select-option value="ziyong">业主自用</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="车位类型">
                <a-select
                  v-decorator="[
                    'parking_typeof',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: '标准车位'
                    }
                  ]"
                >
                  <a-select-option value="biaozhun">标准车位</a-select-option>
                  <a-select-option value="xiaoxing">小型车位</a-select-option>
                  <a-select-option value="大xing">大型车位</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="当前状态">
                <a-select
                  :class="{'input-disabled': parkinginformationobj.record.status === '已售' || parkinginformationobj.record.status === '已租'}"
                  :disabled="parkinginformationobj.record.status === '已售' || parkinginformationobj.record.status === '已租' ? true : false"
                  v-decorator="[
                    'status',
                    {
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.status
                    }
                  ]"
                >
                  <a-select-option value="0">已售</a-select-option>
                  <a-select-option value="1">已租</a-select-option>
                  <a-select-option value="2">空闲</a-select-option>
                </a-select>
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
            <a-col :span="12">
              <a-form-item label="预售价格">
                <a-input
                  v-decorator="[
                    'pre_sale_price',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.pre_sale_price
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="预租价格">
                <a-input
                  v-decorator="[
                    'advance_rental_price',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.advance_rental_price
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="车位位置">
                <a-input
                  v-decorator="[
                    'position',
                    {
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.position
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="车位面积">
                <a-input
                  v-decorator="[
                    'area',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkinginformationobj.isAdd === null ? '' : parkinginformationobj.record.area
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: ['parkinginformationobj'],
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 12 }
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    /deep/.ant-input {
        width: 100%;
    }
}
.ant-form-item {
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>
