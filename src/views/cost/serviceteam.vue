<template>
  <div class="content">
    <a-row>
      <a-form :form="form" layout="inline">
        <a-form-item label="选择楼盘">
          <a-select
            style="width: 120px"
            @change="chooseestate"
            v-decorator="['chooseestate', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          >
            <a-select-option value="1">1</a-select-option>
            <a-select-option value="2">2</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-row>
    <a-row class="setting">
      <a-button type="primary" icon="plus-circle" @click="add">新增</a-button>
    </a-row>
    <a-row>
      <a-table
        :columns="columns"
        :dataSource="data"
        @change="paginationChange"
        position="bottom"
        :pagination="pagination"
        :rowSelection="rowSelection"
        :scroll="{ y: 450 }"
      >
        <a slot="group_name" slot-scope="text, recored" @click="edit(recored)">{{ text }}</a>
      </a-table>
    </a-row>
    <add-edit :serviceteamobj="serviceteamobj"></add-edit>
  </div>
</template>

<script>
import _ from 'lodash'
import addEdit from './serviceteam.add.edit/addEdit'
const columns = [
    {
        align: 'center',
        width: '7%',
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
        title: '组名称',
        dataIndex: 'group_name',
        scopedSlots: { customRender: 'group_name' }
    },
    {
        align: 'center',
        title: '服务楼宇',
        width: '30%',
        dataIndex: 'service_building'
    },
    {
        align: 'center',
        title: '客服人员',
        dataIndex: 'customer_service'
    },
    {
        align: 'center',
        title: '创建日期',
        dataIndex: 'creat_date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.creat_date - b.creat_date
    }
]

const data = []
for (let i = 0; i < 200; i++) {
    data.push({
        key: i,
        property: '中东首座',
        group_name: _.sample(['菜批市场客服组', '宣武子公司客服', '朝阳子公司客服', '中东首座客服组2']),
        service_building: _.sample(
            [
                '孔雀英国宫-1号楼,孔雀英国宫-2号楼,孔雀英国宫-3号楼,孔雀英国宫-4号楼,电子大厦-第1栋,电子大厦-第2栋',
                '中东首座-1号楼,中东首座-2号楼,',
                '中东首座-3号楼,中东首座-4号楼,'
            ],
            1
        ),
        customer_service: _.sample([
            '系统管理员,诸葛经理,物业用户2,综合版用户',
            '诸葛经理,物业系统管理员,商业版用户',
            '物业系统管理员,综合版用户',
            '物业用户1,商业版用户',
            '物业用户2,住宅版用户',
            '物业用户3,住宅版用户',
            '综合版用户',
            '住宅版用户',
            '商业版用户,HR基础版用户',
            'HR标准版用户',
            'HR基础版用户,HR集团版用户',
            'HR集成用户',
            'HR集团版用户',
            'HR企业版用户,OA标准版用户',
            'OA标准版用户'
        ]),
        creat_date: 1
    })
}
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
            serviceteamobj: {
                visible: false,
                recored: ''
            }
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
        edit(recored) {
            this.serviceteamobj.visible = true
            this.serviceteamobj.recored = recored
        },
        add() {
            this.serviceteamobj.visible = true
            this.serviceteamobj.recored = null
        },
        chooseestate(value) {
            console.log(value)
        }
    },
    components: {
        addEdit
    }
}
</script>

<style scoped lang="less">
.content {
    max-height: 800px;
    .setting {
        margin: 10px 0;
    }
}
</style>
