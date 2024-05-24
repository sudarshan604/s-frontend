import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = () => {
  useQuery({
    queryKey: [""],
    queryFn: () => {},
  });
};

export default useFetch;
