<template>
  <a-modal
    width="50%"
    :title="`作废【${ documentinvalidobj.record === null ? '无' : documentinvalidobj.record.property_name }】单据`"
    v-model="documentinvalidobj.visible"
    @ok="handleOk"
    :destroyOnClose="true"
    okText="确认作废"
  >
    <a-row>
      对应收款单号： {{ documentinvalidobj.record === null ? '无' : documentinvalidobj.record.toll_number,
      }} 收款方式：现金 作废日期： {{ invalidDate }}
    </a-row>
    <a-row>
      房号： {{
        documentinvalidobj.record === null ? '无' : documentinvalidobj.record.property_name
      }} 业主名称：{{
        documentinvalidobj.record === null ? '无' : documentinvalidobj.record.owner
      }} 收据号：{{
        documentinvalidobj.record === null ? '无' : documentinvalidobj.record.receipt_number
      }} 发票号：{{
        documentinvalidobj.record === null ? '无' : documentinvalidobj.record.invoice_number
      }}
    </a-row>
    <a-row>
      <a-table :columns="columns" :dataSource="data" bordered :scroll="{x: 1200}" size="small"></a-table>
    </a-row>
    <a-row>上次欠缴:0.00元 本次应收:{{ sum }}元 本次实收:{{ sum }}元 本次欠缴:0.00元</a-row>
    <a-row>作废金额（大写）： {{ sum | dx }}</a-row>
  </a-modal>
</template>

<script>
import moment from 'moment'
const columns = [
    { width: '6%', align: 'center', dataIndex: 'key', key: 'key', title: '序号' },
    { width: '10%', align: 'center', dataIndex: 'fee_name', key: 'fee_name', title: '费项名称' },
    { align: 'center', dataIndex: 'price', key: 'price', title: '单价' },
    { align: 'center', dataIndex: 'last_reading', key: 'last_reading', title: '上次读数' },
    { align: 'center', dataIndex: 'this_reading', key: 'this_reading', title: '本次读数' },
    { align: 'center', dataIndex: 'the_actual_amount', key: 'the_actual_amount', title: '实际用量' },
    { width: '8%', align: 'center', dataIndex: 'expenses', key: 'expenses', title: '费用金额' },
    { width: '8%', align: 'center', dataIndex: 'late_fee', key: 'late_fee', title: '滞纳金' },
    { width: '8%', align: 'center', dataIndex: 'this_cope', key: 'this_cope', title: '本次应付' },
    { width: '8%', align: 'center', dataIndex: 'mitigate', key: 'mitigate', title: '减免' },
    { width: '12%', align: 'center', dataIndex: 'fees_start_end', key: 'fees_start_end', title: '费用起止' },
    { width: '10%', align: 'center', dataIndex: 'payment_deadline', key: 'payment_deadline', title: '缴费期限' },
    { align: 'center', dataIndex: 'overdue', key: 'overdue', title: '超期' }
]
const data = [
    {
        key: '1',
        fee_name: '取暖费',
        price: '171.00',
        last_reading: '0.00',
        this_reading: '0.00',
        the_actual_amount: '89.55',
        expenses: '13999.50',
        late_fee: '0.00',
        this_cope: '15999.00',
        mitigate: '0.00',
        fees_start_end: '2020-01-09 2020-01-18',
        payment_deadline: '2020-03-03',
        overdue: '0'
    },
    {
        key: '2',
        fee_name: '电费(普通按月)',
        price: '0.50',
        last_reading: '0.00',
        this_reading: '0.00',
        the_actual_amount: '489.55',
        expenses: '3999.09',
        late_fee: '0.00',
        this_cope: '5999.00',
        mitigate: '0.00',
        fees_start_end: '2020-02-09 2020-02-18',
        payment_deadline: '2020-04-03',
        overdue: '240'
    }
]
export default {
    props: {
        documentinvalidobj: {
            type: Object,
            default: () => {
                return {
                    visible: false,
                    recored: null
                }
            }
        }
    },
    data() {
        return {
            columns,
            data
        }
    },
    computed: {
        invalidDate() {
            return moment().format('LL')
        },
        sum() {
            let sum = 0
            this.data.forEach(item => {
                sum += +item.expenses
            })
            return sum
        }
    },
    filters: {
        dx(n) {
            if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return '数据非法'
            let unit = '千百拾亿千百拾万千百拾元角分'
            let str = ''
            n += '00'
            const p = n.indexOf('.')
            if (p >= 0) n = n.substring(0, p) + n.substr(p + 1, 2)
            unit = unit.substr(unit.length - n.length)
            for (let i = 0; i < n.length; i++) str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i)
            return str
                .replace(/零(千|百|拾|角)/g, '零')
                .replace(/(零)+/g, '零')
                .replace(/零(万|亿|元)/g, '$1')
                .replace(/(亿)万|壹(拾)/g, '$1$2')
                .replace(/^元零?|零分/g, '')
                .replace(/元$/g, '元整')
        }
    },
    methods: {
        handleOk() {
            // console.log(moment)
        }
    }
}
</script>

<style scoped lang="less">
</style>
