import { Skeleton } from '@/components/ui/skeleton'

export default function TransformationsLoading() {
  return (
    <div className="flex flex-col pt-3">
      <div className="space-y-3 mb-5">
        <Skeleton className="bg-indigo-50 h-[60px] w-[330px]" />
        <Skeleton className="bg-indigo-50 h-[20px] w-[360px]" />
      </div>

      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="space-y-2 mb-3">
          <Skeleton className="bg-indigo-50 h-4 w-[160px]" />
          <Skeleton className="bg-indigo-50 h-10 w-full" />
        </div>
      ))}

      <div className="media-uploader-field">
        <Skeleton className="bg-indigo-50 flex size-full flex-col" />
        <Skeleton className="bg-indigo-50 flex size-full flex-col" />
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="bg-indigo-50 h-10 w-full" />
        <Skeleton className="bg-indigo-50 h-10 w-full" />
      </div>
    </div>
  )
}
