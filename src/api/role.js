import { get, post } from './request';

//登陆
export const fetchRoleList = (params) => post('/api/modules/registe/roleList', params);
