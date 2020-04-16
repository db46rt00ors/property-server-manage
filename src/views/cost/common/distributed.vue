<template>
  <div>
    <h1>费项分布</h1>
    <MyTree :treeData="treeData"></MyTree>
  </div>
</template>

<script>
import MyTree from '@/components/MyTree'
export default {
    data() {
        return {
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
            }
        }
    },
    components: {
        MyTree
    }
}
</script>

<style>
</style>
