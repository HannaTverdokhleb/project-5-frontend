export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectTheme = state => state.auth.user.theme;

export const selectAvatar = state => state.auth.user.avatarURL;

export const selectIsLoading = state => state.auth.isLoading;

export const selectErrorMessage = state => state.auth.error;
