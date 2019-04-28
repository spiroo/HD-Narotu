const getters = {
  //你要计算的属性
  userList: state => state.userList,
  tableList: stata => stata.tableList,
  roleList: state => state.roleList,
  userToken: state => state.token,
  manegementList: state => state.manegementList,
  testData: state => state.testData,
  dataCount: state => state.dataCount
};

export default getters;
