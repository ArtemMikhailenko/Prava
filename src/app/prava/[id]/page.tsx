// src/app/prava/[id]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import { CategoryTemplate } from '@/components/CategoryTemplate/CategoryTemplate'
import { getCategoryData } from '@/data/categories'
import { JSX } from 'react'

// Синхронный метаданные (можно оставить sync)
export function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Metadata {
  const categoryData = getCategoryData(params?.id)

  if (!categoryData) {
    return {
      title: 'Категория не найдена',
      description: 'Запрашиваемая категория водительских прав не найдена',
    }
  }

  return {
    title: categoryData.title,
    description: categoryData.subtitle,
  }
}

// Сделаем страницу async
export default async function CategoryPage({
  params,
}: {
  params: { id: string }
}): Promise<JSX.Element> {
  const categoryData = getCategoryData(params?.id)

  if (!categoryData) {
    notFound()
  }

  return <CategoryTemplate data={categoryData} />
}
