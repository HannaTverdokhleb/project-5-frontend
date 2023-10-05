export const selectUser = state => state.user;

export const selectTheme = state => state.user.theme;

export const selectAvatar = state => state.user.avatarURL;

export const selectIsLoading = state => state.user.isLoading;

export const selectErrorMessage = state => state.user.error;
