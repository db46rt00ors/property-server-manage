<template>
  <div class="content">
    <a-row>
      <a-form :form="form" layout="inline">
        <a-form-item label="选择楼盘">
          <a-select placeholder="选择楼盘" class="select" v-decorator="['select_estate']">
            <a-select-option value="1">楼盘1</a-select-option>
            <a-select-option value="2">楼盘2</a-select-option>
            <a-select-option value="3">楼盘3</a-select-option>
            <a-select-option value="4">楼盘4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="收费方式">
          <a-select
            placeholder="全部"
            class="select"
            v-decorator="[
              'ownerType',
              {initialValue: '全部'}
            ]"
          >
            <a-select-option value="1">全部</a-select-option>
            <a-select-option value="2">按住户</a-select-option>
            <a-select-option value="3">按房屋面积</a-select-option>
            <a-select-option value="4">按使用面积</a-select-option>
            <a-select-option value="5">按阁楼面积</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-row>
    <a-row class="setting">
      <a-button type="primary" icon="plus-circle" @click="showAddModal">新增</a-button>
    </a-row>
    <a-row>
      <a-table
        :columns="columns"
        :dataSource="data"
        @change="paginationChange"
        position="bottom"
        :pagination="pagination"
        :rowSelection="rowSelection"
        :scroll="{ x: 1900, y: 450 }"
      ></a-table>
    </a-row>
    <add :visibleObj="visibleObj"></add>
  </div>
</template>

<script>
import add from './enactment-dialog/add'
import _ from 'lodash'
const columns = [
  {
    align: 'center',
    fixed: 'left',
    title: '编号',
    dataIndex: 'key',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.key - b.key
  },
  {
    align: 'center',
    title: '所属楼盘',
    dataIndex: 'property'
  },
  {
    align: 'center',
    title: '费项编号',
    dataIndex: 'feenumber',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.feenumber - b.feenumber
  },
  {
    align: 'center',
    title: '费项名称',
    dataIndex: 'feename'
  },
  {
    align: 'center',
    title: '收费方式',
    dataIndex: 'chargemethod'
  },
  {
    align: 'center',
    title: '单价',
    dataIndex: 'price'
  },
  {
    align: 'center',
    title: '允许改价',
    dataIndex: 'pricechanges'
  },
  {
    align: 'center',
    title: '阶梯收费',
    dataIndex: 'laddercharge'
  },
  {
    align: 'center',
    title: '收费周期',
    dataIndex: 'chargingcycle'
  },
  {
    align: 'center',
    title: '催交提醒',
    dataIndex: 'reminder'
  },
  {
    align: 'center',
    title: '催交天数',
    dataIndex: 'daystorush'
  },
  {
    align: 'center',
    title: '续费提醒',
    dataIndex: 'renewalreminder'
  },
  {
    align: 'center',
    title: '续费天数',
    dataIndex: 'renewaldays'
  },
  {
    align: 'center',
    title: '关联费项',
    dataIndex: 'relatedfees'
  },
  {
    align: 'center',
    title: '滞纳金比率',
    dataIndex: 'penalty'
  },
  {
    align: 'center',
    title: '超期天数',
    dataIndex: 'dayspastdue'
  },
  {
    align: 'center',
    title: '隐藏打印',
    dataIndex: 'hideprinting'
  }
]

const data = []
for (let i = 0; i < 200; i++) {
  data.push({
    key: i,
    property: '中东首座',
    feenumber: '0017',
    feename: _.sample(
      [
        '阁楼采暖费',
        '卫生费',
        '车位费',
        '停车管理费',
        '水电费',
        '物业费',
        '污水处理费',
        '车库管理费',
        '二次排污费',
        '电梯电费',
        '其他费用',
        '阶梯水费',
        '取暖费'
      ],
      1
    ),
    chargemethod: _.sample(
      [
        '按住户',
        '按房屋面积',
        '自定义',
        '按加建面积',
        '按车位面积',
        '按使用量',
        '按车库面积',
        '按储藏室面积',
        '按阁楼面积',
        '按使用面积'
      ],
      1
    ),
    price: _.random(1, 1000),
    pricechanges: _.sample(['是', '否'], 1),
    laddercharge: _.sample(['是', '否'], 1),
    chargingcycle: 1,
    reminder: _.sample(['是', '否'], 1),
    daystorush: 0,
    renewalreminder: _.sample(['是', '否'], 1),
    renewaldays: 15,
    relatedfees: _.sample(['电费', '水费'], 1),
    penalty: 5,
    dayspastdue: 7,
    hideprinting: _.sample(['是', '否'], 1)
  })
}

export default {
  data() {
    return {
      visibleObj: {
        addvisible: false,
        importexcelvisible: false
      },
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
      selectedRows: []
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
    showAddModal() {
      this.visibleObj.addvisible = true
    },
    showImportExcelModal() {
      this.visibleObj.importexcelvisible = true
    },
    start() {
      console.log(this.selectedRows)
      this.$confirm({
        title: '确认对话框',
        content: `确认要处理选中的${this.selectedRows.length}项记录吗？`,
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel() {}
      })
    },
    disable() {
      this.$confirm({
        title: '确认对话框',
        content: `确认要处理选中的${this.selectedRows.length}项记录吗？`,
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel() {}
      })
    }
  },
  components: {
    add
  }
}
</script>

<style lang="less" scoped>
.select {
  width: 160px;
  /deep/ input,
  /deep/ .ant-select-selection {
    border-radius: 4px;
  }
}
.retrievingcontent-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.setting {
  margin: 10px 0;
}
</style>
