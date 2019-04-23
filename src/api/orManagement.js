import { post } from './request';

// 获取用户列表


export const fetchMemberManamentList = (params) => post('/api/server/modules/structure/organizationalStructureList', params);