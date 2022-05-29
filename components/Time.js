import { useState, useEffect } from 'react'
import dayjs from 'dayjs'


export default function Time() {
    const [time, setTime] = useState(new Date())

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
      <span className="px-2 rounded bg-neutral-100 text-neutral-500 font-medium" suppressHydrationWarning>{dayjs(time).format('h:mm:ss a')}</span>
    )
}