// src/server/router/index.ts
import { createRouter } from "src/server/router/context"
import { quoteRouter } from "src/server/router/quote"
import superjson from "superjson"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("quote.", quoteRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
