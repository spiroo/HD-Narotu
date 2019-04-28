const mutations = {
  //保存token
  COMMIT_TOKEN(state, object) {
    state.token = object.token;
  },
  //保存标签
  TAGES_LIST(state, arr) {
    state.tagsList = arr;
  },
  IS_COLLAPSE(state, bool) {
    state.isCollapse = bool;
  },
  SET_USER_LIST(state, payload) {
    console.log("payload = ", payload);
    state.userList = payload;
  },
  SET_MANAGEMENT_LIST(state, payload) {
    console.log("management = ", payload);
    state.manegementList = payload;
  },
  SET_TABLE_LIST(state, payload) {
    statusbar.tebleData = payload;
  },
  COMMIT_ROLE_LIST(state, payload) {
    state.roleList = payload;
  },
<<<<<<< HEAD
  COMMIT_DETAIL_LIST(state, payload) {
    state.DetailList = payload;
  },
  COMMIT_TABLE_COUNT(state, payload) {
    state.tableCount = parseInt(payload);
    console.log(payload)
  },

=======
  // 测试
  COMMIT_TEST_DATA(state, payload) {
    state.testData = payload;
  },
  // 保存条数
  COMMIT_DATA_COUNT(state, payload) {
    state.dataCount = parseInt(payload, 10);
  }
>>>>>>> 120d68e7b464c9e3db84847e5c3631fc43d57896
};

export default mutations;
