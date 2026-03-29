# Uber Clone - Frontend

A modern, responsive React frontend for an Uber-like transportation application. Built with **React 19**, **Vite**, **Redux Toolkit**, and **Tailwind CSS**.

![Status](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Architecture](#project-architecture)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Routing](#routing)
- [Scripts](#scripts)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

---

## Overview

This is the frontend application for an Uber-like ride-sharing platform. It provides a complete user and captain (driver) authentication system with role-based access control, responsive UI, and seamless integration with the Node.js backend API.

### Key Functionalities
- **Dual Authentication**: Separate login/signup for Users and Captains
- **Protected Routes**: Secure pages accessible only to authenticated users
- **Real-time State Management**: Redux Toolkit for centralized state
- **Modern UI**: Tailwind CSS for responsive design
- **API Integration**: Axios with automatic cookie-based authentication

---

## Features

✅ **User Authentication**
- Email/password registration
- Login with credential validation
- Secure logout with token management
- Profile management

✅ **Captain (Driver) Authentication**
- Captain registration with vehicle details
- Captain-specific login
- Driver profile management
- Logout functionality

✅ **Protected Routes**
- Route protection based on authentication status
- Redirect to login for unauthenticated access
- Persistent sessions with localStorage

✅ **Responsive Design**
- Mobile-first approach
- Works seamlessly on all screen sizes
- Tailwind CSS utility classes

✅ **Error Handling**
- User-friendly error messages
- Redux-based error state management
- Loading states for async operations

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | Frontend library |
| **Vite** | 7.2.4 | Build tool & dev server |
| **React Router DOM** | 7.13.2 | Client-side routing |
| **Redux Toolkit** | 2.11.2 | State management |
| **React Redux** | 9.2.0 | React-Redux bindings |
| **Axios** | 1.14.0 | HTTP client |
| **Tailwind CSS** | 4.2.2 | Styling framework |
| **Lucide React** | 1.7.0 | Icon library |
| **ESLint** | 9.39.1 | Code linting |

---

## Project Structure

```
src/
├── App/
│   ├── App.jsx                 # Root app component
│   ├── app.routes.jsx          # Route definitions
│   ├── auth.store.js           # Redux store configuration
│   ├── index.css               # Global styles
│   ├── protectedWrapper.jsx    # Route protection HOC
│   └── index.html              # Entry HTML file
│
├── Features/
│   ├── Auth/
│   │   ├── Hooks/
│   │   │   └── useAuth.jsx     # Authentication logic hook
│   │   ├── Pages/
│   │   │   ├── UserLogin.jsx           # User login page
│   │   │   ├── UserSignup.jsx          # User registration page
│   │   │   ├── UserLogOut.jsx          # User logout handler
│   │   │   ├── CaptainLogin.jsx        # Captain login page
│   │   │   ├── CaptainRegister.jsx     # Captain registration page
│   │   │   └── captainLogout.jsx       # Captain logout handler
│   │   ├── Service/
│   │   │   ├── user.service.js         # User API endpoints
│   │   │   └── captain.service.js      # Captain API endpoints
│   │   └── Slices/
│   │       └── authSlice.js    # Redux auth slice
│   │
│   └── Home/
│       ├── Home.jsx            # Home page (protected)
│       └── Start.jsx           # Landing/splash page
│
└── main.jsx                # React entry point
```

---

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
cd c:\Users\kesha\OneDrive\Desktop\Full Stack\Uber\Frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables** (if needed)
   - Backend API URL is configured in `src/Features/Auth/Service/user.service.js`
   - Default: `http://localhost:3000/api/v1`

---

## Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Output files will be in the `dist/` directory

### Preview Production Build

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

---

## Configuration

### API Base URL

Edit `src/Features/Auth/Service/user.service.js`:

```javascript
const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/users',
    withCredentials: true  // Enable cookies
})
```

- `baseURL`: Backend API endpoint
- `withCredentials: true`: Allows automatic cookie handling for JWT authentication

### Vite Configuration

Main config file: `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Tailwind CSS

Configuration: `tailwind.config.js` (auto-generated)
- Utility-first CSS framework
- Integrated via `@tailwindcss/vite` plugin

---

## Project Architecture

### State Management (Redux Toolkit)

**Auth Store** (`src/App/auth.store.js`)
```javascript
{
  auth: {
    user: null,        // Current authenticated user
    loading: true,     // Loading state
    error: null        // Error messages
  }
}
```

**Auth Slice** (`src/Features/Auth/Slices/authSlice.js`)
- Reducers: `setUser`, `setError`, `setLoading`
- Actions: Dispatch these to update auth state

### Authentication Flow

1. **User submits form** → Component collects data
2. **API Call** → `useAuth` hook triggers service function
3. **State Update** → Redux dispatches action
4. **Navigation** → Router navigates based on success/failure
5. **Token Storage** → JWT stored in browser cookies + localStorage

### Protected Routes

`src/App/protectedWrapper.jsx` - HOC that:
- Checks if user is authenticated
- Redirects unauthenticated users to login
- Wraps protected pages (e.g., Home)

---

## API Integration

### User Service (`src/Features/Auth/Service/user.service.js`)

| Function | Method | Endpoint | Purpose |
|----------|--------|----------|---------|
| `registerUser()` | POST | `/register` | Register new user |
| `loginUser()` | POST | `/login` | Login user |
| `logOutUser()` | POST | `/logout` | Logout user |
| `getProfile()` | GET | `/profile` | Fetch user profile |

### Captain Service (`src/Features/Auth/Service/captain.service.js`)

Similar structure as user service but for `/api/v1/captains` endpoint

### Axios Configuration

- Base URL: `http://localhost:3000/api/v1`
- Credentials: `withCredentials: true` (for cookie-based auth)
- Headers: `Content-Type: application/json`

---

## State Management

### Redux Store Setup

Store is configured in `src/App/auth.store.js`:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Features/Auth/Slices/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})
```

### Using Auth State

Access in components:
```javascript
import { useSelector } from 'react-redux';

