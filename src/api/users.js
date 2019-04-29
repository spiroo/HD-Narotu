import { get, post } from './request';

// 获取用户列表
export const fetchUserList = (params) => get('/api/users', params);

// export const fetchMemberList = (params) => post('/api/mobile/personnel/getPartyPersonList.do', params);