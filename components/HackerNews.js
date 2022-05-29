import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function HN() {
    const { data: topStories } = useSWR('https://hacker-news.firebaseio.com/v0/topstories.json', fetcher)
    const { data: story } = useSWR(() => 'https://hacker-news.firebaseio.com/v0/item/'+topStories[0]+'.json', fetcher)
    
    return (
        story ? <a className="px-2 rounded bg-neutral-100 text-emerald-500 font-medium" href={`https://news.ycombinator.com/item?id=${story.id}`}>{story.title}</a> : ""
    )
}