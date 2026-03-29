# Uber Backend API Documentation

**Version:** 1.0.0  
**Last Updated:** March 29, 2025

## Base URL

```
Development: http://localhost:5000/api/v1
Production: https://api.uber-clone.com/api/v1
```

---

## Authentication Flow

### Overview
The API uses **JWT (JSON Web Token) based authentication** with cookie-based session management.

### Token Details
- **Algorithm:** JWT (HS256)
- **Expiration:** 24 hours
- **Storage:** HTTP-only cookie (automatically set on register/login)
- **Header:** Contains `_id` and `email` claims

### Authentication Process
1. **Register/Login** → Server generates JWT token
2. **Token Stored** → Automatically set as `token` cookie
3. **Authenticated Requests** → Token validated via middleware
4. **Blacklist on Logout** → Token added to blacklist collection
5. **Protected Routes** → Middleware checks token validity and blacklist status

### Required Headers for Protected Routes
```
Cookie: token=<jwt_token>
Content-Type: application/json
```

### Authentication Errors
- `401` - No token provided
- `401` - Invalid or expired token
- `401` - Blacklisted token (user already logged out)

---

## Common Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "user": { /* user/captain object */ } or "data": { /* response data */ }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Specific error details"
}
```

### HTTP Status Codes
| Code | Meaning |
|------|---------|
| `200` | OK - Request successful |
| `201` | Created - Resource created successfully |
| `400` | Bad Request - Validation failed or user already exists |
| `401` | Unauthorized - Authentication failed or token invalid |
| `404` | Not Found - User/resource not found |
| `409` | Conflict - Server error during processing |
| `500` | Internal Server Error - Server error |



---

# USER ENDPOINTS

## 1. Register User

**Endpoint Name:** User Registration  
**Method:** `POST`  
**URL:** `/users/register`  
**Authentication Required:** No  

**Description:**  
Create a new user account. Email must be unique. Password is automatically hashed using bcryptjs before storage.

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

### Validation Rules
| Field | Rules |
|-------|-------|
| `fullname.firstname` | Required, minimum 3 characters |
| `fullname.lastname` | Optional, minimum 3 characters (if provided) |
| `email` | Required, valid email format, unique |
| `password` | Required, minimum 6 characters |

### Success Response (201)
```json
{
  "message": "User created successfully",
  "success": true,
  "user": {
    "_id": "65a7f3c1e4d9f2b8c1a2e5f9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Cookie Set:**
```
Set-Cookie: token=<jwt_token>; HttpOnly
```

### Error Responses

**400 - User Already Exists**
```json
{
  "message": "User already exist with the credential",
  "success": false,
  "error": "Already exist with email"
}
```

**400 - Validation Error**
```json
{
  "success": false,
  "message": "Validation failed"
}
```

**400 - Server Error**
```json
{
  "message": "Internal server Error",
  "success": false,
  "error": "Error details"
}
```

### Notes
- Password is hashed using bcryptjs (10 salt rounds)
- JWT token automatically generated and set as cookie
- Token expires in 24 hours
- Password field excluded from response

---

## 2. Login User

**Endpoint Name:** User Login  
**Method:** `POST`  
**URL:** `/users/login`  
**Authentication Required:** No  

**Description:**  
Login with email and password credentials. Password is compared using bcryptjs. Returns JWT token via cookie.

### Request Body
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Validation Rules
| Field | Rules |
|-------|-------|
| `email` | Required, valid email format |
| `password` | Required |

### Success Response (200)
```json
{
  "message": "User logged in successfully",
  "success": true,
  "user": {
    "_id": "65a7f3c1e4d9f2b8c1a2e5f9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

**Cookie Set:**
```
Set-Cookie: token=<jwt_token>; HttpOnly
```

### Error Responses

**400 - Missing Fields**
```json
{
  "message": "All fields required"
}
```

**404 - User Not Found**
```json
{
  "message": "user not found",
  "success": false,
  "error": "User does not exist"
}
```

**401 - Invalid Password**
```json
{
  "message": "Invalid Credential",
  "error": "Password mismatched",
  "success": false
}
```

**500 - Server Error**
```json
{
  "message": "Internal server error",
  "success": false,
  "error": "Error details"
}
```

### Notes
- Password validation uses bcryptjs compare method
- JWT token generated with 24-hour expiration
- Token includes user `_id` and `email` in claims

---

## 3. Get Profile

**Endpoint Name:** Get User Profile  
**Method:** `GET`  
**URL:** `/users/profile`  
**Authentication Required:** Yes  

**Description:**  
Retrieve the authenticated user's profile information. User ID extracted from JWT token.

### Request Headers
```
Cookie: token=<jwt_token>
```

### Success Response (200)
```json
{
  "message": "User profile fethced successfully",
  "success": true,
  "user": {
    "_id": "65a7f3c1e4d9f2b8c1a2e5f9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

### Error Responses

**401 - No Token**
```json
{
  "message": "No token provided",
  "success": false
}
```

**401 - Blacklisted Token**
```json
{
  "message": "Unauthrized access",
  "success": false,
  "err": "Trying to fetch profile of a blacklisted token"
}
```

**401 - Invalid Token**
```json
{
  "message": "Invalid token",
  "success": false
}
```

**500 - Server Error**
```json
{
  "message": "Internal server error",
  "error": "Error details",
  "success": false
}
```

### Notes
- User ID obtained from JWT token claims
- Authentication middleware validates token before accessing profile
- Password never included in response

---

## 4. Logout User

**Endpoint Name:** User Logout  
**Method:** `POST`  
**URL:** `/users/logout`  
**Authentication Required:** Yes  

**Description:**  
Logout user by blacklisting the JWT token and clearing the cookie. Subsequent requests with this token will be rejected.

### Request Headers
```
Cookie: token=<jwt_token>
```

### Success Response (200)
```json
{
  "message": "Logged out successfully",
  "success": true
}
```

**Cookie Cleared:**
```
Set-Cookie: token=; HttpOnly; Max-Age=0
```

### Error Responses

**401 - No Token**
```json
{
  "message": "No token provided",
  "success": false
}
```

**401 - Blacklisted Token**
```json
{
  "message": "Unauthrized access",
  "success": false,
  "err": "Trying to fetch profile of a blacklisted token"
}
```

**500 - Server Error**
```json
{
  "message": "Internal server error",
  "error": "Error details",
  "success": false
}
```

### Notes
- Token added to `blacklistToken` collection in database
- Cookie cleared on client side (Max-Age=0)
- User cannot use this token after logout
- Re-login required for further authenticated requests

---

# CAPTAIN ENDPOINTS

## 1. Register Captain

**Endpoint Name:** Captain Registration  
**Method:** `POST`  
**URL:** `/captains/register`  
**Authentication Required:** No  

**Description:**  
Register a new captain (driver) account with vehicle information. Email and vehicle must be unique.

### Request Body
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123XYZ",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Validation Rules
| Field | Rules |
|-------|-------|
| `fullname.firstname` | Required, minimum 3 characters |
| `fullname.lastname` | Optional, minimum 3 characters (if provided) |
| `email` | Required, valid email format, unique |
| `password` | Required, minimum 6 characters |
| `vehicle.color` | Required, minimum 3 characters |
| `vehicle.plate` | Required, minimum 3 characters |
| `vehicle.capacity` | Required, integer, minimum 1 |
| `vehicle.vehicleType` | Required, enum: `["car", "motorcycle", "auto"]` |

### Success Response (200)
```json
{
  "message": "Captain created successfully",
  "captain": {
    "_id": "65a7f3c1e4d9f2b8c1a2e5fa",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123XYZ",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "ltd": null,
      "lng": null
    },
    "socketId": null,
    "__v": 0
  },
  "success": true
}
```

**Cookie Set:**
```
Set-Cookie: token=<jwt_token>; HttpOnly
```

### Error Responses

**401 - Email Already Exists**
```json
{
  "message": "Already exist with email",
  "success": false,
  "error": "User exists"
}
```

**409 - Validation/Server Error**
```json
{
  "message": "Something went wrong",
  "success": false,
  "error": "Error details"
}
```

### Notes
- Password is hashed using bcryptjs before storing
- Default status is "inactive"
- Location fields initially null
- JWT token automatically generated and set as cookie
- Token expires in 24 hours

---

## 2. Login Captain

**Endpoint Name:** Captain Login  
**Method:** `POST`  
**URL:** `/captains/login`  
**Authentication Required:** No  

**Description:**  
Login with email and password credentials. Password validation uses bcryptjs.

### Request Body
```json
{
  "email": "jane@example.com",
  "password": "password123"
}
```

### Validation Rules
| Field | Rules |
|-------|-------|
| `email` | Required, valid email format |
| `password` | Required |

### Success Response (200)
```json
{
  "message": "Captain logged in successfully",
  "captain": {
    "_id": "65a7f3c1e4d9f2b8c1a2e5fa",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123XYZ",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "__v": 0
  },
  "success": true
}
```

**Cookie Set:**
```
Set-Cookie: token=<jwt_token>; HttpOnly
```

### Error Responses

**401 - User Not Found**
```json
{
  "message": "No user found",
  "success": false,
  "error": "User do not exist"
}
```

**401 - Invalid Password**
```json
{
  "message": "Invalid credentials",
  "success": false,
  "error": "Invalid password"
}
```

**409 - Server Error**
```json
{
  "message": "Something went wrong",
  "success": false,
  "error": "Error details"
}
```

### Notes
- Password validated using bcryptjs compare method
- JWT token includes captain `_id` and `email`
- Token expires in 24 hours

---

## 3. Get Captain Profile

**Endpoint Name:** Get Captain Profile  
**Method:** `GET`  
**URL:** `/captains/profile`  
**Authentication Required:** Yes  

**Description:**  
Retrieve authenticated captain's profile including vehicle details and status. Captain ID extracted from JWT token.

### Request Headers
```
Cookie: token=<jwt_token>
```

### Success Response (200)
```json
{
  "message": "Captain profile fetched successfully",
  "success": true,
  "captain": {
    "_id": "65a7f3c1e4d9f2b8c1a2e5fa",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123XYZ",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "ltd": null,
      "lng": null
    },
    "socketId": null,
    "__v": 0
  }
}
```

### Error Responses

**401 - No Token**
```json
{
  "message": "No token provided",
  "success": false
}
```

**401 - Blacklisted Token**
```json
{
  "message": "Unauthrized access",
  "success": false,
  "err": "Trying to fetch profile of a blacklisted token"
}
```

**401 - Invalid Token**
```json
{
  "message": "Invalid token",
  "success": false
}
```

**404 - Captain Not Found**
```json
{
  "message": "User not found",
  "success": false
}
```

**409 - Server Error**
```json
{
  "message": "Something went wrong",
  "success": false,
  "error": "Error details"
}
```

### Notes
- Captain ID obtained from JWT token claims
- Status can be "active" or "inactive"
- Location initially null (updated when captain comes online)
- Password never included in response

---

## 4. Logout Captain

**Endpoint Name:** Captain Logout  
**Method:** `POST`  
**URL:** `/captains/logout`  
**Authentication Required:** Yes  

**Description:**  
Logout captain by clearing the cookie. Token is not blacklisted (unlike user logout).

### Request Headers
```
Cookie: token=<jwt_token>
```

### Success Response (200)
```json
{
  "message": "User logged out succesfully",
  "success": true
}
```

**Cookie Cleared:**
```
Set-Cookie: token=; HttpOnly; Max-Age=0
```

### Error Responses

**401 - No Token**
```json
{
  "message": "No token provided",
  "success": false
}
```

**401 - Blacklisted Token**
```json
{
  "message": "Unauthrized access",
  "success": false,
  "err": "Trying to fetch profile of a blacklisted token"
}
```

**404 - Captain Not Found**
```json
{
  "message": "User not found",
  "success": false
}
```

**409 - Server Error**
```json
{
  "message": "Something went wrong",
  "success": false,
  "error": "Error details"
}
```

### Notes
- Cookie cleared on client side (Max-Age=0)
- Captain must re-login for authenticated requests
- Unlike user logout, token is not added to blacklist

---

## Quick Reference Table

| Endpoint | Method | Auth | Status | Description |
|----------|--------|------|--------|-------------|
| `/users/register` | POST | No | 201 | Register new user |
| `/users/login` | POST | No | 200 | User login |
| `/users/profile` | GET | Yes | 200 | Get user profile |
| `/users/logout` | POST | Yes | 200 | User logout (tokens blacklisted) |
| `/captains/register` | POST | No | 200 | Register new captain |
| `/captains/login` | POST | No | 200 | Captain login |
| `/captains/profile` | GET | Yes | 200 | Get captain profile |
| `/captains/logout` | POST | Yes | 200 | Captain logout |

---

## Key Implementation Notes

### Token Management
- **JWT Expiration:** 24 hours
- **Token Storage:** HTTP-only cookie (name: `token`)
- **Token Claims:** `_id`, `email`
- **Signing Algorithm:** HS256

### Password Security
- **Hashing:** bcryptjs with 10 salt rounds
- **Comparison:** bcryptjs.compare() method
- **Excluded:** Password never returned in API responses

### Database Collections
- `user` - User accounts (with embedded fullname)
- `captain` - Captain/driver accounts with vehicle details
- `blacklistToken` - Logout tokens (user only)

### Validation Middleware
- `registerUserValidator` - Validates user registration fields
- `registerCaptainValidator` - Validates captain registration fields
- `loginUserValidator` - Validates user login fields
- `loginCaptainValidator` - Validates captain login fields
- `validate` - Express-validator middleware that checks errors

### Authentication Middleware
- `IdentifyUSer` - Validates token, checks blacklist, sets `req.user` with decoded claims

---

**Last Updated:** March 29, 2025  
**Version:** 1.0.1
