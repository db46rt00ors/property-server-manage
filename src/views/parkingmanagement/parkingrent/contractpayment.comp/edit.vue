<template>
  <div>
    <a-modal
      :title="`查看-${contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.contract_no}`"
      width="50%"
      v-model="contractpaymenteditobj.visible"
      :closable="false"
    >
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
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.parking_space_number
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="合同编号">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'contract_no',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.contract_no
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="使用人">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'user',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.user
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="签订日期">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'lease_term_start',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.lease_term.start
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
                class="input-disabled"
                disabled
                v-decorator="[
                  'license_plate_number',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.license_plate_number
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="停车证号">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'parking_permit_number',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.parking_permit_number
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="租期开始">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'lease_term_start',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.lease_term.start
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="租期截止">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'lease_term_end',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.lease_term.end
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
                class="input-disabled"
                disabled
                v-decorator="[
                  'lease_month',
                  {
                    initialValue: lease_month
                  }
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="月服务费">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'monthly_service_fee',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.monthly_service_fee
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="合同状态">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'status',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.status
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="合同备注" :labelCol="{span: 4}" :wrapperCol="{span: 18}">
              <a-input
                class="input-disabled"
                disabled
                v-decorator="[
                  'remark',
                  {
                    initialValue: contractpaymenteditobj.record === null ? '' : contractpaymenteditobj.record.remark
                  }
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: ['contractpaymenteditobj'],
    data() {
        return {
            form: this.$form.createForm(this),
            labelCol: { span: 8 },
            wrapperCol: { span: 12 }
        }
    },
    computed: {
        lease_month() {
            if (this.contractpaymenteditobj.record === null) {
                return ''
            }
            var beginDate = new Date(this.contractpaymenteditobj.record.lease_term.start)
            var endDate = new Date(this.contractpaymenteditobj.record.lease_term.end)
            return (
                endDate.getFullYear() * 12 + endDate.getMonth() - (beginDate.getFullYear() * 12 + beginDate.getMonth())
            )
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
