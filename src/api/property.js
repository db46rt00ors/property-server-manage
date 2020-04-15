import api from './index'
import { axios } from '@/utils/request'

export function oneStep(params) {
    return axios({
        url: api.oneStep,
        method: 'get',
        data: params
    })
}
