import { Skeleton } from '@/components/ui/skeleton'

export default function CreditLoading() {
  return (
    <div className="flex flex-col">
      <div className="space-y-3 mb-5">
        <Skeleton className="bg-indigo-50 h-[60px] w-[330px]" />
        <Skeleton className="bg-indigo-50 h-[20px] w-[460px]" />
      </div>

      <div className="credits-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="bg-indigo-50 h-[550px] w-full" />
        ))}
      </div>
    </div>
  )
}
