import { post } from './request';

// 获取用户列表


export const fetchMemberManamentList = (params) => post('/api/modules/structure/organizationalStructureList', params);
