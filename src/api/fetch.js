import { get} from './request';

// 获取用户列表
export const fetchUsers = (params) => get('/test/users', params);