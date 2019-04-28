const getters = {
  //你要计算的属性
  userList: state => state.userList,
  tableList: stata => stata.tableList,
  roleList: state => state.roleList,
  userToken: state => state.token,
  manegementList: state => state.manegementList,
<<<<<<< HEAD
  datacount:state => state.datacount,
=======
  courseList: state => state.courseList,
  // eslint-disable-next-line no-dupe-keys
  tableList: stata => stata.tableList,
  detailList: state => state.detailList,
  tableCount: state => state.tableCount,

  testData: state => state.testData,
  dataCount: state => state.dataCount
>>>>>>> 0b84b963ba9b66b84705e924c35d6205bd8fdbca
};

export default getters;
