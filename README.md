# Where's Waldo API 🕵️‍♂️
The backend service for the "Where's Waldo" photo-tagging game. This API handles game initialization, coordinate validation (checking if a character was found), and managing the scoreboard.

## 🛠 Tech Stack
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Language**: TypeScript
*   **ORM**: Prisma
*   **Database**: PostgreSQL
*   **Testing**: Vitest

## 🚀 Features
* RESTful API for game operations.
* Coordinate Validation: Server-side logic to determine if a user's click falls within the hit-box of a target character.
* Leaderboard System: Persists high scores and user completion times.
* Type Safety: Full TypeScript integration with Prisma-generated types.

## 📂 Project Structure
```bash
├── src
│   ├── controllers   # Request handlers (game logic, scores)
│   ├── lib           # Helper functions and shared utilities
│   ├── queries       # Database interaction logic (Prisma calls)
│   ├── routes        # API Route definitions
│   ├── tests         # Vitest integration/unit tests
│   ├── validators    # Input validation logic (e.g., Zod schemas)
│   └── app.ts        # Express app configuration & entry point
├── prisma            # Prisma schema and migrations
├── .env              # Environment variables
└── package.json
```

## 📡 API Endpoints
| Method | Endpoint | Description |
| :--- | :---: | :---: |
| GET | /map_id/x_coord/y_coord/character_name | Check coordinate of the characters |
| GET |	/scoreboard/map_id | Get Scoreboard for specific map |
| POST | /scoreboard | Add username to Scoreboard when completed a map |

## 🧪 Testing
This project uses Vitest for unit and integration testing.

To run the test suite:
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```
