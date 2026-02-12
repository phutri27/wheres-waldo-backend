# Where's Waldo API 🕵️‍♂️
Where's Waldo - Backend API
The backend service for the "Where's Waldo" photo-tagging game. This API handles game initialization, coordinate validation (checking if a character was found), and managing the scoreboard.

🛠 Tech Stack
Runtime: Node.js

Framework: Express.js

Language: TypeScript

ORM: Prisma

Database: PostgreSQL (Recommended) / SQLite (for dev)

Testing: Vitest

🚀 Features
RESTful API for game operations.

Coordinate Validation: Server-side logic to determine if a user's click falls within the hit-box of a target character.

Leaderboard System: Persists high scores and user completion times.

Type Safety: Full TypeScript integration with Prisma-generated types.