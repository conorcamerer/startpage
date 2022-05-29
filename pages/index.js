import Time from '/components/Time'
import HN from '/components/HackerNews'


export default function StartPage() {

  return (
      <main className="w-screen h-screen font-sans flex justify-center items-center">
          <div className="px-8 xl:px-0 xl:w-3/5 h-1/2 mb-10">
              <div className="xl:w-5/12 h-full bg-white border rounded px-8 py-6">
                <h1 className="font-display text-xl font-medium text-neutral-800">Start Page</h1>
                <div className="mt-6 text-neutral-600 space-y-4">
                  <p>It&apos;s currently <Time/></p>
                  <p>Trending <HN/></p>
                </div>
              </div>
          </div>
      </main>
  )
}