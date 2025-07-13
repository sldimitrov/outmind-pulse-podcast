import {api} from "../services/api.js";
import {useMutation} from "@tanstack/react-query";

export const useSubscribeUser = () => {
  return useMutation({
    mutationFn: api.subscribeUser
  })
}
