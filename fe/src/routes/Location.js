import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_LOCATIONS = gql`
  query Locations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Location = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>loading...</p>;
  if (error) return <p> oops! something's wrong : {error}</p>;

  return (
    <div>
      {data.locations.map(({ id, name, description, photo }) => {
        return (
          <div key={id}>
            <h3>{name}</h3>
            <img
              width='400'
              height='250'
              alt='location-reference'
              src={`${photo}`}
            />
            <br />
            <h4>about location:</h4>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
