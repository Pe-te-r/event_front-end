// export function useEventsByUserId(id: string) {
//   const {
//     data,
//     isLoading,
//     error,
//     isSuccess,
//     isError,
//   } = useQuery({
//     queryKey: ['events', id],
//     queryFn: () => fetchEventByUserId(id),g
//     enabled: !!id,
//   })

//   const events: EventTypeT[] = Array.isArray(data?.data) ? data.data : []

//   return {
//     events,
//     isLoading,
//     isError,
//     error,
//     isSuccess,
//   }
// }

