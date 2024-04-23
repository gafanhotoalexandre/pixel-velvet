import Image from 'next/image'
import Link from 'next/link'
import translate from 'translate'

import { Collection } from '@/components/shared/Collection'
import { navLinks } from '@/constants'
import { getAllImages } from '@/lib/actions/image.actions'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1
  const searchQuery = (searchParams?.query as string) || ''
  let translatedQuery = ''

  if (searchQuery) {
    try {
      translatedQuery = await translate(searchQuery, {
        from: 'pt',
        to: 'en',
      })
    } catch (error) {
      console.error('Erro ao traduzir:', error)
    }
  }

  const images = await getAllImages({ page, searchQuery: translatedQuery })

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Liberte sua Visão Criativa com o PixelVelvet
        </h1>

        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="imagem" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  )
}
