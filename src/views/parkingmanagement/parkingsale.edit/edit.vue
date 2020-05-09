<template>
  <div>
    <a-modal
      :title="`${parkingsaleobj.parking_status_val === null ? '' : `编辑-` + (parkingsaleobj.parking_status_val === 1 ? '已售' : '空闲')}`"
      width="50%"
      v-model="parkingsaleobj.visible"
      :closable="false"
    >
      <a-row>
        <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-row>
            <a-col :span="12">
              <a-form-item label="车位编号">
                <a-input
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'parking_space_number',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.parking_space_number
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="车位类别">
                <a-input
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'parking_category',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.parking_category
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="管理类别">
                <a-input
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'management_category',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.management_category
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="车位类型">
                <a-input
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'parking_type',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.parking_type
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="车位面积">
                <a-input
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'parking_area',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.parking_area
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="预售价格">
                <a-input
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'pre_sale_price',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.pre_sale_price
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
                  :class="{'input-disabled': parkingsaleobj.record != true}"
                  :disabled="parkingsaleobj.record === null ? true : false"
                  v-decorator="[
                    'parking_location',
                    {
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.parking_location
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
          <a-row class="mgt-20">
            <a-col :span="12">
              <a-form-item label="产权人">
                <a-input
                  v-decorator="[
                    'property_owner',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.property_owner
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="实售价格">
                <a-input
                  v-decorator="[
                    'sale_price',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.sale_price
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="车牌号码">
                <a-input
                  v-decorator="[
                    'license_plate_number',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.license_plate_number
                    }
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="停车证号">
                <a-input
                  v-decorator="[
                    'parking_permit_number',
                    {
                      rules: [{ required: true, message: 'Please input your note!' }],
                      initialValue: parkingsaleobj.record === null ? '' : parkingsaleobj.record.parking_permit_number
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
    props: ['parkingsaleobj'],
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
