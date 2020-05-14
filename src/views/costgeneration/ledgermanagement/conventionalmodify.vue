<template>
  <div class="content">
    <a-tabs @change="callback" type="card">
      <a-tab-pane tab="按台账修改" key="1">
        <ledger></ledger>
      </a-tab-pane>
      <a-tab-pane tab="按明细修改" key="2">
        <detail></detail>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ledger from './ledgermanagement.comp/ledger'
import detail from './ledgermanagement.comp/detail'
export default {
    data() {
        return {}
    },
    methods: {
        callback(key) {
            console.log(key)
        }
    },
    components: {
        ledger,
        detail
    }
}
</script>

<style lang="less" scoped>
</style>
