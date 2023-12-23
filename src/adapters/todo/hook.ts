import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteTodo, getTodo, getTodoList, postTodo, putTodo } from "./api";
import { queryClient } from "@/App";

export const useGetTodoList = (activityId: number) => {
	return useQuery({
		queryKey: ['get-Todo-list'],
		queryFn: async () => await getTodoList(activityId),
		retry: 3,
		refetchOnMount: false,
		refetchInterval: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,
	});
};

export const useGetTodo = ({ id }: { id: number }) => {
	return useQuery({
		queryKey: ['get-Todo', id],
		queryFn: async () => await getTodo(id),
		retry: 3,
		refetchOnMount: false,
		refetchInterval: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,
	});
}

export const usePostTodo = () => {
	return useMutation({
		mutationKey: ['post-Todo'],
		mutationFn: async (v: { activity_group_id: number; title: string; priority: string }) => await postTodo(v),
		onSuccess: (_res, _payload, _context) => {
			queryClient.invalidateQueries({
				queryKey: ['get-Todo-list']
			})
		}
	})
}

export const usePutTodo = () => {
	return useMutation({
		mutationKey: ['put-Todo'],
		mutationFn: async (v: { id: number, toSave: { is_active: number, title: string; priority: string } }) => await putTodo(v.id, v.toSave),
		onSuccess: (_res, _payload, _context) => {
			queryClient.invalidateQueries({
				queryKey: ['get-Todo-list']
			})
		}
	})
}


export const useDeleteTodo = () => {
	return useMutation({
		mutationKey: ['put-Todo'],
		mutationFn: async ({ id }: { id: number }) => await deleteTodo(id),
		onSuccess: (_res, _payload, _context) => {
			queryClient.invalidateQueries({
				queryKey: ['get-Todo-list']
			})
		}
	})
}