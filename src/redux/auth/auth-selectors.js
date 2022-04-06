const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUsername = (state) => state.auth.user.name;
const refreshUser = (state) => state.auth.refreshUser;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  refreshUser,
};
export default authSelectors;
