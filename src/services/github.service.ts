import client from "../configs/axios";

interface FetchListOptions {
  page?: number;
  limit?: number;
}

const fetchList = async (username: string, options: FetchListOptions | undefined) => {

  const page = options?.page || 1;
  const limit = options?.limit || 15;

  const response = await client.get(`/users/${username}/gists`, { params: { page, per_page: limit } });
  return response.data || [];
};

export default { fetchList };
