import { Store } from "pullstate";

export const AuthStore = new Store({
  is_logged_in: false,
  user_type: null,
  token: null,
});
