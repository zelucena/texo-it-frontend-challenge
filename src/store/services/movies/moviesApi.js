import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://tools.texoit.com',
        }),
    endpoints: (builder) => ({
        /**
         * the api seems not to have default values for page number and size. Winner and year are optional
         * the code below is intended to set some defaults before querying
         */
        getMovieData: builder.query({
            query: (query) => {
                const { page, size, winner, year } = query || { };
                const params = new URLSearchParams();
                params.set('page', page || 0);
                params.set('size', size || 50);
                if (Number(year)) {
                    params.set('year', year);
                }
                if (winner !== undefined) {
                    params.set('winner', winner);
                }
                return `/backend-java/api/movies?${params.toString()}`;
            },
        }),
        getYearsWithMultipleWinners: builder.query({
            query: () => '/backend-java/api/movies?projection=years-with-multiple-winners',
        }),
        getStudios: builder.query({
            query: () => '/backend-java/api/movies?projection=studios-with-win-count',
        }),
        getAwardsInterval: builder.query({
            query: () => '/backend-java/api/movies?projection=max-min-win-interval-for-producers',
        }),
        getMovieWinnersByYear: builder.query({
            query: (year) => `/backend-java/api/movies?winner=true&year=${year}`,
        }),
    }),
})

export const {
    useGetMovieDataQuery,
    useGetYearsWithMultipleWinnersQuery,
    useGetStudiosQuery,
    useGetAwardsIntervalQuery,
    useGetMovieWinnersByYearQuery,
} = moviesApi;

export default moviesApi;