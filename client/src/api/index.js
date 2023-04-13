import { io } from 'socket.io-client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setData } from 'redux/slices/tickerSlice';



export const tickerApi = createApi({
  reducerPath: 'tickerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getQuotes: build.query({
      queryFn() {
        return { data: null }
      },
      async onCacheEntryAdded(
        quotes,
        { updateCachedData, cacheDataLoaded, dispatch }
      ) {
        await cacheDataLoaded;
        const socket = io.connect('http://localhost:4000');
        socket.emit('start');
        socket.on('ticker', function (response) {
          const res = Array.isArray(response) ? response : [response];
          updateCachedData((currentCachedData) => { currentCachedData = res })
          dispatch(setData(res));
        });
      }
    })
  })
})

export const { useGetQuotesQuery } = tickerApi;