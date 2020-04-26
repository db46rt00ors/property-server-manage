<template>
  <div>
    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
      <a slot="unitcode" slot-scope="text, recored" @click="edit(recored)">{{ text }}</a>
      <template slot="operation" slot-scope="text, record">
        <a href="javascript:;" @click="seemqintain(text, record)">查看房间</a>
      </template>
    </a-table>
    <unit-edit :editObj="editObj"></unit-edit>
  </div>
</template>

<script>
import unitEdit from '../maintain-dialog/unit.edit'
const columns = [
    {
        title: '单元编码',
        dataIndex: 'unitcode',
        scopedSlots: { customRender: 'unitcode' }
    },
    {
        title: '单元名称',
        dataIndex: 'unitname'
    },
    {
        title: '开始楼层',
        dataIndex: 'startfloor'
    },
    {
        title: '结束楼层',
        dataIndex: 'endfloor'
    },
    {
        title: '开始房号',
        dataIndex: 'startroomnumber'
    },
    {
        title: '结束房号',
        dataIndex: 'endroomnumber'
    },
    {
        align: 'center',
        title: '编辑',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' }
    }
]
const data = [
    {
        key: '1',
        unitcode: 'B-1',
        unitname: '单元名称1',
        startfloor: '开始楼层',
        endfloor: '结束楼层',
        startroomnumber: '开始房号',
        endroomnumber: '结束房号'
    },
    {
        key: '2',
        unitcode: 'B-2',
        unitname: '单元名称1',
        startfloor: '开始楼层',
        endfloor: '结束楼层',
        startroomnumber: '开始房号',
        endroomnumber: '结束房号'
    },
    {
        key: '3',
        unitcode: 'B-3',
        unitname: '单元名称3',
        startfloor: '开始楼层',
        endfloor: '结束楼层',
        startroomnumber: '开始房号',
        endroomnumber: '结束房号'
    }
]

export default {
    name: 'Unitinformation',
    props: {
        activeKey: {
            type: Object,
            default: () => {
                return {
                    defaultKey: '1'
                }
            }
        }
    },
    data() {
        return {
            data,
            columns,
            editObj: {
                editvisible: false,
                unitcode: ''
            }
        }
    },
    computed: {
        rowSelection() {
            // eslint-disable-next-line no-unused-vars
            const { selectedRowKeys } = this
            return {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                }
            }
        }
    },
    methods: {
        edit(recored) {
            this.editObj.unitname = recored.unitname
            this.editObj.editvisible = true
        },
        callback(key) {
            console.log(key)
        },
        seemqintain(text, record) {
            this.activeKey.defaultKey = '4'
            this.$emit('set-unitinformation', record.unitname)
        }
    },
    components: {
        unitEdit
    }
}
</script>
