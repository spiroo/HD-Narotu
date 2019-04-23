import { fetchMemberList } from "@/api/users";
<<<<<<< HEAD
=======
import { fetchMemberManamentList } from '@/api/orManagement'
>>>>>>> 01d66daa51779bb2d21cf693827f00de27712a90

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
<<<<<<< HEAD
=======
    });
    fetchMemberManamentList(params).then(response => {
      console.log('response == ', response);
      commit('SET_USER_LIST', response.result);
>>>>>>> 01d66daa51779bb2d21cf693827f00de27712a90
    });
  }
  },
};
export default actions;
