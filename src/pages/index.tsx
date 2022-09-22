import { trpc } from "src/utils/trpc"
import Head from "next/head"

export default function index() {

    const client = trpc.useContext()
    const {data:quote} = trpc.useQuery(['quote.getRandomQuote'])

    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>
                    Random quote generator | Next.js
                </title>
            </Head>
            <div className="sm:grid sm:place-content-center sm:h-64 grid place-content-center">
                <figure className="p-4 sm:border sm:rounded-lg sm:shadow-lg w-96">
                    <blockquote>
                        {!quote && (
                            <p className="text-center italic">
                                Please wait...
                            </p>
                        )}
                        <p className="text-lg font-medium text-gray-900">
                            {quote?.content && (
                                <div className="text-left text-sm sm:text-base sm:text-center">
                                    {quote.content}
                                </div>
                            )}
                        </p>
                    </blockquote>
                    {!quote 
                        ? "" 
                        :   <div>
                                <figcaption className="mt-4 block text-left">
                                    <span className="mt-4">Quote by <span className="italic">{quote.author}</span></span>
                                </figcaption>
                                <div className="mt-4 text-center">
                                    <button 
                                        className="p-2 border rounded-lg bg-slate-900 text-white w-full"
                                        onClick={() => client.invalidateQueries('quote.getRandomQuote')}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                    }
                </figure>
            </div>
        </div>
    )
}