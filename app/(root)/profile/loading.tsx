import { Skeleton } from '@/components/ui/skeleton'

export default function ProfileLoading() {
  return (
    <div className="flex flex-col pb-3">
      {/* Header */}
      <div className="">
        <Skeleton className="bg-indigo-50 h-[50px] w-[200px]" />
      </div>

      <div className="profile">
        <Skeleton className="bg-indigo-50 h-44 w-full" />
        <Skeleton className="bg-indigo-50 h-44 w-full" />
      </div>

      <div className="mt-8 mb-4">
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
