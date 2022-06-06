## New Blog Server

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)

### Setting

1. Clone this repository
2. yarn package update

```
    yarn
```

3. Create .env file

```
    PORT=4000
```

### How to use

to start dev server

```
    yarn dev
```

build

```
    npx tsc
```

start

```
    yarn start
```

---

### Todo

- 기획

  - [ ] T-story 참고하여 기획정리

- 시작하기
  - [ ] 서버 미들웨어 세팅
  - [ ] Typescript 서버 개발 정형화 (MVC 모델)
  - [x] DB 생성 및 세팅 -> MariaDB
  - [x] DB 연동
  - [ ] HTTP 요청 헤더 세팅
        ->Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
  - [ ] DB 설계
