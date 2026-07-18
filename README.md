<div align="center">
<img src="./public/logotr.png" alt="GetWords logo" width="150"/>

*Your personal dictionary, your way.*
 
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=black)
![Neon](https://img.shields.io/badge/Neon-00E599?logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-brightgreen)
 
</div>

GetWords is a personal vocabulary web app where you save the words you don't know, define them in your own words, organize them by category, and (soon) practice them with AI-generated quizzes.

---

## ✨ Features

- 📝 **Add words** with your own custom definitions
- 🗂️ **Organize by category** (exams, work, travel, tech, etc.)
- 🔐 **Secure authentication** with Clerk
- ⚡ **Fast and simple UI** built with Tailwind CSS
- 🤖 **AI-generated quizzes** to practice your saved words *(coming soon)*

---

## 🛠️ Tech Stack

| Layer          | Technology                  |
|----------------|------------------------------|
| Framework      | [Next.js](https://nextjs.org/) (App Router) |
| Language       | TypeScript                  |
| Styling        | Tailwind CSS + shadcn/ui     |
| Database       | [Neon](https://neon.tech/) (Serverless Postgres) |
| ORM            | [Drizzle ORM](https://orm.drizzle.team/) |
| Authentication | [Clerk](https://clerk.com/)  |
| Icons          | Hugeicons                   |
| Deployment     | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
getwords/
├── app/
│   ├── api/
│   │   └── words/
│   │       └── route.ts        # API route for CRUD operations on words
│   ├── dictionary/
│   │   └── page.tsx             # Main dashboard
│   ├── layout.tsx               # Root layout with ClerkProvider
│   └── page.tsx                 # Landing page
├── components/
│   ├── dashboard/
│   │   ├── AddWord.tsx          # Form to add a new word
│   │   └── Sidebar.tsx          # Category navigation
│   ├── landing/
│   │   ├── Navbar.tsx
│   │   ├── Cards.tsx
│   │   └── Preview.tsx
│   └── ui/                      # shadcn/ui components
├── src/
│   └── db/
│       ├── schema.ts            # Drizzle table definitions
│       ├── index.ts             # DB connection
│       └── queries/
│           └── words.ts         # Query functions (create, read, update, delete)
├── drizzle.config.ts            # Drizzle Kit configuration
├── proxy.ts                # Clerk route protection
└── globals.css
```

---

## 🗄️ Database Schema

**`categories`**
| Column     | Type      | Description                |
|------------|-----------|-----------------------------|
| id         | serial    | Primary key                 |
| userId     | text      | Owner (from Clerk)          |
| name       | text      | Category name                |
| createdAt  | timestamp | Creation date                |

**`words`**
| Column      | Type      | Description                       |
|-------------|-----------|------------------------------------|
| id          | serial    | Primary key                        |
| userId      | text      | Owner (from Clerk)                 |
| word        | text      | The word itself                    |
| definition  | text      | User's own definition              |
| categoryId  | integer   | Foreign key → `categories.id`      |
| createdAt   | timestamp | Creation date                       |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech/) account (Postgres database)
- A [Clerk](https://clerk.com/) account (authentication)

### 1. Clone the repository

```bash
git clone https://github.com/BerryUY/getwords.git
cd getwords
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
# Neon (Postgres)
DATABASE_URL=postgresql://user:password@ep-xxx.neon.tech/getwords

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dictionary
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dictionary
```

### 4. Run database migrations

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📖 API Routes

| Method | Route          | Description                    |
|--------|----------------|---------------------------------|
| GET    | `/api/words`   | Get all words for the logged-in user |
| POST   | `/api/words`   | Create a new word                |
| PATCH  | `/api/words`   | Update an existing word          |
| DELETE | `/api/words`   | Delete a word                    |

All routes are protected — they require an authenticated user via Clerk.

---

## 👤 Author

Made with ❤️ by [Berry](https://github.com/BerryUY)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
