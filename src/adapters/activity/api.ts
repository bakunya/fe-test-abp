import { api } from "@/services/api";

export const getActivityList = async () => {
	const { data } = await api.get('activity-groups', { params: { email: "bakunya.dev@gmail.com" } });
    return data;
}

export const getActivity = async (id: number) => {
	const { data } = await api.get(`activity-groups/${id}`);
    return data;
}

export const postActivity = async (title: string) => {
	const { data } = await api.post('activity-groups', { title, email: "bakunya.dev@gmail.com" });
	return data;
}

export const putActivity = async (id: number, title: string) => {
	const { data } = await api.patch(`activity-groups/${id}`, { title });
	return data;
}

export const deleteActivity = async (id: number) => {
	const { data } = await api.delete(`activity-groups/${id}`);
	return data;
}