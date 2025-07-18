import createClip from "../services/manageClips.js";
import { useMutation } from "@tanstack/react-query";

export const useCreateClip = () =>
  useMutation({
    mutationFn: (clipData) => createClip(clipData),
  });
