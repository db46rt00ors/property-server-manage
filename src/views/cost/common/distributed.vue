<template>
  <div class="content">
    <a-row>
      <a-col :span="4">
        <MyTree :treeData="treeData"></MyTree>
      </a-col>
      <a-col :span="20">
        <a-row>
          <div class="title">402室 应交的物业费 （提示：自定义 的费用可以随时修改单位价格）</div>
          <a-table
            :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :dataSource="tableData"
            size="small"
            :scroll="{ y: 300 }"
          >
            <span slot="chargemethod" slot-scope="chargemethod, record">
              <a-tag :color="record.color">{{ chargemethod }}</a-tag>
            </span>
          </a-table>
        </a-row>
        <a-row type="flex" justify="start" class="lastcost">
          <div class="title">剩余的费用项目</div>
          <a-button>添加费用</a-button>
          <a-button>删除费用</a-button>
          <a-button>刷新</a-button>
        </a-row>
        <a-row>
          <a-table
            :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange2 }"
            :columns="columns"
            :dataSource="tableData2"
            size="small"
            :scroll="{ y: 300 }"
          ></a-table>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import MyTree from '@/components/MyTree'
import _ from 'lodash'
const columns = [
    {
        align: 'center',
        title: '费项编号',
        dataIndex: 'feenumber'
    },
    {
        align: 'center',
        title: '费项名称',
        dataIndex: 'feename'
    },
    {
        align: 'center',
        title: '收费方式',
        dataIndex: 'chargemethod',
        scopedSlots: { customRender: 'chargemethod' }
    },
    {
        align: 'center',
        title: '单位价格',
        dataIndex: 'unitprice'
    },
    {
        align: 'center',
        title: '收费周期(月)',
        dataIndex: 'chargecycle'
    },
    {
        align: 'center',
        title: '楼层系数',
        dataIndex: 'floorcoefficient'
    },
    {
        align: 'center',
        title: '使用量倍数',
        dataIndex: 'usageamount'
    }
]
const columns2 = [
    {
        align: 'center',
        title: '费项编号',
        dataIndex: 'feenumber'
    },
    {
        align: 'center',
        title: '费项名称',
        dataIndex: 'feename'
    },
    {
        align: 'center',
        title: '收费方式',
        dataIndex: 'chargemethod',
        scopedSlots: { customRender: 'chargemethod' }
    },
    {
        align: 'center',
        title: '单位价格',
        dataIndex: 'unitprice'
    },
    {
        align: 'center',
        title: '收费周期(月)',
        dataIndex: 'chargecycle'
    }
]
const tableData2 = [
    {
        key: 1,
        feenumber: _.random(1000, 5000),
        feename: '费项名称' + _.random(1000, 5000),
        chargemethod: '按加建面积',
        unitprice: _.random(1, 240),
        chargecycle: 1,
        floorcoefficient: 0,
        usageamount: 1
    }
]
export default {
    data() {
        return {
            columns,
            columns2,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            treeData: {
                name: '121小区',
                children: [
                    {
                        name: '第一栋',
                        children: [
                            {
                                name: '一单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '二单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '三单元',
                                children: [{ name: '101' }, { name: '102' }]
                            }
                        ]
                    },
                    {
                        name: '第二栋',
                        children: [
                            {
                                name: '一单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '二单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '三单元',
                                children: [{ name: '101' }, { name: '102' }]
                            }
                        ]
                    },
                    {
                        name: '第三栋',
                        children: [
                            {
                                name: '一单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '二单元',
                                children: [{ name: '101' }, { name: '102' }]
                            },
                            {
                                name: '三单元',
                                children: [{ name: '101' }, { name: '102' }]
                            }
                        ]
                    }
                ]
            },
            tableData2
        }
    },
    computed: {
        tableData() {
            const data = []
            for (let i = 0; i < 46; i++) {
                data.push({
                    key: i + 1,
                    feenumber: _.random(1000, 5000),
                    feename: '费项名称' + _.random(1000, 5000),
                    chargemethod: _.sample([
                        '自定义',
                        '按使用量',
                        '按房屋面积',
                        '按加建面积',
                        '按住户',
                        '按车位面积',
                        '按车库面积',
                        '按阁楼面积',
                        '按储藏室面积'
                    ]),
                    unitprice: _.random(1, 240),
                    chargecycle: 1,
                    floorcoefficient: 0,
                    usageamount: 1
                })
            }
            // 给tag上颜色
            data.forEach(function(item, index) {
                switch (item.chargemethod) {
                    case '自定义':
                        item.color = 'chocolate'
                        break
                    case '按使用量':
                        item.color = 'red'
                        break
                    case '按房屋面积':
                        item.color = 'gray'
                        break
                    case '按加建面积':
                        item.color = 'gray'
                        break
                    case '按车库面积':
                        item.color = 'purple'
                        break
                    case '按车位面积':
                        item.color = 'purple'
                        break
                    case '按储藏室面积':
                        item.color = 'cyan'
                        break
                    case '按阁楼面积':
                        item.color = 'cyan'
                        break
                    default:
                        item.color = 'blue'
                        break
                }
            })
            console.log(data)
            return data
        }
    },
    methods: {
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys)
            this.selectedRowKeys = selectedRowKeys
        },
        onSelectChange2(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys)
            this.selectedRowKeys = selectedRowKeys
        }
    },
    components: {
        MyTree
    }
}
</script>

<style lang='less' scoped>
.content {
    background-color: #fff;
    padding: 20px 0;
    min-height: 500px;
    .title {
        text-indent: 5px;
        color: #333;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    .lastcost {
        button {
            margin-left: 10px;
            margin-top: 4px;
        }
    }
}
</style>
