import { formatDistance, subDays } from './date-fns'

//=> "3 days ago"
console.log(formatDistance(subDays(new Date(), 3), new Date())
)

console.log(subDays(new Date()))