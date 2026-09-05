# 2FA Authentication App

A full-stack authentication application with a React/Vite client and an Express/MongoDB server. It supports account registration, login, email verification with OTP, password reset with OTP, logout, and authenticated user checks.

## Project Structure

- `client/` - React frontend built with Vite
- `server/` - Express API with MongoDB, JWT cookies, and Nodemailer email delivery

## Requirements

- Node.js 18 or newer
- MongoDB database
- SMTP account for sending verification and password-reset emails

## Configuration

Create `server/.env`:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SENDER_EMAIL=your_sender_email
NODE_ENV=development
```

Create `client/.env`:

```env
VITE_BACKEND_URL=http://localhost:8000
```

Do not commit either `.env` file or real credentials.

## Installation

Install dependencies in both applications:

```bash
cd server
npm install

cd ../client
npm install
```

## Running the App

Start the API in one terminal:

```bash
cd server
npm run dev
```

Start the frontend in a second terminal:

```bash
cd client
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

The API health response is available at `http://localhost:8000/`.

## Main Routes

### Frontend

- `/` - Home page
- `/login` - Register or log in
- `/email-verify` - Verify an account with an OTP
- `/reset-password` - Reset a forgotten password

### API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/send-verify-otp`
- `POST /api/auth/verify-email`
- `GET /api/auth/is-authenticated`
- `POST /api/auth/send-reset-otp`
- `POST /api/auth/reset-password`
- `GET /api/user/data`

## Available Scripts

### Client

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run lint` - Run Oxlint
- `npm run preview` - Preview the production build

### Server

- `npm run dev` - Start the API with Nodemon
- `npm start` - Start the API with Node.js
