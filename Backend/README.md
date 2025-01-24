<!-- @format -->

# Backend API Documentation

### Endpoint

## `/users/register`

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

### Endpoint

## `/users/login`

### Description

This endpoint is used to login an existing user. It requires the user's email and password.

### HTTP Method

`POST`

### Request Body

The request body should be a JSON object with the following structure:

```json
{
    "email": "string",
    "password": "string"
}
```

### Validation

-   `email`: Must be a valid email address.
-   `password`: Must be at least 6 characters long.

### Responses

#### Success

-   **Status Code**: 200 OK
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
            "password": "string"
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

#### Authentication Errors

-   **Status Code**: 401 Unauthorized
-   **Response Body**:
    ```json
    {
        "message": "Invalid email or password"
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

## Endpoint

## `/users/profile`

### Description

This endpoint is used to get the profile of the currently authenticated user.

### HTTP Method

`GET`

### Headers

-   `Authorization`: Bearer token

### Responses

#### Success

-   **Status Code**: 200 OK
-   **Response Body**:
    ```json
    {
        "_id": "string",
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "socketId": "string"
    }
    ```

#### Authentication Errors

-   **Status Code**: 401 Unauthorized
-   **Response Body**:
    ```json
    {
        "message": "Authentication required"
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

### Endpoint

## `/users/logout`

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Headers

-   `Authorization`: Bearer token

### Responses

#### Success

-   **Status Code**: 200 OK
-   **Response Body**:
    ```json
    {
        "message": "Logged out successfully"
    }
    ```

#### Authentication Errors

-   **Status Code**: 401 Unauthorized
-   **Response Body**:
    ```json
    {
        "message": "Authentication required"
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

## `/captains/register`

### Description

This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

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
    "password": "string",
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
    }
}
```

### Validation

-   `fullname.firstname`: Must be at least 3 characters long.
-   `email`: Must be a valid email address.
-   `password`: Must be at least 6 characters long.
-   `vehicle.color`: Must be at least 3 characters long.
-   `vehicle.plate`: Must be at least 3 characters long.
-   `vehicle.capacity`: Must be at least 1.
-   `vehicle.vehicleType`: Must be one of `car`, `motorcycle`, `auto`.

### Responses

#### Success

-   **Status Code**: 201 Created
-   **Response Body**:
    ```json
    {
        "token": "(String): JWT Token",
        "captain": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "password": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string"
            }
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
