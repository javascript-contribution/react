import { useQuery } from "react-query";

// https://fakestoreapi.com/  Use different query from documentation. Also could operate put, delete methods on FAKE api

export const API = () => {
    const { isLoading, error, data } = useQuery<Error>("products", () =>
    fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    )
);

  return {
    data,
    isLoading,
    error
  }
}

// export const PRODUCT = () => async () => {
//     try {

//         const data = await queryClient.fetchQuery(queryKey, queryFn, {
     
//           staleTime: 10000,
     
//         })
//      return data
//       } catch (error) {
     
//         console.log(error)
     
//       }
// }