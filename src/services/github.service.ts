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

const fetch = async (id: string) => {

  const response = await client.get(`/gists/${id}`);
  return response.data;
};


const fetchUserInfo = async (username: string) => {
  const response = await client.get(`/users/${username}`, {});
  return response.data;

}

export default { fetch, fetchList, fetchUserInfo };
