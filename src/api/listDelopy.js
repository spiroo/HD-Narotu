import { post } from './request';

// 获取用户列表

export const listDelopy = (params) => post('/api/modules/structure/organizationalStructureDetail');