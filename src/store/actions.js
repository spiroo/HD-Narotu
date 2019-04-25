import { fetchMemberList } from "@/api/users";
import { fetchMemberManamentList } from '@/api/orManagement'

const actions = {
  getUserList({ commit }) {
    console.log("333");
    const params = {
      status: "5",
      vcGroupNo: "001000003"
    };
    fetchMemberList(params).then(response => {
      console.log("response == ", response);
      commit("SET_USER_LIST", response.result);
    });
    fetchMemberManamentList(params).then(response => {
      console.log('response == ', response);
      commit('SET_USER_LIST', response.result);
    });
  },
};
export default actions;
