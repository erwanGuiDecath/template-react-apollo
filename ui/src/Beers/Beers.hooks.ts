import { gql, useQuery } from "@apollo/client";
import { Beer } from "../../types/graphql";

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

export function useBeers(): { beers: Beer[], loading: boolean } {
  const { data, loading } = useQuery(GET_BEERS);
  return { beers: data?.beers || [], loading }
}
