import * as Types from './operations';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const BalloonDocument = gql`
    query balloon($id: String!) {
  balloon(id: $id) {
    id
    name
    color
    imageUrl
    description
    variant
    price
    availableSince
  }
}
    `;

export function useBalloonQuery(options: Omit<Urql.UseQueryArgs<Types.BalloonQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Types.BalloonQuery>({ query: BalloonDocument, ...options });
};
export const BalloonsDocument = gql`
    query balloons($filter: FilterInput, $sort: SortInput, $before: ID, $after: ID) {
  balloons(filter: $filter, sort: $sort, before: $before, after: $after) {
    edges {
      node {
        id
        name
        color
        imageUrl
        description
        variant
        price
        availableSince
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  }
}
    `;

export function useBalloonsQuery(options: Omit<Urql.UseQueryArgs<Types.BalloonsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Types.BalloonsQuery>({ query: BalloonsDocument, ...options });
};