const user = useSelector(state => state.auth.user);
const loading = useSelector(state => state.auth.loading);
const error = useSelector(state => state.auth.error);
```

### Custom Hook: `useAuth`

Provides methods:
```javascript
const {
  handleRegister,    // Register new user
  handleLogin,       // Login user
  handleLogOut,      // Logout user
  handleGetProfile   // Fetch profile
} = useAuth();
```

---

## Routing

Routes defined in `src/App/app.routes.jsx`:

| Path | Component | Protected | Purpose |
|------|-----------|-----------|---------|
| `/Start` | Start | No | Landing/splash screen |
| `/` | Home | ✅ Yes | Dashboard (home) |
| `/user/login` | UserLogin | No | User login page |
| `/user/signup` | UserSignup | No | User registration page |
| `/user/logout` | UserLogOut | ✅ Yes | User logout handler |
| `/captain/login` | CaptainLogin | No | Captain login page |
| `/captain/signup` | CaptainRegister | No | Captain registration |
| `/captain/logout` | CaptainLogout | ✅ Yes | Captain logout handler |

### Accessing Routes

```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/'); // Navigate to home
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Environment Setup

### Backend Connection Requirements

Ensure backend server is running:
```bash
# Start backend (from Backend folder)
npm start
# Expected running on: http://localhost:3000
```

### Expected Backend Configuration

- Base URL: `http://localhost:3000/api/v1`
- CORS enabled: Allow `http://localhost:5173`
- Cookie support: For JWT token management

---

## Token Management

### How It Works

1. **On Login/Register**
   - Backend sets JWT in cookie
   - Token also returned in response
   - Frontend stores in `localStorage` as backup

2. **On Protected Routes**
   - Middleware checks token in cookies
   - Automatic inclusion in API requests (`withCredentials: true`)

3. **On Logout**
   - Token removed from localStorage
   - Backend removes from blacklist

### LocalStorage Usage

```javascript
// Save token on login
localStorage.setItem('token', user.token)

// Remove token on logout
localStorage.removeItem('token')
```

---

## UI Components

### Built with Tailwind CSS

- **Responsive Grid Layout** - Mobile-first design
- **Form Inputs** - Styled input fields with focus states
- **Buttons** - Primary and secondary button styles
- **Cards** - Container components with shadows
- **Navigation** - Responsive navigation elements

Example from UserLogin page:
```jsx
<input
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
  placeholder="Email"
/>
```

---

## Error Handling

### User-Facing Errors

Errors are managed in Redux and displayed to users:
```javascript
if (error) {
  return <div className="text-red-500">{error}</div>
}
```

### Common Error Scenarios

- **Invalid credentials** - "Invalid email or password"
- **User not found** - "User does not exist"
- **Network error** - "Please check your connection"
- **Validation error** - Field-specific messages from backend

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

---

## Performance Optimizations

✅ **Vite Fast Refresh** - Instant HMR during development
✅ **Code Splitting** - Route-based lazy loading
✅ **Tree Shaking** - Unused code removal
✅ **Minification** - Optimized production builds
✅ **CSS Purging** - Tailwind removes unused styles

---

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3001
```

### CORS Issues

Ensure backend has CORS configured:
```javascript
cors({
    origin: 'http://localhost:5173',
    credentials: true
})
```

### Token Not Persisting

- Check `withCredentials: true` in axios config
- Verify backend sets `HttpOnly` cookie
- Check browser cookie settings

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

---

## Development Workflow

### Adding a New Page

1. Create component in `src/Features/[Feature]/Pages/`
2. Add route in `src/App/app.routes.jsx`
3. Import and use Router

### Adding State to Redux

1. Create new slice in `src/Features/[Feature]/Slices/`
2. Add to store reducer in `src/App/auth.store.js`
3. Use `useSelector` and `useDispatch` in components

### API Integration

1. Add method in `src/Features/Auth/Service/*.service.js`
2. Use in custom hook (e.g., `useAuth.jsx`)
3. Call from component

---

## Key Dependencies Explained

| Package | Purpose |
|---------|---------|
| `react-router-dom` | Client-side routing and navigation |
| `@reduxjs/toolkit` | Simplified Redux setup |
| `react-redux` | Bindings to use Redux in React |
| `axios` | HTTP requests with interceptors |
| `tailwindcss` | Utility-first CSS |
| `lucide-react` | SVG icon library |

---

## Future Enhancements

- [ ] Real-time location tracking
- [ ] Live ride status updates
- [ ] Payment integration
- [ ] User ratings system
- [ ] Ride history
- [ ] Advanced search filters
- [ ] Dark mode support
- [ ] Push notifications
- [ ] Ride sharing options
- [ ] Driver ratings display

---

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check code quality
4. Submit a pull request

---

## License

MIT License - feel free to use this project for personal or commercial use.

---

## Support

For issues or questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React & Vite**
