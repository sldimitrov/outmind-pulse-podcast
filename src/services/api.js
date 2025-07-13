import {subscribeUser} from "./subscribersService.js";

export const api = {
  subscribeUser: async (email) => {
    return subscribeUser(email)
  }
}
