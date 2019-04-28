import { fetchMemberList } from "@/api/users";
import { fetchMemberManamentList } from "@/api/orManagement";
import { fetchUser } from "@/api/test.js";

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
      console.log("response == ", response);
      commit("SET_MANAGEMENT_LIST", response.result);
    });
  },
  getTestData({ commit }, params) {
    fetchUser(params).then(response => {
      this.usetTable = response;
      console.log(response);
      commit("COMMIT_TEST_DATA", response);
    });
  }
};
export default actions;
