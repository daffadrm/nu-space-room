import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactApi = createApi({
	reducerPath: 'contactApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8281/',
		// baseUrl: `http://10.10.200.193:8281/`,
	}),
	tagTypes: ['contact'],
	endpoints: (builder) => ({
		getConfigRoom: builder.query({
			query: () => `get_config`,
			invalidatesTags: ['contact'],
		}),
		getListByDate: builder.query({
			query: (datetime) => `get_list_by_time?datetime=${datetime}`,
			invalidatesTags: ['contact'],
		}),
	}),
});
export const { useGetConfigRoomQuery, useGetListByDateQuery } = contactApi;
