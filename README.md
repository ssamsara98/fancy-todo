# Fancy Todo - Server

## Todo

### POST /api/todos

- **Request Header**

  ```json
  {
    "Content-Type": "application/json"
  }
  ```

- **Request Body**

  ```json
  {
    "title": "Learn REST API",
    "description": "Learn how to create RESTful API with Express and MongoDB",
    "due_date": "2020-01-29"
  }
  ```

- **Response**

  ```json
  {
    "_id": "<ObjectId>",
    "title": "Learn REST API",
    "description": "Learn how to create RESTful API with Express and MongoDB",
    "due_date": "2020-01-29T00:00:00.000Z",
    "status": 0,
    "createdAt": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-01-29T00:00:00.000Z",
    "__v": 0
  }
  ```

### GET /api/todos

- **Request Header**

  _None_

- **Request Body**

  _None_

- **Response**

  ```json
  [
    {
      "_id": "<ObjectId>",
      "title": "Learn REST API",
      "description": "Learn how to create RESTful API with Express and MongoDB",
      "due_date": "2020-01-29T00:00:00.000Z",
      "status": 0,
      "createdAt": "2020-01-29T00:00:00.000Z",
      "updatedAt": "2020-01-29T00:00:00.000Z",
      "__v": 0
    },
    ...
  ]
  ```

### GET /api/todos/:id

- **Request Header**

  _None_

- **Request Body**

  _None_

- **Response**

  ```json
  {
    "_id": "<ObjectId>",
    "title": "Learn REST API",
    "description": "Learn how to create RESTful API with Express and MongoDB",
    "due_date": "2020-01-29T00:00:00.000Z",
    "status": 0,
    "createdAt": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-01-29T00:00:00.000Z",
    "__v": 0
  }
  ```

### PUT /api/todos/:id

- **Request Header**

  ```json
  {
    "Content-Type": "application/json"
  }
  ```

- **Request Body**

  ```json
  {
    "title": "Learn REST API with Expess",
    "description": "Learn how to create RESTful API with Express and No-SQL",
    "due_date": "2020-01-29"
  }
  ```

- **Response**

  ```json
  {
    "_id": "<ObjectId>",
    "title": "Learn REST API with Expess",
    "description": "Learn how to create RESTful API with Express and No-SQL",
    "due_date": "2020-01-29T00:00:00.000Z",
    "status": 0,
    "createdAt": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-01-29T00:00:00.000Z",
    "__v": 0
  }
  ```

### PATCH /api/todos/:id/done

- **Request Header**

  _None_

- **Request Body**

  _None_

- **Response**

  ```json
  {
    "_id": "<ObjectId>",
    "title": "Learn REST API with Expess",
    "description": "Learn how to create RESTful API with Express and No-SQL",
    "due_date": "2020-01-29T00:00:00.000Z",
    "status": 1,
    "createdAt": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-01-29T00:00:00.000Z",
    "__v": 0
  }
  ```

### PATCH /api/todos/:id/undone

- **Request Header**

  _None_

- **Request Body**

  _None_

- **Response**

  ```json
  {
    "_id": "<ObjectId>",
    "title": "Learn REST API with Expess",
    "description": "Learn how to create RESTful API with Express and No-SQL",
    "due_date": "2020-01-29T00:00:00.000Z",
    "status": 0,
    "createdAt": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-01-29T00:00:00.000Z",
    "__v": 0
  }
  ```

### DELETE /api/todos/:id

- **Request Header**

  _None_

- **Request Body**

  _None_

- **Response**

  ```json
  {
    "_id": "<ObjectId>",
    "title": "Learn REST API with Expess",
    "description": "Learn how to create RESTful API with Express and No-SQL",
    "due_date": "2020-01-29T00:00:00.000Z",
    "status": 1,
    "createdAt": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-01-29T00:00:00.000Z",
    "__v": 0
  }
  ```
