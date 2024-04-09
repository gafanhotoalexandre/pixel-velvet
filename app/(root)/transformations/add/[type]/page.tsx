import { Header } from '@/components/shared/Header'

import { transformationTypes } from '@/constants'

export default function AddTransformationTypePage({
  params: { type },
}: SearchParamProps) {
  const transformation = transformationTypes[type]
  return (
    <Header title={transformation.title} subtitle={transformation.subTitle} />
  )
}
