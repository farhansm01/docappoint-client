# DocAppoint — Doctor Appointment Manager

🌐 **Live Site:** [https://docappoint-client-indol.vercel.app/](https://docappoint-client-indol.vercel.app/)

## Features

- 🔐 **Secure Authentication** — Email/password and Google OAuth login powered by Better Auth with session management and protected private routes
- 🩺 **Browse & Book Doctors** — Explore verified specialists, view detailed profiles with availability, fees, hospital info, and book appointments in minutes
- 📅 **Personal Dashboard** — Manage all your bookings in one place — update appointment details or cancel with instant UI updates and toast feedback
- 🔍 **Doctor Search** — Search doctors by name on the All Appointments page for quick and easy discovery
- 👤 **Profile Management** — View and update your name and profile photo directly from the dashboard without any page reload
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop with a clean, consistent UI across all screen sizes
- 🚀 **SEO Optimized** — Custom metadata on every page, a branded 404 error page, and no errors on route reload for a smooth user experience

## Tech Stack

**Client**

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Better Auth](https://www.better-auth.com/) (client)
- [React Hook Form](https://react-hook-form.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

**Server**

- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [Better Auth](https://www.better-auth.com/) (server)
- [Google OAuth 2.0](https://developers.google.com/identity)

## Pages

| Page                    | Route                | Auth Required |
| ----------------------- | -------------------- | ------------- |
| Home                    | `/`                  | No            |
| All Appointments        | `/appointments`      | No            |
| Doctor Details          | `/appointments/[id]` | Yes           |
| Dashboard — My Bookings | `/dashboard`         | Yes           |
| Dashboard — My Profile  | `/dashboard`         | Yes           |
| Login                   | `/login`             | No            |
| Register                | `/register`          | No            |
| 404                     | `*`                  | No            |

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials

### Clone the repositories

```bash
# Client
git clone https://github.com/your-username/docappoint-client
cd docappoint-client
npm install

# Server
git clone https://github.com/your-username/docappoint-server
cd docappoint-server
npm install
```

### Environment Variables

Create a `.env` file in the **client** root:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

Create a `.env` file in the **server** root:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:3000
PORT=5000
```

### Run locally

```bash
# Start server
cd docappoint-server
npm start

# Start client
cd docappoint-client
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deployment

- **Client** → [Vercel](https://vercel.com)
- **Server** → [Vercel](https://vercel.com) (with `vercel.json`)

## Links

- 🔗 Client Repo: [GitHub](https://github.com/farhansm01/docappoint-client)
- 🔗 Server Repo: [GitHub](https://github.com/farhansm01/docappoint-server)
- 🌐 Live Site: [DocAppoint](https://docappoint-client-indol.vercel.app)
