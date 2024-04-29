import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <div className="flex flex-col pb-3">
      {/* Header */}
      <div className="mb-5">
        <Skeleton className="bg-indigo-50 h-72 w-full rounded-[20px]" />
      </div>

      <div className="my-4">
        <Skeleton className="bg-indigo-50 h-16 w-full" />
      </div>

      <div className="flex gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="bg-indigo-50 h-[220px] w-full" />
        ))}
      </div>
    </div>
  )
}
