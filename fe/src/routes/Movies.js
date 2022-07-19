import { gql, useApolloClient, useQuery } from "@apollo/client";
import React, { useEffect } from "react";

const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

const Movies = () => {
  return <div>hi</div>;
};

export default Movies;
