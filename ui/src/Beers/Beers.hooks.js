import { gql, useQuery } from "@apollo/client";

const GET_BEERS = gql`
  query getBeers {
    beers {
      id
      title
      brands
      volume
    }
  }
`

export function useBeers() {
  const { data, loading } = useQuery(GET_BEERS);
  return { beers: data?.beers || [], loading }
}
