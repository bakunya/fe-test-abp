import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteActivity, getActivity, getActivityList, postActivity, putActivity } from "./api";
import { queryClient } from "@/App";

export const useGetActivityList = () => {
	return useQuery({
		queryKey: ['get-activity-list'],
		queryFn: async () => await getActivityList(),
		retry: 3,
		refetchOnMount: false,
		refetchInterval: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,
	});
};

export const useGetActivity = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ['get-activity', id],
		queryFn: async () => await getActivity(id),
		retry: 3,
		refetchOnMount: false,
		refetchInterval: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,
	});
}

export const usePostActivity = () => {
	return useMutation({
		mutationKey: ['post-activity'],
		mutationFn: async ({ title }: { title: string }) => await postActivity(title),
		onSuccess: (_res, _payload, _context) => {
			queryClient.invalidateQueries({
				queryKey: ['get-activity-list']
			})
		}
	})
}

export const usePutActivity = () => {
	return useMutation({
		mutationKey: ['put-activity'],
		mutationFn: async ({ id, title }: { id: number; title: string }) => await putActivity(id, title),
		onSuccess: (_res, _payload, _context) => {
			queryClient.invalidateQueries({
				queryKey: ['get-activity-list']
			})
		}
	})
}


export const useDeleteActivity = () => {
	return useMutation({
		mutationKey: ['put-activity'],
		mutationFn: async ({ id }: { id: number }) => await deleteActivity(id),
		onSuccess: (_res, _payload, _context) => {
			queryClient.invalidateQueries({
				queryKey: ['get-activity-list']
			})
		}
	})
}