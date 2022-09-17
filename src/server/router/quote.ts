import { createRouter } from "src/server/router/context"

export const quoteRouter = createRouter()
    .query('getRandomQuote', {
        async resolve() {
            return await fetch('https://api.quotable.io/random')
                .then((response) => response.json())
        }
    })
    .mutation('getNewRandomQuote', {
        async resolve() {
            return await fetch('https://api.quotable.io/random')
                .then((response) => response.json())
        }
    })