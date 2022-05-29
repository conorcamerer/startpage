import { useState, useEffect } from 'react'
import useSWR from 'swr'
import dayjs from 'dayjs'


export default function StartPage() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const [time, setTime] = useState(new Date())
  const { data: topStories } = useSWR('https://hacker-news.firebaseio.com/v0/topstories.json', fetcher)
  const { data: story } = useSWR(() => 'https://hacker-news.firebaseio.com/v0/item/'+topStories[0]+'.json', fetcher)


  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    )
    return () => {
      clearInterval(interval)
    }
  }, [time])

  return (
      <main className="w-screen h-screen font-sans flex justify-center items-center">
          <div className="w-3/5 h-1/2 mb-10">
              <div className="w-5/12 h-full bg-white border rounded px-8 py-6">
                <h1 className="font-display text-xl font-medium text-neutral-800">Start Page</h1>
                <div className="mt-6 text-neutral-600 space-y-4">
                  <p>It&apos;s currently <span className="px-2 rounded bg-neutral-100 text-neutral-500 font-medium" suppressHydrationWarning>{dayjs(time).format('h:mm:ss a')}</span></p>
                  <p>Trending { story ? <a className="px-2 rounded bg-neutral-100 text-emerald-500 font-medium" href={`https://news.ycombinator.com/item?id=${story.id}`} target="_blank" rel="noreferrer">{story.title}</a> : ""}</p>
                </div>
              </div>
          </div>
      </main>
  )
}