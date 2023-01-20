import { writable } from "svelte/store";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const signin = (cb) => {
  return fakeAuth.signin(() => {
    auth.update((prevAuth) => ({
      ...prevAuth,
      auth: "user"
    }));
    cb();
  });
};

const signout = (cb) => {
  return fakeAuth.signout(() => {
    auth.update((prevAuth) => ({
      ...prevAuth,
      auth: null
    }));
    cb();
  });
};

export const auth = writable({
  signin,
  signout,
  user: null
});
