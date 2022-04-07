const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUsername = (state) => state.auth.user.name;
const getUsertoken = (state) => state.auth.token;
const refreshUser = (state) => state.auth.refreshUser;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  refreshUser,
  getUsertoken,
};
export default authSelectors;
