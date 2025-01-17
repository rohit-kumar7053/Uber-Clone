<!-- @format -->

# Backend API Documentation

## `/users/register` Endpoint

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### HTTP Method

`POST`

### Request Body

The request body should be a JSON object with the following structure:

```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

### Validation

-   `email`: Must be a valid email address.
-   `fullname.firstname`: Must be at least 3 characters long.
-   `password`: Must be at least 6 characters long.

### Responses

#### Success

-   **Status Code**: 201 Created
-   **Response Body**:
    ```json
    {
        "token": "(String): JWT Token",
        "user": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "socketId": "string"
        }
    }
    ```

#### Validation Errors

-   **Status Code**: 400 Bad Request
-   **Response Body**:
    ```json
    {
        "errors": [
            {
                "msg": "string",
                "param": "string",
                "location": "string"
            }
        ]
    }
    ```

#### Server Errors

-   **Status Code**: 500 Internal Server Error
-   **Response Body**:
    ```json
    {
        "error": "string"
    }
    ```
