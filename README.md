# Polling System API

A polling system API is an application programming interface that allows developers to create, manage, and retrieve data from a polling system. A polling system is a platform that enables users to create polls, surveys, and quizzes and gather responses from participants.

## Tech Stack

**Server:** 
| ![nodejs](https://github.com/akashpadampalle/habit-tracker/assets/45806342/6c4aaecf-20b2-444d-ae90-7130d31586bb) | ![expressjs](https://github.com/akashpadampalle/habit-tracker/assets/45806342/caa0ef59-cfc3-45a0-9258-497653e6d17c)     | ![mongoose](https://github.com/akashpadampalle/habit-tracker/assets/45806342/e2e0bccc-4a9b-4a0d-a42f-226be3928d22)                      |
| :-------- | :------- | :------------------------------- |
| `nodejs`   | `express` | `mongoose` |


## Project live link

base-url 👉 [https://polling-system-api-pi.vercel.app/api/v1/](https://polling-system-api-pi.vercel.app/api/v1/)

## API Reference

#### Create a Question/Survey/Poll

```http
  POST /questions/create
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `title`   | `string` | **Required**. to create question |

![create_question](https://github.com/akashpadampalle/polling-system-api/assets/45806342/161ff905-e77a-4843-9990-6578c3ce517a)


#### Get Question details

```http
  GET /questions/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id of question to fetch |

![get_question](https://github.com/akashpadampalle/polling-system-api/assets/45806342/5b85c272-2f9a-4119-9f95-d968a1ac7716)


#### Create options to the Question

```http
  POST /questions/${id}/options/create
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id of question to fetch |
| `text`    | `string` | **Required**. to create option        |

![create_option](https://github.com/akashpadampalle/polling-system-api/assets/45806342/1f55b7cc-0dd2-42da-abb7-fe187cb2aa93)


#### Add vote to the option

```http
  GET /options/${id}/add_vote
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of option to add vote |

![add_votes](https://github.com/akashpadampalle/polling-system-api/assets/45806342/e583bae7-0da0-47ee-9295-6cd4c73eaa5d)

#### Delete options

```http
  DELETE /options/${id}/delete
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of option to delete |

![delete_option](https://github.com/akashpadampalle/polling-system-api/assets/45806342/5d8368ee-6afe-4f29-982f-5424c53a20b7)

#### Delete question

```http
  DELETE /questions/${id}/delete
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of question to delete |

![delete_question](https://github.com/akashpadampalle/polling-system-api/assets/45806342/16768b77-60a1-4c54-ac8f-79444b3cf547)

