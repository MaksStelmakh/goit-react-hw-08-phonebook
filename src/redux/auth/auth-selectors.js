const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
