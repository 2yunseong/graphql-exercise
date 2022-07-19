# Graph QL 실습

## 환경 구축
Back-end
```
npm init -y

npm i apollo-server graphql

npm i nodemon -D
```

Front-end
```
yarn create react-app fe

yarn add graphql

yarn add @apollo/client

yarn add react-router-dom@6
```

package.json
```json
  "scripts": {
    "dev": "nodemon server.js"
  }

  "type":"module" /* 추가 */
```

### Query

type을 Query로 한다면 REST API의 GET 과 같다.
```
  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }
```

type을 Mutation이라 한다면 REST API의 POST, DELETE, PUT처럼 사용할 수 있다.
```
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    deleteTweet(id: ID): Boolean
  }
```

### Nullable Type

Null이 되거나 string이 될수 있는 필드는 다음과 같이 표기한다.
```
  tweet(id: ID): Tweet
  tweet(id: ID): Tweet|null
```

`!`를 붙이면, 그 필드는 반드시 null이 아니여야 한다.

리스트의 요소가 null이 아니고 싶다면, 요소의 필드에도 `!`를 붙여준다.

```
  allTweets: [Tweet!]!
```

만약 요소안에 `!`를 붙여주지 않는다면, 값이 다음과 같이 들어갈 수도 있다.
```
  allTweets: [Tweet]!
  [Tweet, null, Tweet, ...]
```
