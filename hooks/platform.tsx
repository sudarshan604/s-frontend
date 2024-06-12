import { useMutation, useQuery } from "@tanstack/react-query";
import apiClients from "@/services/http-service";
import moment from "moment";
import { start } from "repl";
import usePostSchedule from "@/state-management/facebook/postSheduleStore";
interface FileInterface {
  image: {
    src: string;
  };
}

export interface MediaItemInterface {
  mediaType?: string;
  caption?: string;
  imgUrl?: string;
}

export interface SheduleInterface {
  start: Date;
  end: Date;
  facebook: MediaItemInterface[];
  instagram: MediaItemInterface[];
}

export const useUserPlatform = () => {
  const httpService = new apiClients("/platform/user-platform");

  return useQuery({
    queryKey: ["user-platform"],
    queryFn: httpService.get,
  });
};

export const useShedulePost = () => {
  const { refetch } = useGetShedulePost();
  const httpService = new apiClients<SheduleInterface>(
    "/shedule/create-shedule"
  );

  return useMutation({
    mutationFn: httpService.create,
    onSuccess: () => {
      refetch();
    },
  });
};

export const useGetShedulePost = () => {
  const httpService = new apiClients<SheduleInterface>("/shedule/shedule-post");

  return useQuery<SheduleInterface[]>({
    queryKey: ["shedule-post"],
    queryFn: httpService.get,
  });
};

export const useFileUpload = () => {
  const httpService = new apiClients<FileInterface>("/shedule/uploads");
  const { mutate } = useShedulePost();
  const shedule = usePostSchedule();

  return useMutation<FileInterface>({
    mutationFn: httpService.create,
    onSuccess: (data, err) => {
      // if (data) {
      //   const newdata = {
      //     imgUrl: data.image.src,
      //     start: shedule.start,
      //     mediaType: "image",
      //     platform: [
      //       { facebook: shedule.schedule.facebook },
      //       { instagram: shedule.schedule.instagram },
      //     ],
      //     caption: shedule.schedule.caption,
      //     end: moment(shedule.start).add(1, "hours").toDate(),
      //   };
      //   mutate(newdata);
      // }
    },
  });
};
