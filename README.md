## GraphQL with Movie API

### 1. 설치 라이브러리

1. graphql-yoga
2. babel-env
3. node-fetch

### 2. 개요

REST 방식을 사용하면 /users/ GET 이런 방식으로 요청을 보내게 된다.
하지만 이런식의 데이터 패칭을 할 때 필요하지 않은 정보까지 넘어오는데 이는 매우 비효율적이다.</br>

---

내가 만일 유저의 이름 정보만 필요하다 하더라도 email, nickname 등등 필요 없는 정보들이 오게 됨.
이를 `Over-fetching`이라고도 부른다.

또, 하나의 endpoint로의 요청으로는 충분한 데이터를 받지 못하는 상황이 있을 수 있다. user와 friend라는 endpoint로 두 번의 요청을 보내야 앱이 실행되는 상황이 발생할 수 있는데 이를 `Under-fetching`이라고도 부른다.

이 문제들을 해결할 수 있는 것 : GraphQL

## 3. 사용

query의 타입을 정의하고 resolver를 선언.
localhost:4000에서 playground가 제공됨.
