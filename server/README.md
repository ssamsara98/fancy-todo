# Fancy Todo - Server

- [`POST` Create Todo](#create-todo)
- [`GET` Get Todo List](#get-todo-list)
- [`GET` Get Todo](#get-todo)
- [`PATCH` Update Todo](#update-todo)
- [`Delete` Update Todo](#delete-todo)

---

## Create Todo

- **Method** `POST`
- **URL** `/todos`
- **Query Params** `None`
- **Data Params**
  ```json
  {
    "title": "string",
    "description": "string",
    "due_date": "date"
  }
  ```
- **Success Response**
  - **Code** `201`
  - **Content**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "status": "string",
      "due_date": "date"
    }
    ```

---

## Get Todo List

- **Method** `GET`
- **URL** `/todos`
- **Query Params**
  ```json
  {
    "page?": "number",
    "limit?": "number"
  }
  ```
- **Data Params** `None`
- **Success Response**
  - **Code** `200`
  - **Content**
    ```json
    {
      "prev": "number",
      "next": "number",
      "count": "number",
      "total": "number",
      "result": [
        {
          "id": "number",
          "title": "string",
          "description": "string",
          "status": "string",
          "due_date": "date"
        }
      ]
    }
    ```

---

## Get Todo

- **Method** `GET`
- **URL** `/todos/:id`
- **Query Params** `None`
- **Data Params** `None`
- **Success Response**
  - **Code** `200`
  - **Content**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "status": "string",
      "due_date": "date"
    }
    ```

---

## Update Todo

- **Method** `Patch`
- **URL** `/todos/:id`
- **Query Params** `None`
- **Data Params**
  ```json
  {
    "title?": "string",
    "description?": "string",
    "status?": "string",
    "due_date?": "date"
  }
  ```
- **Success Response**
  - **Code** `200`
  - **Content**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "status": "string",
      "due_date": "date"
    }
    ```

---

## Delete Todo

- **Method** `Delete`
- **URL** `/todos/:id`
- **Query Params** `None`
- **Data Params** `None`
- **Success Response**
  - **Code** `200`
  - **Content**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "status": "string",
      "due_date": "date"
    }
    ```

---
