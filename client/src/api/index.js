import { io } from 'socket.io-client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setData } from 'redux/slices/tickerSlice';


export const socket = io.connect('http://localhost:4000');

export const tickerApi = createApi({
  reducerPath: 'tickerApi',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getQuotes: build.query({
      queryFn(interval) {
        return { data: null }
      },
      async onCacheEntryAdded(
        interval,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        await cacheDataLoaded;
        socket.connect()
        socket.emit('start', interval);
        socket.on('ticker', function (response) {
          const res = Array.isArray(response) ? response : [response];
          updateCachedData((currentCachedData) => { currentCachedData = res })
          dispatch(setData(res));
        });
        await cacheEntryRemoved;
        socket.disconnect();
        socket.off('ticker');
      }
    }),
  })
})

export const { useGetQuotesQuery, useGetQuotesIntervalQuery } = tickerApi;