import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'

import { Header } from '@/components/shared/Header'
import { TransformationForm } from '@/components/shared/TransformationForm'

import { getUserById } from '@/lib/actions/user.actions'
import { transformationTypes } from '@/constants'
import { IUser } from '@/lib/models/user.model'

export default async function AddTransformationTypePage({
  params: { type },
}: SearchParamProps) {
  const { userId } = auth()
  const transformation = transformationTypes[type]

  if (!userId) redirect('/sign-in')

  const user: IUser = await getUserById(userId)
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance!}
      />
    </>
  )
}
