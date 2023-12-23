import { api } from "@/services/api";

export const getTodoList = async (activityId: number) => {
	const { data } = await api.get('todo-items', { params: { activity_group_id: activityId } });
	return data;
}

export const getTodo = async (id: number) => {
	const { data } = await api.get(`todo-items/${id}`);
	return data;
}

export const postTodo = async (v: { activity_group_id: number; title: string; priority: string }) => {
	const { data } = await api.post('todo-items', v);
	return data;
}

export const putTodo = async (id: number, v: { is_active: number, title: string; priority: string }) => {
	const { data } = await api.patch(`todo-items/${id}`, { ...v, is_active: v.is_active === 1 ? 1 : 0 });
	return data;
}

export const deleteTodo = async (id: number) => {
	const { data } = await api.delete(`todo-items/${id}`);
	return data;
}