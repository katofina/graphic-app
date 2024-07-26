export const startSession = (
  email: string | null,
  accessToken: string,
): void => {
  sessionStorage.setItem("email", email!);
  sessionStorage.setItem("accessToken", accessToken);
};

export const getSession = (): {
  email: string | null;
  accessToken: string | null;
} => {
  return {
    email: sessionStorage.getItem("email"),
    accessToken: sessionStorage.getItem("accessToken"),
  };
};

export const endSession = (): void => {
  sessionStorage.clear();
};

export const isLoggedIn = (): string | null => {
  return getSession().accessToken;
};
