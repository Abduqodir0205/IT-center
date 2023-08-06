import api from '@/services/baseHttp.js'

export const fetchPhysicalStuffAll = async () => {
    return api.get('physical-stuff/all')
}