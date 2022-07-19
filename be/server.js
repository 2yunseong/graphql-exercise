import { ApolloServer, gql } from "apollo-server";

let tweets = [
  {
    id: "1",
    text: "Hello",
    userId: "3",
  },
  {
    id: "2",
    text: "second Hello",
    userId: "4",
  },
  {
    id: "3",
    text: "third Hello",
    userId: "5",
  },
];

let users = [
  {
    id: "1",
    firstName: "nico",
    lastName: "las",
  },
  {
    id: "2",
    firstName: "yunseong",
    lastName: "lee",
  },
  {
    id: "3",
    firstName: "seohyun",
    lastName: "lee",
  },
  {
    id: "4",
    firstName: "jeongeun",
    lastName: "kim",
  },
  {
    id: "5",
    firstName: "hyeeun",
    lastName: "lee",
  },
  {
    id: "6",
    firstName: "sumin",
    lastName: "kim",
  },
];
const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    fullName: String
  }

  type Tweet {
    id: ID!
    text: String!
    userId: ID!
    author: User!
  }

  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    ping: String
  }

  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    deleteTweet(id: ID): Boolean
    postUser(firstName: String, lastName: String): User
    deleteUser(id: ID): Boolean
  }
`;

const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    ping() {
      return "pong";
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((t) => t.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((e) => e.id !== id);
      return true;
    },
    postUser(root, { firstName, lastName }) {
      const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
      };
      users.push(newUser);
      return newUser;
    },
    deleteUser(root, { id }) {
      const isPresence = tweets.find((user) => user.id === id);
      if (!isPresence) return false;
      users = users.filter((user) => user.id !== id);
      return true;
    },
  },

  User: {
    firstName({ firstName }) {
      return firstName;
    },
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },

  Tweet: {
    author({ userId }) {
      return users.find((user) => user.id === userId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`${url}`);
});
