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
            <div className="grid place-content-center h-screen">
                <figure className="p-4 border rounded-lg shadow-lg w-96">
                    <blockquote>
                        {!quote && (
                            <p className="text-center italic">
                                Please wait...
                            </p>
                        )}
                        <p className="text-lg font-medium text-gray-700">
                            {quote?.content && (
                                <div>
                                    {quote.content}
                                </div>
                            )}
                        </p>
                    </blockquote>
                    {!quote 
                        ? "" 
                        :   <figcaption className="mt-4 flex justify-between">
                                <span className="italic">{quote?.author}</span> 
                                <span className="underline cursor-pointer" onClick={() => client.invalidateQueries('quote.getRandomQuote')}>Next</span>
                            </figcaption>
                    }
                </figure>
            </div>
        </div>
    )
}