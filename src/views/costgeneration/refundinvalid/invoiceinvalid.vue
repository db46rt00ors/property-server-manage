<template>
  <a-row class="content">
    <a-form :form="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="6">
          <a-form-item label="选择楼盘">
            <a-select
              v-decorator="['chooseestate', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            >
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="楼宇">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="单元/楼层">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="房间">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="退款单号">
            <a-input></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收款人">
            <a-input></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="收款方式">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="缴费类型">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <a-form-item label="费用起期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="费用止期">
            <a-date-picker></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="物业类型">
            <a-select>
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="业主姓名">
            <a-input></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="mgt-10 mgb-10">
        <a-col class="setting left">
          <a-button type="primary" icon="search" class="mgl-10">查询</a-button>
          <a-button type="primary" icon="redo" class="mgl-10">重置</a-button>
        </a-col>
        <a-col class="right mgr-50">
          <a-input class="mgr-20" placeholder="请输入房间名称"></a-input>
          <a-button type="primary">定位房间</a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-table
          :columns="columns"
          :dataSource="data"
          @change="paginationChange"
          position="bottom"
          :pagination="pagination"
          :rowSelection="rowSelection"
          bordered
          :scroll="{y: 400}"
        >
          <a slot="setting" slot-scope="text, record" @click="edit(record)">作废</a>
        </a-table>
      </a-row>
    </a-form>
    <document-invalid :documentinvalidobj="documentinvalidobj"></document-invalid>
  </a-row>
</template>

<script>
import documentInvalid from './document.invalid/invalid.vue'
const columns = [
    { width: '14%', align: 'center', title: '房产名称', dataIndex: 'property_name', key: 'property_name' },
    { align: 'center', title: '收费日期', dataIndex: 'charge_date', key: 'charge_date' },
    { align: 'center', title: '收费单号', dataIndex: 'toll_number', key: 'toll_number' },
    { align: 'center', title: '业主', dataIndex: 'owner', key: 'owner' },
    { align: 'center', title: '费用额', dataIndex: 'fee_amount', key: 'fee_amount' },
    { align: 'center', title: '收款人', dataIndex: 'payee', key: 'payee' },
    { align: 'center', title: '收据号', dataIndex: 'receipt_number', key: 'receipt_number' },
    { align: 'center', title: '发票号', dataIndex: 'invoice_number', key: 'invoice_number' },
    { align: 'center', title: '操作', dataIndex: 'setting', key: 'setting', scopedSlots: { customRender: 'setting' } }
]

const data = [
    {
        key: '1',
        property_name: '盈科大厦第1栋第1层101室',
        charge_date: '2011-09-08',
        toll_number: 'B01SF111103010',
        owner: '夏侯敦',
        fee_amount: '899.00',
        payee: '系统管理员',
        receipt_number: 'sj20130020',
        invoice_number: 'fp20130004',
        setting: ''
    },
    {
        key: '2',
        property_name: '中东首座1号楼1单元201室',
        charge_date: '2013-09-08',
        toll_number: 'BBB01SF111103010',
        owner: '夏侯敦111',
        fee_amount: '8199.00',
        payee: '系统管理员',
        receipt_number: 'sjz20160020',
        invoice_number: 'fpz20160004',
        setting: ''
    }
]
export default {
    data() {
        return {
            form: this.$form.createForm(this),
            pagination: {
                defaultPageSize: 10,
                showTotal: total => `共 ${total} 条数据`,
                showQuickJumper: true,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20'],
                onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
            },
            data,
            columns,
            selectedRows: [],
            documentinvalidobj: {
                visible: false,
                record: null
            },
            labelCol: { span: 8 },
            wrapperCol: { span: 16 }
        }
    },
    computed: {
        rowSelection() {
            return {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                },
                onSelect: (record, selected, selectedRows) => {
                    console.log(record, selected, selectedRows)
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.selectedRows = selectedRows
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.selectedRows = selectedRows
                    console.log(selected, selectedRows, changeRows)
                }
            }
        }
    },
    methods: {
        paginationChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter)
        },
        edit(record) {
            this.documentinvalidobj.visible = true
            this.documentinvalidobj.record = record
        }
    },
    components: {
        documentInvalid
    }
}
</script>

<style lang="less" scoped>
.ant-form-item {
    margin-top: 5px;
    margin-bottom: 0px;
    width: 90%;
}
.ant-col {
    line-height: 40px;
    height: 40px;
}
.content {
    height: 800px;
    background-color: #fff;
    padding: 10px;
    /deep/.ant-calendar-picker {
        width: 100%;
    }
}
.payment {
    /deep/ input {
        border: none;
        background: #fff;
        color: #333;
    }
}
.left {
    float: left;
}
.right {
    float: right;
    input {
        width: 150px;
    }
}
</style>
