import Mock from 'mockjs2'
import { builder } from '../util'

const info = options => {
    console.log('options', options)
    const userInfo = {
        id: '4291d7da9005377ec9aec4a71ea837f',
        name: 'admin',
        username: 'user',
        password: 'user',
        avatar: '/avatar2.jpg',
        status: 1,
        telephone: '',
        lastLoginIp: '27.154.74.117',
        lastLoginTime: 1534837621348,
        creatorId: 'user',
        createTime: 1497160610259,
        merchantCode: 'TLif2btpzg079h15bk',
        deleted: 0,
        roleId: 'user',
        role: {}
    }
    // role
    const roleObj = {
        id: 'user',
        name: '管理员',
        describe: '拥有所有权限',
        status: 1,
        creatorId: 'system',
        createTime: 1497160610259,
        deleted: 0,
        permissions: [
            {
                roleId: 'user',
                permissionId: '901',
                permissionName: '个人办公'
            },
            {
                roleId: 'user',
                permissionId: '221',
                permissionName: '楼盘管理'
            },
            {
                roleId: 'user',
                permissionId: '223',
                permissionName: '业主信息'
            },
            {
                roleId: 'user',
                permissionId: '226',
                permissionName: '费项设置'
            }
        ]
    }

    userInfo.role = roleObj
    console.log(builder(userInfo), 'builder')
    return builder(userInfo)
}

Mock.mock(/\/api\/user\/info/, 'get', info)
